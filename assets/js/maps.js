window.portMap = {
  
  render(opts = {}) {
    const h = opts.height || 420;
    return `
      <svg id="port-svg" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid meet"
           class="w-full" style="height:${h}px;display:block;background:#eef3f0;">
        <defs>
          <radialGradient id="heatGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#dc2626" stop-opacity="0.55"/>
            <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
          </radialGradient>
          <pattern id="water" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="#cfe3e8"/>
            <path d="M0 12 Q 6 7 12 12 T 24 12" stroke="#b6d2d8" stroke-width="1" fill="none"/>
          </pattern>
          <pattern id="ore" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#3a2e25"/>
            <circle cx="4" cy="4" r="1.2" fill="#5a4a3a"/>
            <circle cx="10" cy="9" r="1" fill="#5a4a3a"/>
          </pattern>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-opacity="0.3"/>
          </filter>
        </defs>

        
        <rect x="0" y="0" width="800" height="160" fill="url(#water)"/>
        <text x="18" y="26" font-size="10" fill="#5a7a82" font-weight="700" letter-spacing="2">BAÍA DE SÃO MARCOS</text>
        <text x="18" y="40" font-size="8" fill="#7e9aa0" font-family="JetBrains Mono, monospace">-2.5689, -44.3664</text>

        
        <rect x="0" y="160" width="800" height="360" fill="#e8efe9"/>

        
        <g filter="url(#pinShadow)">
          <rect x="80"  y="100" width="140" height="70" fill="#9aa5a0" rx="3"/>
          <text x="150" y="142" font-size="10" fill="#fff" text-anchor="middle" font-weight="700">PÍER I</text>
          <rect x="280" y="100" width="140" height="70" fill="#9aa5a0" rx="3"/>
          <text x="350" y="142" font-size="10" fill="#fff" text-anchor="middle" font-weight="700">PÍER II</text>
          <rect x="480" y="100" width="140" height="70" fill="#9aa5a0" rx="3"/>
          <text x="550" y="142" font-size="10" fill="#fff" text-anchor="middle" font-weight="700">PÍER III</text>
        </g>

        
        <g>
          <rect x="60"  y="200" width="180" height="90" fill="url(#ore)" rx="4"/>
          <text x="150" y="248" font-size="11" fill="#fdb913" text-anchor="middle" font-weight="700">PÁTIO A</text>
          <text x="150" y="262" font-size="8"  fill="#d9a32e" text-anchor="middle" font-family="JetBrains Mono, monospace">MINÉRIO · 2.1 Mt</text>

          <rect x="280" y="200" width="200" height="90" fill="url(#ore)" rx="4"/>
          <text x="380" y="248" font-size="11" fill="#fdb913" text-anchor="middle" font-weight="700">PÁTIO B</text>
          <text x="380" y="262" font-size="8"  fill="#d9a32e" text-anchor="middle" font-family="JetBrains Mono, monospace">MINÉRIO · 2.8 Mt</text>

          <rect x="520" y="200" width="220" height="90" fill="url(#ore)" rx="4"/>
          <text x="630" y="248" font-size="11" fill="#fdb913" text-anchor="middle" font-weight="700">PÁTIO C</text>
          <text x="630" y="262" font-size="8"  fill="#d9a32e" text-anchor="middle" font-family="JetBrains Mono, monospace">MINÉRIO · 3.4 Mt</text>
        </g>

        
        <g id="roads">
          <path class="road road-main" d="M 30 330 L 770 330"/>
          <path class="road road-main" d="M 400 180 L 400 500"/>
          <path class="road" d="M 100 330 L 100 480"/>
          <path class="road" d="M 250 330 L 250 480"/>
          <path class="road" d="M 550 330 L 550 480"/>
          <path class="road" d="M 700 330 L 700 480"/>
          <path class="road" d="M 30 420 L 770 420"/>
          <path class="road" d="M 30 480 L 770 480"/>

          
          <text x="40" y="322" font-size="8" fill="#6a7a74" font-family="JetBrains Mono, monospace">VIA PRINCIPAL L-1</text>
          <text x="40" y="412" font-size="8" fill="#6a7a74" font-family="JetBrains Mono, monospace">VIA PRINCIPAL L-2</text>
        </g>

        
        ${opts.showInterdiction !== false ? `
          <g>
            <path id="interdiction" class="road-interdicted" d="M 480 420 L 620 420"/>
            <g id="interdict-marker">
              <circle cx="550" cy="420" r="11" fill="#dc2626" class="blink"/>
              <text x="550" y="424" font-size="11" fill="#fff" text-anchor="middle" font-weight="900">!</text>
              <text x="550" y="408" font-size="9" fill="#dc2626" text-anchor="middle" font-weight="700">INTERDIÇÃO</text>
            </g>
          </g>
        ` : ''}

        
        <g>
          <rect x="40" y="350" width="60" height="40" fill="#fff" stroke="#9aa5a0" rx="2"/>
          <text x="70" y="368" font-size="8" fill="#5a6a64" text-anchor="middle" font-weight="700">PORTARIA N</text>
          <text x="70" y="380" font-size="7" fill="#8aa098" text-anchor="middle">Entrada</text>

          <rect x="700" y="350" width="70" height="40" fill="#fff" stroke="#9aa5a0" rx="2"/>
          <text x="735" y="368" font-size="8" fill="#5a6a64" text-anchor="middle" font-weight="700">OFICINA</text>
          <text x="735" y="380" font-size="7" fill="#8aa098" text-anchor="middle">Manutenção</text>

          <rect x="340" y="440" width="120" height="50" fill="#fff" stroke="#9aa5a0" rx="2"/>
          <text x="400" y="462" font-size="9" fill="#5a6a64" text-anchor="middle" font-weight="700">CENTRO OPERACIONAL</text>
          <text x="400" y="474" font-size="7" fill="#8aa098" text-anchor="middle">Administração · Salas de controle</text>
        </g>

        
        ${opts.showHeat ? `
          <g id="heatLayer">
            <circle cx="380" cy="380" r="80" fill="url(#heatGrad)"/>
            <circle cx="600" cy="350" r="70" fill="url(#heatGrad)"/>
            <circle cx="180" cy="450" r="60" fill="url(#heatGrad)"/>
          </g>
        ` : ''}

        
        ${opts.showRoute ? `
          <path class="route-live" d="${opts.routePath || 'M 70 370 Q 200 260 350 170'}"/>
        ` : ''}

        
        ${opts.showTeams !== false ? `
          <g id="teamsLayer">
            ${[
              { id:'α', x:150, y:285 },
              { id:'β', x:350, y:170 },
              { id:'γ', x:630, y:285 },
              { id:'δ', x:70,  y:355 },
              { id:'ε', x:380, y:285 },
              { id:'ζ', x:550, y:170 },
            ].map(t => `
              <g transform="translate(${t.x},${t.y})" filter="url(#pinShadow)">
                <circle r="10" fill="#0e1a14" stroke="#fff" stroke-width="2"/>
                <text y="3.5" font-size="10" fill="#fff" text-anchor="middle" font-weight="700">${t.id}</text>
              </g>
            `).join('')}
          </g>
        ` : ''}

        
        ${opts.showVehicles !== false ? `<g id="vehiclesLayer"></g>` : ''}

        
        ${opts.currentVehicle ? `
          <g transform="translate(${opts.currentVehicle.x},${opts.currentVehicle.y})" filter="url(#pinShadow)">
            <circle r="13" fill="#fdb913" stroke="#fff" stroke-width="3"/>
            <circle r="6"  fill="#0e1a14"/>
            <text y="-22" font-size="10" fill="#0e1a14" text-anchor="middle" font-weight="800">${opts.currentVehicle.label || 'VOCÊ'}</text>
            <circle r="13" fill="none" stroke="#fdb913" stroke-width="2" opacity="0.4">
              <animate attributeName="r" values="13;24;13" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>
        ` : ''}
      </svg>
    `;
  },

  
  animateVehicles(container = 'port-svg') {
    const svg = document.getElementById(container);
    if (!svg) return;
    const layer = svg.querySelector('#vehiclesLayer');
    if (!layer) return;

    const paths = [
      { d:'M 30 330 L 770 330', color:'#fdb913', label:'VL-01' },
      { d:'M 400 500 L 400 180', color:'#fdb913', label:'VL-03' },
      { d:'M 100 480 L 100 330 L 770 330', color:'#fdb913', label:'VL-06' },
      { d:'M 30 420 L 770 420', color:'#008f4c', label:'VL-10' },
      { d:'M 250 480 L 250 330 L 550 330 L 550 480', color:'#fdb913', label:'VL-02' },
    ];

    paths.forEach((p, i) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', p.d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'none');
      svg.appendChild(path);

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('filter', 'url(#pinShadow)');
      g.innerHTML = `
        <circle r="7" fill="${p.color}" stroke="#fff" stroke-width="2"/>
        <text y="-11" font-size="8" font-weight="700" fill="${p.color === '#fdb913' ? '#7a5a00' : p.color}" text-anchor="middle">${p.label}</text>
      `;
      layer.appendChild(g);

      const len = path.getTotalLength();
      let dist = Math.random() * len;
      const speed = 0.4 + Math.random() * 0.6;

      function tick() {
        if (!document.body.contains(g)) return;
        dist = (dist + speed) % len;
        const pt = path.getPointAtLength(dist);
        g.setAttribute('transform', `translate(${pt.x},${pt.y})`);
        requestAnimationFrame(tick);
      }
      tick();
    });
  },
};

