window.simulator = {
  interval: null,

  start() {
    this.renderInitial();
    this.interval = setInterval(() => {
      const e = DB.poolEventos[Math.floor(Math.random() * DB.poolEventos.length)];
      DB.eventos.unshift({ t: 0, ...e });
      if (DB.eventos.length > 14) DB.eventos.pop();
      this.renderAll();

      const tma = (3.8 + Math.random() * 0.8).toFixed(1);
      const opt = 89 + Math.floor(Math.random() * 6);
      const kTma = document.getElementById('kpi-tma');
      const kOpt = document.getElementById('kpi-opt');
      if (kTma) kTma.textContent = tma;
      if (kOpt) kOpt.textContent = opt + '%';
    }, 5000);
  },

  stop() {
    if (this.interval) { clearInterval(this.interval); this.interval = null; }
  },

  renderInitial() { this.renderAll(); },

  renderAll() {
    const containers = ['motEventLog','dspEventLog'];
    const html = DB.eventos.slice(0,8).map(e => `
      <div class="flex items-start gap-2 py-1.5 border-b border-vale-border last:border-0">
        <i data-lucide="${e.icon}" class="w-3.5 h-3.5 mt-0.5 ${e.color}"></i>
        <div class="flex-1">
          <div class="text-[10px] text-slate-400 font-mono tabular-nums">${utils.agoMin(e.t)}</div>
          <div class="text-[12px] text-slate-700">${e.msg}</div>
        </div>
      </div>
    `).join('');
    containers.forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.innerHTML = html; }
    });
    lucide.createIcons();
  },
};

