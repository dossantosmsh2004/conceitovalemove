window.utils = {
  clockInterval: null,

  startClock() {
    if (this.clockInterval) clearInterval(this.clockInterval);
    const tick = () => {
      const el = document.getElementById('topbar-clock');
      if (el) el.textContent = new Date().toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
    };
    tick();
    this.clockInterval = setInterval(tick, 30000);
  },

  initials(name) {
    return (name || '').split(' ').map(p => p[0] || '').slice(0,2).join('').toUpperCase() || 'U';
  },

  agoMin(min) {
    if (min < 1) return 'agora';
    if (min < 60) return `${min} min atrás`;
    if (min < 1440) return `${Math.floor(min/60)}h atrás`;
    return `${Math.floor(min/1440)}d atrás`;
  },

  addMinutes(min) {
    const d = new Date(Date.now() + min * 60000);
    return d.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
  },

  filterVias(cond, btnEl) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    const list = cond === 'todos' ? DB.viasStatus : DB.viasStatus.filter(v => v.cond === cond);
    const container = document.getElementById('via-historico-list');
    if (container) {
      container.innerHTML = list.length ? list.map(v => sections._viaItem(v)).join('') :
        '<div class="p-6 text-center text-slate-400 text-sm">Nenhum registro</div>';
      lucide.createIcons();
    }
  },
};

