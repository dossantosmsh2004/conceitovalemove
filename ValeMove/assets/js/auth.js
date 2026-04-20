window.auth = {
  loginMatricula() {
    const mat = document.getElementById('inp-matricula').value.trim().toUpperCase();
    const sen = document.getElementById('inp-senha').value;
    if (!mat || !sen) return ui.loginAlert('Preencha matrícula e senha.', 'error');
    const u = DB.usuarios.find(u => u.matricula === mat && u.senha === sen);
    if (!u) return ui.loginAlert('Matrícula ou senha incorretos.', 'error');
    this.success(u);
  },

  simulateRFID() {
    const zone = document.getElementById('rfid-zone');
    zone.classList.add('reading');
    ui.loginAlert('Lendo crachá...', 'info');
    setTimeout(() => {
      zone.classList.remove('reading');

      const pool = DB.usuarios.filter(u => ['motorista','campo'].includes(u.cargo));
      S.rfidUser = pool[Math.floor(Math.random() * pool.length)];
      S.rfidCode = String(Math.floor(100000 + Math.random() * 900000));
      ui.loginAlert(`Crachá reconhecido: ${S.rfidUser.nome}. Código enviado por e-mail.`, 'success');
      document.getElementById('rfid-zone').style.display = 'none';
      document.getElementById('rfid-code-section').classList.remove('hidden');
      console.info('[RFID Demo] Código:', S.rfidCode);
    }, 1400);
  },

  validateRFIDCode() {
    const code = document.getElementById('inp-rfid-code').value.trim();
    if (!code || !/^\d{6}$/.test(code)) return ui.loginAlert('Informe um código de 6 dígitos.', 'error');
    if (!S.rfidUser) return ui.loginAlert('Sessão expirada. Tente novamente.', 'error');
    this.success(S.rfidUser);
  },

  quickLogin(userId) {
    const u = DB.usuarios.find(x => x.id === userId);
    if (u) this.success(u);
  },

  success(user) {
    S.user = user;
    document.getElementById('screen-login').style.display = 'none';
    document.getElementById('screen-app').classList.add('visible');

    document.getElementById('sb-user-name').textContent = user.nome;
    document.getElementById('sb-user-role').textContent = this.roleLabel(user.cargo);
    document.getElementById('sb-avatar').textContent = utils.initials(user.nome);
    document.getElementById('mobile-profile-name').textContent = user.nome;
    document.getElementById('mobile-profile-role').textContent = this.roleLabel(user.cargo);
    document.getElementById('mobile-profile-avatar').textContent = utils.initials(user.nome);
    document.getElementById('mobile-profile-toggle').textContent = utils.initials(user.nome);

    ui.buildNavs();

    utils.startClock();

    ui.toast(`Bem-vindo ao ValeMove, ${user.nome.split(' ')[0]}!`, 'success');

    simulator.start();

    const menu = MENUS[user.cargo] || [];
    if (menu[0]) ui.navigate(menu[0].id);
    lucide.createIcons();
  },

  logout() {
    S.user = null;
    S.activeSection = null;
    if (S.leafletMap) { try { S.leafletMap.remove(); } catch(e){} S.leafletMap = null; }
    operationalMaps.destroyAll();
    if (rt.map) { try { rt.map.remove(); } catch(e){} rt.map = null; }
    simulator.stop();
    document.getElementById('screen-app').classList.remove('visible');
    document.getElementById('screen-login').style.display = 'flex';
    document.getElementById('login-alert').classList.add('hidden');
    document.getElementById('rfid-zone').style.display = 'block';
    document.getElementById('rfid-code-section').classList.add('hidden');
    document.getElementById('mobile-profile-menu').classList.add('hidden');
    document.getElementById('mobile-profile-toggle').setAttribute('aria-expanded', 'false');
    document.getElementById('mobile-profile-toggle').textContent = '—';
    document.getElementById('mobile-profile-avatar').textContent = '—';
    document.getElementById('mobile-profile-name').textContent = '—';
    document.getElementById('mobile-profile-role').textContent = '—';
    ['inp-matricula','inp-senha','inp-rfid-code'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  },

  roleLabel(cargo) {
    return ({ motorista:'MOTORISTA', campo:'FUNCIONÁRIO', despacho:'ADMINISTRAÇÃO' })[cargo] || cargo.toUpperCase();
  },
};

