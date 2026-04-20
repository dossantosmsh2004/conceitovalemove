window.ui = {
  loginAlert(msg, type) {
    const el = document.getElementById('login-alert');
    el.textContent = msg;
    el.className = `mb-3 p-3 rounded-lg text-[12px] ${
      type==='error'   ? 'bg-red-500/15 border border-red-500/30 text-red-300'  :
      type==='success' ? 'bg-green-500/15 border border-green-500/30 text-green-300':
                          'bg-blue-500/15 border border-blue-500/30 text-blue-300'
    }`;
  },

  buildDemoList() {
    const el = document.getElementById('demo-list');
    const roles = { motorista:'rp-mot', campo:'rp-campo', despacho:'rp-desp' };
    const labels = { motorista:'MOTORISTA', campo:'FUNCIONÁRIO', despacho:'ADMINISTRAÇÃO' };
    el.innerHTML = DB.usuarios.map(u => `
      <button class="demo-btn" onclick="auth.quickLogin('${u.id}')">
        <span class="role-pill ${roles[u.cargo]||''}">${labels[u.cargo]||u.cargo}</span>
        <span class="flex-1">${u.nome}</span>
        <span class="font-mono text-[10px] text-white/30">${u.matricula}</span>
      </button>
    `).join('');
  },

  buildNavs() {
    const cargo = S.user.cargo;
    const menu = MENUS[cargo] || [];

    const nav = document.getElementById('sb-nav');
    const groups = [
      { label: 'OPERAÇÃO', items: menu.filter(m => m.id !== 'proposta') },
      { label: 'SOBRE',    items: menu.filter(m => m.id === 'proposta') },
    ];
    nav.innerHTML = groups.map(g => g.items.length ? `
      <div class="text-[9px] font-bold text-white/25 uppercase tracking-[0.14em] px-3 pt-3 pb-1.5">${g.label}</div>
      ${g.items.map(item => `
        <button class="sb-nav-item" id="sb-${item.id}" onclick="ui.navigate('${item.id}')">
          <i data-lucide="${item.icon}" class="w-4 h-4"></i>
          <span>${item.label}</span>
          ${item.badge ? '<span class="ml-auto w-1.5 h-1.5 rounded-full bg-vale-yellow"></span>' : ''}
        </button>
      `).join('')}
    ` : '').join('');

    const mobileItems = menu.filter(m => !m.hideMobile).slice(0, 4);
    const bn = document.getElementById('bottom-nav');
    bn.style.gridTemplateColumns = `repeat(${mobileItems.length}, 1fr)`;
    bn.innerHTML = mobileItems.map(item => `
      <button class="bn-item" id="bn-${item.id}" onclick="ui.navigate('${item.id}')">
        <i data-lucide="${item.icon}" style="width:20px;height:20px;"></i>
        <span>${item.short || item.label}</span>
      </button>
    `).join('');

    lucide.createIcons();
  },

  toggleMobileProfileMenu(event) {
    event?.stopPropagation();
    const menu = document.getElementById('mobile-profile-menu');
    const toggle = document.getElementById('mobile-profile-toggle');
    const open = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
  },

  closeMobileProfileMenu() {
    const menu = document.getElementById('mobile-profile-menu');
    const toggle = document.getElementById('mobile-profile-toggle');
    if (!menu || !toggle) return;
    menu.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  },

  navigate(sectionId) {
    this.closeMobileProfileMenu();
    operationalMaps.destroyAll();

    if (sectionId === 'proposta') return ui.openProposta();

    S.activeSection = sectionId;

    document.querySelectorAll('.sb-nav-item, .bn-item').forEach(el => el.classList.remove('active'));
    const sb = document.getElementById(`sb-${sectionId}`);
    const bn = document.getElementById(`bn-${sectionId}`);
    if (sb) sb.classList.add('active');
    if (bn) bn.classList.add('active');

    const content = document.getElementById('content');
    content.innerHTML = sections.render(sectionId);

    const menu = MENUS[S.user.cargo] || [];
    const item = menu.find(m => m.id === sectionId);
    document.getElementById('topbar-title').textContent = item?.label || '—';

    sections.afterRender(sectionId);

    content.parentElement.scrollTop = 0;

    lucide.createIcons();
  },

  toast(msg, type='info', duration=3200) {
    const container = document.getElementById('toasts');
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    const icons = { success:'check-circle', error:'x-circle', info:'info', warn:'alert-triangle' };
    el.innerHTML = `<i data-lucide="${icons[type]||'info'}" class="w-4 h-4 flex-shrink-0" style="margin-top:1px;"></i><span>${msg}</span>`;
    container.appendChild(el);
    lucide.createIcons();
    setTimeout(() => {
      el.style.transition = 'opacity .3s';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 300);
    }, duration);
  },

  openModal(html) {
    const root = document.getElementById('modal-root');
    document.getElementById('modal-content').innerHTML = html;
    root.classList.remove('hidden');
    root.classList.add('flex');
    lucide.createIcons();
  },
  closeModal() {
    const root = document.getElementById('modal-root');
    root.classList.add('hidden');
    root.classList.remove('flex');
  },

  openProposta() { ui.openModal(templates.proposta()); },

  openAlerts() {
    ui.openModal(templates.alertas());
  },
};