window.operationalMaps = {
  instances: {},
  layers: {},
  points: {
    portaria: [-2.5667, -44.3708],
    patioA: [-2.5718, -44.3738],
    patioB: [-2.5688, -44.3664],
    patioC: [-2.5654, -44.3588],
    pierII: [-2.5626, -44.3644],
    pierIII: [-2.5609, -44.3567],
    oficina: [-2.5708, -44.3578],
    centro: [-2.5689, -44.3664],
  },

  configs: {
    'cmp-rastreio': {
      containerId: 'cmp-live-map',
      center: [-2.5672, -44.3648],
      zoom: 14,
      route: ['patioA', 'patioB', 'pierII'],
      vehicles: [
        { label: 'VL-07', point: 'patioB', color: '#fdb913', ring: 'rgba(253,185,19,.22)', popup: 'Veículo alocado a caminho' },
        { label: 'VL-06', point: 'portaria', color: '#008f4c', ring: 'rgba(0,143,76,.18)', popup: 'Veículo de apoio' },
      ],
      teams: [
        { label: 'β', point: 'pierII', color: '#0e1a14', popup: 'Equipe aguardando transporte' },
      ],
      interdictions: [
        { from: 'patioC', to: 'pierIII', label: 'Interdição ativa' },
      ],
    },
    'dsp-dashboard': {
      containerId: 'dsp-dashboard-map',
      center: [-2.5678, -44.3643],
      zoom: 14,
      route: ['portaria', 'patioB', 'pierII'],
      vehicles: [
        { label: 'VL-07', point: 'patioB', color: '#fdb913', ring: 'rgba(253,185,19,.22)', popup: 'Melhor match sugerido' },
        { label: 'VL-03', point: 'oficina', color: '#008f4c', ring: 'rgba(0,143,76,.18)', popup: 'Veículo em deslocamento' },
        { label: 'VL-10', point: 'patioC', color: '#0e1a14', ring: 'rgba(14,26,20,.14)', popup: 'Veículo em ronda' },
      ],
      teams: [
        { label: 'α', point: 'patioA', color: '#0e1a14', popup: 'Equipe Manutenção α' },
        { label: 'β', point: 'pierII', color: '#0e1a14', popup: 'Equipe Manutenção β' },
      ],
      interdictions: [
        { from: 'patioC', to: 'pierIII', label: 'Via interditada' },
      ],
    },
    'dsp-mapa': {
      containerId: 'dsp-ops-map',
      center: [-2.5679, -44.3641],
      zoom: 14,
      route: ['portaria', 'patioA', 'patioB', 'pierII'],
      vehicles: [
        { label: 'VL-01', point: 'patioA', color: '#008f4c', ring: 'rgba(0,143,76,.18)', popup: 'Disponível' },
        { label: 'VL-03', point: 'oficina', color: '#fdb913', ring: 'rgba(253,185,19,.22)', popup: 'Em rota' },
        { label: 'VL-04', point: 'centro', color: '#94a3b8', ring: 'rgba(148,163,184,.18)', popup: 'Parado' },
        { label: 'VL-10', point: 'patioC', color: '#fdb913', ring: 'rgba(253,185,19,.22)', popup: 'Em rota' },
      ],
      teams: [
        { label: 'α', point: 'patioA', color: '#0e1a14', popup: 'Equipe α' },
        { label: 'β', point: 'pierII', color: '#0e1a14', popup: 'Equipe β' },
        { label: 'γ', point: 'pierIII', color: '#0e1a14', popup: 'Equipe γ' },
      ],
      interdictions: [
        { from: 'patioC', to: 'pierIII', label: 'Interdição ativa' },
      ],
    },
  },

  initForSection(sectionId) {
    const cfg = this.configs[sectionId];
    if (!cfg) return;
    const el = document.getElementById(cfg.containerId);
    if (!el || typeof L === 'undefined') return;

    this.destroy(sectionId);
    el.innerHTML = '';

    const map = L.map(el, {
      center: cfg.center,
      zoom: cfg.zoom,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19,
    }).addTo(map);

    const layerGroup = L.layerGroup().addTo(map);
    this.instances[sectionId] = map;
    this.layers[sectionId] = layerGroup;

    this.renderRoute(sectionId, cfg);
    this.renderInterdictions(sectionId, cfg);
    this.renderVehicles(sectionId, cfg);
    this.renderTeams(sectionId, cfg);

    setTimeout(() => map.invalidateSize(), 180);
  },

  destroy(sectionId) {
    const map = this.instances[sectionId];
    if (!map) return;
    try { map.remove(); } catch (e) {}
    delete this.instances[sectionId];
    delete this.layers[sectionId];
  },

  destroyAll() {
    Object.keys(this.instances).forEach((key) => this.destroy(key));
  },

  renderRoute(sectionId, cfg) {
    if (!cfg.route?.length) return;
    const coords = cfg.route.map((key) => this.points[key]).filter(Boolean);
    if (coords.length < 2) return;
    L.polyline(coords, { color: '#005c59', weight: 10, opacity: 0.18 }).addTo(this.layers[sectionId]);
    L.polyline(coords, { color: '#1cb8be', weight: 5, opacity: 0.92 }).addTo(this.layers[sectionId]);
  },

  renderInterdictions(sectionId, cfg) {
    (cfg.interdictions || []).forEach((item) => {
      const from = this.points[item.from];
      const to = this.points[item.to];
      if (!from || !to) return;
      L.polyline([from, to], { color: '#dc2626', weight: 6, opacity: 0.9, dashArray: '8 8' }).addTo(this.layers[sectionId]);
      const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
      L.marker(mid, {
        icon: L.divIcon({
          className: '',
          html: '<div style="width:20px;height:20px;border-radius:999px;background:#dc2626;color:#fff;display:flex;align-items:center;justify-content:center;font:900 12px Inter,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.25)">!</div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        }),
      }).addTo(this.layers[sectionId]).bindPopup(item.label || 'Interdição');
    });
  },

  renderVehicles(sectionId, cfg) {
    (cfg.vehicles || []).forEach((item) => {
      const point = this.points[item.point];
      if (!point) return;
      L.marker(point, {
        icon: L.divIcon({
          className: '',
          html: `<div style="width:18px;height:18px;border-radius:999px;background:${item.color};border:3px solid #fff;box-shadow:0 0 0 5px ${item.ring || 'rgba(0,0,0,.08)'},0 3px 10px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:#fff;font:800 10px Inter,sans-serif;">${item.label.replace('VL-', '')}</div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        }),
      }).addTo(this.layers[sectionId]).bindPopup(`<b>${item.label}</b><br/>${item.popup || 'Veículo operacional'}`);
    });
  },

  renderTeams(sectionId, cfg) {
    (cfg.teams || []).forEach((item) => {
      const point = this.points[item.point];
      if (!point) return;
      L.marker(point, {
        icon: L.divIcon({
          className: '',
          html: `<div style="width:28px;height:28px;border-radius:999px;background:${item.color || '#0e1a14'};border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.22);display:flex;align-items:center;justify-content:center;color:#fff;font:800 11px Inter,sans-serif;">${item.label}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        }),
      }).addTo(this.layers[sectionId]).bindPopup(item.popup || `Equipe ${item.label}`);
    });
  },
};
