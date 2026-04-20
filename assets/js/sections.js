window.sections = {

  render(id) {
    const map = {

      'mot-tarefa':   () => this.motTarefa(),
      'mot-mapa':     () => this.motMapa(),
      'mot-chamados': () => this.motChamados(),
      'mot-reportar': () => this.motReportar(),
      'mot-perfil':   () => this.motPerfil(),

      'cmp-inicio':   () => this.cmpInicio(),
      'cmp-rastreio': () => this.cmpRastreio(),
      'cmp-via':      () => this.cmpVia(),
      'cmp-historico':() => this.cmpHistorico(),

      'dsp-dashboard':() => this.dspDashboard(),
      'dsp-mapa':     () => this.dspMapa(),
      'dsp-chamados': () => this.dspChamados(),
      'dsp-frota':    () => this.dspFrota(),
    };
    return map[id] ? map[id]() : '<div class="card p-6 text-center text-slate-400">Seção em construção</div>';
  },

  afterRender(id) {

    if (['dsp-mapa','dsp-dashboard','cmp-rastreio'].includes(id)) {
      setTimeout(() => operationalMaps.initForSection(id), 120);
    }

    if (id === 'mot-mapa') {
      setTimeout(() => rt.initMap(), 120);
    }

    if (id === 'mot-reportar' || id === 'cmp-via') {
      setTimeout(() => leafletCtl.init('leaflet-map'), 180);
    }
  },

  

  motTarefa() {
    const t = S.tarefaAtual;
    const prioColor = { alta:'bd-err', 'média':'bd-warn', media:'bd-warn', baixa:'bd-mute' }[t.prio] || 'bd-mute';

    return `
      
      <div class="card overflow-hidden mb-4">
        
        <div class="px-5 py-4 bg-gradient-to-br from-vale-ink to-vale-ink-2 text-white">
          <div class="flex items-center gap-2 mb-1">
            <span class="chip bg-vale-yellow/20 text-vale-yellow font-bold">
              <i data-lucide="target" class="w-3 h-3"></i>
              TAREFA ATRIBUÍDA
            </span>
            <span class="ml-auto text-[11px] font-mono opacity-60">${t.id}</span>
          </div>
          <div class="text-[11px] uppercase tracking-wider opacity-70 mb-1">Sugestão da IA · Match Score ${t.score}/100</div>
          <div class="text-xl font-bold">${t.tipo}</div>
          <div class="text-sm opacity-85 mt-0.5">Equipe ${t.equipe}</div>
        </div>

        
        <div class="p-5">
          <div class="flex items-start gap-3 mb-4">
            <div class="flex flex-col items-center pt-1">
              <div class="w-3 h-3 rounded-full bg-vale-green"></div>
              <div class="w-0.5 flex-1 bg-vale-border my-1" style="min-height:24px"></div>
              <div class="w-3 h-3 rounded-full bg-vale-yellow ring-4 ring-vale-yellow/20"></div>
            </div>
            <div class="flex-1">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Origem</div>
              <div class="text-sm font-semibold">${t.origem}</div>
              <div class="h-3"></div>
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Destino</div>
              <div class="text-sm font-semibold">${t.destino}</div>
            </div>
            <span class="chip ${prioColor} font-bold uppercase">${t.prio}</span>
          </div>

          
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-vale-slate rounded-lg p-3 text-center">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">ETA</div>
              <div class="text-xl font-black text-vale-green font-mono">${t.eta}</div>
            </div>
            <div class="bg-vale-slate rounded-lg p-3 text-center">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Distância</div>
              <div class="text-xl font-black text-vale-ink font-mono">${t.dist}</div>
            </div>
            <div class="bg-vale-slate rounded-lg p-3 text-center">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Via</div>
              <div class="text-xl font-black text-vale-ink font-mono">L-1</div>
            </div>
          </div>

          
          <div class="bg-vale-yellow-bg border-l-4 border-vale-yellow rounded-r-lg px-3 py-2.5 mb-4 flex items-start gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-vale-yellow-dk flex-shrink-0 mt-0.5"></i>
            <div class="text-[12px] text-[#6a4d08]">
              <b>Rota otimizada.</b> IA desviou da interdição no Pátio C automaticamente · +0,3 km.
            </div>
          </div>

          
          ${!t.aceito ? `
            <button class="big-action" onclick="mot.aceitarTarefa()">
              <i data-lucide="check-circle" class="w-5 h-5"></i>
              ACEITAR E INICIAR ROTA
            </button>
            <div class="flex gap-2 mt-2">
              <button class="btn btn-ghost flex-1" onclick="mot.recusarTarefa()">
                <i data-lucide="x" class="w-4 h-4"></i> Recusar
              </button>
              <button class="btn btn-ghost flex-1" onclick="mot.adiarTarefa()">
                <i data-lucide="clock" class="w-4 h-4"></i> +5 min
              </button>
            </div>
          ` : !t.concluido ? `
            <button class="big-action yellow" onclick="mot.concluirTarefa()">
              <i data-lucide="flag" class="w-5 h-5"></i>
              MARCAR COMO CONCLUÍDA
            </button>
            <div class="flex gap-2 mt-2">
              <button class="btn btn-ghost flex-1" onclick="ui.navigate('mot-mapa')">
                <i data-lucide="navigation" class="w-4 h-4"></i> Abrir navegação
              </button>
              <button class="btn btn-ghost flex-1" onclick="mot.ligarEquipe()">
                <i data-lucide="radio" class="w-4 h-4"></i> Chamar equipe
              </button>
            </div>
          ` : `
            <div class="bg-vale-green-bg border border-vale-green/30 rounded-lg p-4 text-center">
              <i data-lucide="check-circle-2" class="w-8 h-8 text-vale-green mx-auto mb-2"></i>
              <div class="font-bold text-vale-green">Tarefa concluída</div>
              <div class="text-[12px] text-slate-600 mt-1">Aguardando próxima atribuição da IA...</div>
            </div>
          `}
        </div>
      </div>

      
      <div class="card p-4 mb-4">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Meu veículo
          </div>
          <span class="badge bd-ok">Operacional</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <div class="text-[10px] text-slate-500 uppercase font-semibold">Prefixo</div>
            <div class="text-lg font-bold font-mono">${S.user?.veiculo || 'VL-07'}</div>
          </div>
          <div>
            <div class="text-[10px] text-slate-500 uppercase font-semibold">Combustível</div>
            <div class="flex items-center gap-2 mt-0.5">
              <div class="flex-1 h-1.5 bg-vale-slate rounded-full overflow-hidden">
                <div class="h-full bg-vale-green" style="width:72%"></div>
              </div>
              <span class="text-sm font-bold font-mono">72%</span>
            </div>
          </div>
          <div>
            <div class="text-[10px] text-slate-500 uppercase font-semibold">KM hoje</div>
            <div class="text-lg font-bold font-mono">47,2</div>
          </div>
          <div>
            <div class="text-[10px] text-slate-500 uppercase font-semibold">Corridas hoje</div>
            <div class="text-lg font-bold font-mono">8</div>
          </div>
        </div>
      </div>

      
      <div class="card p-4">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Alertas na sua área
          </div>
          <span class="chip bd-warn">${DB.alertas.length}</span>
        </div>
        <div class="space-y-2">
          ${DB.alertas.slice(0,2).map(a => `
            <div class="flex items-start gap-2.5 p-2.5 rounded-lg border-l-[3px] ${
              a.nivel==='alto'  ? 'bg-red-50 border-red-500' :
              a.nivel==='medio' ? 'bg-amber-50 border-amber-500' :
                                  'bg-blue-50 border-blue-500'
            }">
              <i data-lucide="${a.tipo==='interdicao'?'octagon':a.tipo==='reroute'?'refresh-cw':'clock'}"
                 class="w-4 h-4 flex-shrink-0 mt-0.5 ${
                   a.nivel==='alto'?'text-red-600':a.nivel==='medio'?'text-amber-700':'text-blue-600'
                 }"></i>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] font-semibold">${a.titulo}</div>
                <div class="text-[11px] text-slate-600">${a.msg}</div>
                <div class="text-[10px] text-slate-400 font-mono mt-0.5">${a.tempo}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  motMapa() {
    return `
      
      <div class="card p-4 mb-4">
        <div class="flex items-center justify-between mb-3">
          <div class="font-bold text-sm flex items-center gap-2">
            <i data-lucide="navigation" class="w-4 h-4 text-vale-green"></i>
            Roteirização em tempo real
          </div>
          <span class="chip bg-vale-green-bg text-vale-green-dk">
            <span class="w-1.5 h-1.5 rounded-full bg-vale-green pulse-dot text-vale-green"></span>
            Valhalla · OSM
          </span>
        </div>

        <div class="grid md:grid-cols-[1fr_1fr_auto] gap-2 items-end">
          <div class="field relative" style="margin-bottom:0;">
            <label><i data-lucide="circle" class="inline w-3 h-3 text-vale-green"></i> Origem</label>
            <input type="text" id="rt-origem" placeholder="Endereço ou local de partida" autocomplete="off" oninput="rt.autocomplete('origem', this.value)" onfocus="rt.autocomplete('origem', this.value)"/>
            <div id="ac-origem" class="hidden absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-vale-border rounded-lg shadow-pop max-h-64 overflow-y-auto"></div>
          </div>
          <div class="field relative" style="margin-bottom:0;">
            <label><i data-lucide="map-pin" class="inline w-3 h-3 text-vale-yellow-dk"></i> Destino</label>
            <input type="text" id="rt-destino" placeholder="Endereço ou local de chegada" autocomplete="off" oninput="rt.autocomplete('destino', this.value)" onfocus="rt.autocomplete('destino', this.value)"/>
            <div id="ac-destino" class="hidden absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-vale-border rounded-lg shadow-pop max-h-64 overflow-y-auto"></div>
          </div>
          <button class="btn btn-primary" onclick="rt.calcular()">
            <i data-lucide="route" class="w-4 h-4"></i>
            <span class="hidden sm:inline">Calcular rota</span>
            <span class="sm:hidden">Calcular</span>
          </button>
        </div>

        
        <div class="flex items-center gap-2 flex-wrap mt-3 text-[11px]">
          <span class="text-slate-500">Atalhos:</span>
          <button class="chip bd-info cursor-pointer" onclick="rt.bookmark('pmad')">📍 Porto PMad</button>
          <button class="chip bd-info cursor-pointer" onclick="rt.bookmark('sp')">📍 São Paulo</button>
          <button class="chip bd-info cursor-pointer" onclick="rt.useCurrentLocation()">📡 Minha localização</button>
          <button class="chip bd-mute cursor-pointer" onclick="rt.clear()">Limpar</button>
          <div class="flex-1"></div>
          <button class="chip bd-warn cursor-pointer" onclick="rt.openWaze()">
            <i data-lucide="traffic-cone" class="w-3 h-3"></i>
            Trânsito ao vivo (Waze)
          </button>
        </div>

        <div class="text-[11px] text-slate-500 mt-2">
          <i data-lucide="info" class="inline w-3 h-3"></i>
          Clique no mapa para marcar origem (1º clique) e destino (2º clique), ou digite endereços acima.
        </div>
      </div>

      
      <div class="card overflow-hidden mb-4">
        <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-2 font-bold text-sm">
            <i data-lucide="map" class="w-4 h-4 text-vale-green"></i>
            Mapa em tempo real
          </div>
          <span class="chip bg-vale-green-bg text-vale-green-dk">
            <span class="w-1.5 h-1.5 rounded-full bg-vale-green pulse-dot text-vale-green"></span>
            OpenStreetMap
          </span>
          <div class="flex-1"></div>
          <div class="text-[11px] font-mono text-slate-500 tabular-nums" id="mot-coords">
            Centro: −2.5689, −44.3664
          </div>
        </div>

        <div id="mot-map-container" style="height: 460px; width: 100%; position: relative; z-index:0;"></div>

        
        <div id="route-info-bar" class="hidden px-4 py-3 border-t border-vale-border bg-vale-green-bg">
          <div class="flex items-center gap-4 flex-wrap">
            <div>
              <div class="text-[10px] uppercase tracking-wider text-vale-green-dk font-bold">Distância</div>
              <div class="text-lg font-black font-mono text-vale-green-dk" id="rt-dist">—</div>
            </div>
            <div>
              <div class="text-[10px] uppercase tracking-wider text-vale-green-dk font-bold">Tempo estimado</div>
              <div class="text-lg font-black font-mono text-vale-green-dk" id="rt-time">—</div>
            </div>
            <div class="flex-1"></div>
            <button class="btn btn-ghost" style="padding:6px 12px;font-size:12px;" onclick="rt.openWazeCurrent()">
              <i data-lucide="traffic-cone" class="w-3.5 h-3.5"></i> Ver trânsito Waze
            </button>
          </div>
        </div>
      </div>

      
      <div class="card p-4 mb-4" id="rt-instr-card" style="display:none;">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <i data-lucide="route" class="w-3.5 h-3.5 inline"></i> Instruções da rota
          </div>
          <span class="text-[10px] font-mono text-slate-400" id="rt-instr-count">0 manobras</span>
        </div>
        <div class="divide-border" id="rt-instr-list"></div>
      </div>

      
      <div class="card p-4">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="radio" class="w-3.5 h-3.5"></i> Eventos em tempo real
          </div>
          <span class="pulse-dot text-vale-green-lt">
            <span class="relative inline-block w-2 h-2 rounded-full bg-vale-green-lt"></span>
          </span>
        </div>
        <div id="motEventLog" class="space-y-2 max-h-56 overflow-y-auto scrollbar-thin text-[12px]"></div>
      </div>
    `;
  },

  motChamados() {
    return `
      <div class="text-[11px] text-slate-500 mb-3">
        ${DB.chamados.length} chamados aguardando atribuição · ordenados por prioridade
      </div>
      <div class="space-y-2.5">
        ${DB.chamados.map(c => {
          const prioColor = { alta:'bd-err', 'média':'bd-warn', baixa:'bd-mute' }[c.prio];
          return `
            <div class="card p-4 hover:border-vale-green transition cursor-pointer" onclick="mot.abrirChamado('${c.id}')">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-vale-green-bg text-vale-green flex items-center justify-center flex-shrink-0">
                  <i data-lucide="list-todo" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span class="font-mono text-[11px] font-bold text-vale-green">${c.id}</span>
                    <span class="font-semibold text-sm">${c.equipe}</span>
                    <span class="badge ${prioColor} ml-auto uppercase text-[10px]">${c.prio}</span>
                  </div>
                  <div class="text-[12px] text-slate-600 mb-1">${c.tipo}</div>
                  <div class="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <span>${c.origem}</span>
                    <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    <span>${c.destino}</span>
                    <span class="ml-auto">${c.criado} min</span>
                  </div>
                  ${c.match ? `
                    <div class="mt-2 text-[11px] bg-vale-yellow-bg border-l-2 border-vale-yellow px-2 py-1.5 rounded-r flex items-center gap-1.5">
                      <i data-lucide="sparkles" class="w-3 h-3 text-vale-yellow-dk"></i>
                      IA sugere <b class="text-vale-yellow-dk">${c.match}</b> · ETA ${c.eta} min · score ${c.score}
                    </div>
                  ` : ''}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  motReportar() {
    return this._reportarVia('motorista');
  },

  motPerfil() {
    const u = S.user;
    return `
      
      <div class="card overflow-hidden mb-4">
        <div class="px-5 py-5 bg-gradient-to-br from-vale-green to-vale-green-dk text-white">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-lg font-bold">
              ${utils.initials(u.nome)}
            </div>
            <div>
              <div class="font-bold text-lg leading-tight">${u.nome}</div>
              <div class="text-[11px] opacity-80 font-mono">Mat. ${u.matricula} · ${u.veiculo}</div>
            </div>
            <div class="ml-auto text-right">
              <div class="text-[10px] uppercase tracking-wider opacity-70">Turno</div>
              <div class="font-bold font-mono">B</div>
              <div class="text-[10px] opacity-75">14:00–22:00</div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Corridas hoje</div>
          <div class="text-2xl font-black text-vale-ink font-mono mt-0.5">8</div>
          <div class="text-[10px] text-vale-green font-mono">+2 vs ontem</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Km rodados</div>
          <div class="text-2xl font-black text-vale-ink font-mono mt-0.5">47,2</div>
          <div class="text-[10px] text-slate-500 font-mono">Meta 60 km</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Tempo ativo</div>
          <div class="text-2xl font-black text-vale-ink font-mono mt-0.5">5h 22m</div>
          <div class="text-[10px] text-slate-500 font-mono">de 8h</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Score IA</div>
          <div class="text-2xl font-black text-vale-green font-mono mt-0.5">92</div>
          <div class="text-[10px] text-vale-green font-mono">excelente</div>
        </div>
      </div>

      
      <div class="card p-4 mb-4">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Corridas por hora</div>
          <div class="text-[11px] font-mono text-slate-400">últimas 8h</div>
        </div>
        <svg class="spark" viewBox="0 0 300 60" width="100%" height="60">
          <defs>
            <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#008f4c" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#008f4c" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0 40 L43 32 L86 38 L129 22 L172 28 L215 16 L258 20 L300 14 L300 60 L0 60 Z" fill="url(#sparkFill)"/>
          <path d="M0 40 L43 32 L86 38 L129 22 L172 28 L215 16 L258 20 L300 14" stroke="#008f4c" fill="none" stroke-width="2"/>
          ${[[0,40],[43,32],[86,38],[129,22],[172,28],[215,16],[258,20],[300,14]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#008f4c"/>`).join('')}
        </svg>
      </div>

      
      <div class="card p-4">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          <i data-lucide="history" class="w-3.5 h-3.5 inline"></i> Últimas corridas
        </div>
        <div class="divide-border text-[13px]">
          ${[
            { chamado:'#4820', equipe:'Insp. γ',   destino:'Pátio C',    hora:'14:38', status:'ok',  dur:'6 min' },
            { chamado:'#4819', equipe:'Manut. α',  destino:'Pátio A',    hora:'14:15', status:'ok',  dur:'9 min' },
            { chamado:'#4818', equipe:'Limpeza ε', destino:'Pátio B',    hora:'13:48', status:'ok',  dur:'7 min' },
            { chamado:'#4817', equipe:'Segur. ζ',  destino:'Píer III',   hora:'13:20', status:'atraso', dur:'12 min' },
          ].map(h => `
            <div class="flex items-center gap-3 py-2.5">
              <div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${h.status==='ok'?'bg-vale-green-bg text-vale-green':'bg-amber-100 text-amber-700'}">
                <i data-lucide="${h.status==='ok'?'check':'clock'}" class="w-3.5 h-3.5"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-1.5 text-[13px]">
                  <span class="font-mono font-bold text-[11px] text-vale-green">${h.chamado}</span>
                  <span>${h.equipe}</span>
                  <i data-lucide="arrow-right" class="w-3 h-3 text-slate-400"></i>
                  <span class="text-slate-600">${h.destino}</span>
                </div>
                <div class="text-[11px] text-slate-500 font-mono">${h.hora} · ${h.dur}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  

  cmpInicio() {
    return `
      
      <div class="card overflow-hidden mb-4">
        <div class="px-5 py-4 bg-gradient-to-br from-vale-ink to-vale-ink-2 text-white">
          <div class="flex items-center gap-2 mb-1">
            <span class="chip bg-vale-yellow/20 text-vale-yellow font-bold uppercase">Nova solicitação</span>
            <span class="ml-auto font-mono text-[11px] opacity-60">${S.user?.equipe || 'Equipe'}</span>
          </div>
          <div class="text-lg font-bold">Solicitar transporte</div>
          <div class="text-[12px] opacity-80">A IA alocará o melhor veículo e calculará a rota</div>
        </div>

        <form class="p-5" onsubmit="event.preventDefault(); cmp.solicitar();">
          <div class="field">
            <label>Tipo de solicitação</label>
            <select id="req-tipo">
              <option value="transporte">Transporte de equipe</option>
              <option value="material">Entrega de material / peça</option>
              <option value="recolhimento">Recolhimento de container</option>
              <option value="emergencia">Emergência / urgência</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="field">
              <label>Origem (atual)</label>
              <input id="req-origem" value="${S.user?.equipe==='Manut. β' ? 'Píer II · Pá mec.' : 'Localização atual'}" readonly/>
            </div>
            <div class="field">
              <label>Destino</label>
              <select id="req-destino">
                <option>Pátio A</option>
                <option>Pátio B</option>
                <option selected>Pátio C</option>
                <option>Píer I</option>
                <option>Píer II</option>
                <option>Píer III</option>
                <option>Portaria N</option>
                <option>Oficina</option>
                <option>Centro Operacional</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Prioridade</label>
            <div class="grid grid-cols-3 gap-2">
              <button type="button" class="tile-cond" data-prio="baixa" onclick="cmp.selectPrio('baixa',this)" style="padding:10px;">Baixa</button>
              <button type="button" class="tile-cond on" data-prio="média" data-cond="lenta" onclick="cmp.selectPrio('média',this)" style="padding:10px;">Média</button>
              <button type="button" class="tile-cond" data-prio="alta" onclick="cmp.selectPrio('alta',this)" style="padding:10px;">Alta</button>
            </div>
          </div>

          <div class="field">
            <label>Observação</label>
            <textarea id="req-obs" placeholder="Descreva a demanda (opcional)..." rows="2"></textarea>
          </div>

          <button class="big-action" type="submit">
            <i data-lucide="send" class="w-5 h-5"></i>
            ENVIAR SOLICITAÇÃO
          </button>
        </form>
      </div>

      
      <div class="card p-4">
        <div class="flex items-center justify-between mb-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Veículos próximos disponíveis
          </div>
          <span class="chip bd-ok">${DB.veiculos.filter(v=>v.status==='disponivel').length} livres</span>
        </div>
        <div class="divide-border">
          ${DB.veiculos.filter(v => v.status === 'disponivel').map(v => `
            <div class="flex items-center gap-3 py-2.5">
              <div class="w-9 h-9 rounded-lg bg-vale-green-bg text-vale-green flex items-center justify-center flex-shrink-0">
                <i data-lucide="truck" class="w-4 h-4"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-bold text-sm">${v.id}</span>
                  <span class="text-[11px] text-slate-500">${v.tipo}</span>
                </div>
                <div class="text-[11px] text-slate-500">${v.motorista} · ${v.modelo}</div>
              </div>
              <div class="text-right">
                <div class="text-[10px] text-slate-500 font-mono uppercase">Dist.</div>
                <div class="text-sm font-bold font-mono text-vale-green">~${Math.floor(Math.random()*4)+1},${Math.floor(Math.random()*9)} km</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  cmpRastreio() {
    const match = DB.chamados[0]; // Simula atendimento ativo
    return `
      
      <div class="card overflow-hidden mb-4">
        <div class="px-5 py-4 bg-gradient-to-br from-vale-green to-vale-green-dk text-white">
          <div class="flex items-center gap-2 mb-1">
            <span class="chip bg-white/20 text-white font-bold uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-vale-yellow pulse-dot text-vale-yellow"></span>
              Veículo a caminho
            </span>
            <span class="ml-auto text-[11px] font-mono opacity-80">${match.id}</span>
          </div>
          <div class="text-3xl font-black font-mono mt-1">${match.match || 'VL-07'}</div>
          <div class="text-[13px] opacity-85">M. Silva · Toyota Hilux · NTC-4D34</div>
        </div>

        <div class="p-5">
          
          <div class="text-center mb-4 py-3 bg-vale-yellow-bg rounded-xl">
            <div class="text-[10px] uppercase tracking-[0.2em] text-vale-yellow-dk font-bold">Tempo estimado</div>
            <div class="text-5xl font-black text-vale-ink font-mono tabular-nums" id="cmp-eta">${match.eta || 4}<span class="text-2xl font-bold"> min</span></div>
            <div class="text-[11px] text-slate-500 mt-0.5">Chegada prevista em ${utils.addMinutes(match.eta || 4)}</div>
          </div>

          
          <div class="flex gap-2">
            <button class="btn btn-ghost flex-1" onclick="ui.toast('Motorista notificado','info')">
              <i data-lucide="radio" class="w-4 h-4"></i> Chamar motorista
            </button>
            <button class="btn btn-danger" onclick="cmp.cancelar()">
              <i data-lucide="x" class="w-4 h-4"></i> Cancelar
            </button>
          </div>
        </div>
      </div>

      
      <div class="card overflow-hidden mb-4">
        <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-2 font-bold text-sm">
            <i data-lucide="navigation" class="w-4 h-4 text-vale-green"></i>
            Posição em tempo real
          </div>
          <span class="ml-auto chip bg-vale-green-bg text-vale-green-dk">
            <span class="w-1.5 h-1.5 rounded-full bg-vale-green pulse-dot text-vale-green"></span>
            Ao vivo
          </span>
        </div>

        <div id="cmp-live-map" style="height:380px;width:100%;"></div>

        <div class="px-4 py-2.5 border-t border-vale-border flex items-center flex-wrap gap-3 bg-white">
          <div class="mlg"><span class="d" style="background:#fdb913"></span> Rota do veículo</div>
          <div class="mlg"><span class="d" style="background:#008f4c"></span> Outros veículos</div>
          <div class="mlg"><span class="d" style="background:#0e1a14"></span> Sua equipe</div>
        </div>
      </div>

      
      <div class="card p-4">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          <i data-lucide="activity" class="w-3.5 h-3.5 inline"></i> Atualizações da corrida
        </div>
        <div class="space-y-2 text-[12px]">
          ${[
            { t:'agora',   msg:'VL-07 a 0,8 km · contornando interdição', c:'text-vale-yellow-dk' },
            { t:'1 min',   msg:'Rota recalculada pela IA (+0,3 km)',       c:'text-vale-green' },
            { t:'2 min',   msg:'Motorista M. Silva aceitou a corrida',    c:'text-vale-green' },
            { t:'3 min',   msg:'IA fez match VL-07 ↔ Equipe β (score 94)',c:'text-vale-yellow-dk' },
            { t:'3 min',   msg:'Solicitação criada · prioridade alta',    c:'text-slate-500' },
          ].map(e => `
            <div class="flex gap-3 py-1">
              <div class="text-[10px] font-mono text-slate-400 tabular-nums w-12 flex-shrink-0 pt-0.5">${e.t}</div>
              <div class="${e.c}">${e.msg}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  cmpVia() {
    return this._reportarVia('campo');
  },

  cmpHistorico() {
    return `
      <div class="card overflow-hidden">
        <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2 flex-wrap">
          <div class="font-bold text-sm">Histórico de condições reportadas</div>
          <div class="flex-1"></div>
          <div class="flex gap-1 flex-wrap">
            <button class="chip bd-info cursor-pointer filter-btn active" onclick="utils.filterVias('todos',this)">Todas</button>
            <button class="chip bd-ok cursor-pointer filter-btn" onclick="utils.filterVias('liberada',this)">Liberadas</button>
            <button class="chip bd-warn cursor-pointer filter-btn" onclick="utils.filterVias('lenta',this)">Lentas</button>
            <button class="chip bd-err cursor-pointer filter-btn" onclick="utils.filterVias('total',this)">Bloqueadas</button>
          </div>
        </div>
        <div id="via-historico-list" class="divide-border">
          ${DB.viasStatus.map(v => this._viaItem(v)).join('')}
        </div>
      </div>
    `;
  },

  
  _reportarVia(origem) {
    return `
      
      <div class="card p-4 mb-4">
        <div class="flex items-center gap-2 mb-3">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-vale-yellow-dk"></i>
          <div class="font-bold text-sm">Condição da via atual</div>
        </div>

        <div class="field">
          <label>Via</label>
          <select id="rel-via">
            <option value="">— Selecione —</option>
            ${['Via Principal L-1','Via Principal L-2','Acesso Píer I','Acesso Píer II','Acesso Píer III','Via Interna Pátio A','Via Interna Pátio B','Via Interna Pátio C','Contorno Oficina','Acesso Portaria N'].map(v => `<option>${v}</option>`).join('')}
          </select>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="field"><label>Km inicial</label><input id="rel-kmi" placeholder="0,0" inputmode="decimal"/></div>
          <div class="field"><label>Km final</label><input id="rel-kmf" placeholder="1,2" inputmode="decimal"/></div>
        </div>

        <div class="field">
          <label>Condição</label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button type="button" class="tile-cond" data-cond="liberada" onclick="formHelpers.selectCond('liberada',this)">
              <i data-lucide="check-circle" class="w-5 h-5"></i>
              Liberada
            </button>
            <button type="button" class="tile-cond" data-cond="lenta" onclick="formHelpers.selectCond('lenta',this)">
              <i data-lucide="alert-triangle" class="w-5 h-5"></i>
              Lentidão
            </button>
            <button type="button" class="tile-cond" data-cond="parcial" onclick="formHelpers.selectCond('parcial',this)">
              <i data-lucide="minus-circle" class="w-5 h-5"></i>
              Parcial
            </button>
            <button type="button" class="tile-cond" data-cond="total" onclick="formHelpers.selectCond('total',this)">
              <i data-lucide="x-circle" class="w-5 h-5"></i>
              Bloqueio
            </button>
          </div>
        </div>

        <div class="field">
          <label>Observação</label>
          <textarea id="rel-obs" placeholder="Descreva a situação encontrada..." rows="2"></textarea>
        </div>

        <button class="big-action" onclick="formHelpers.submitRelato()">
          <i data-lucide="send" class="w-5 h-5"></i>
          ENVIAR RELATO
        </button>
      </div>

      
      <details class="card overflow-hidden mb-4">
        <summary class="p-4 flex items-center gap-2 font-bold text-sm cursor-pointer">
          <i data-lucide="map-pin" class="w-4 h-4 text-vale-green"></i>
          Registrar ocorrência geolocalizada
          <span class="ml-auto chip bd-info text-[10px]">Opcional</span>
          <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
        </summary>
        <div class="border-t border-vale-border p-4">
          <div class="grid lg:grid-cols-2 gap-4">
            <div>
              <div class="text-[11px] text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mb-3">
                <i data-lucide="info" class="w-3.5 h-3.5 inline"></i>
                Clique no mapa para marcar o local exato da ocorrência
              </div>
              <div class="rounded-lg overflow-hidden border border-vale-border" style="height:320px;">
                <div id="leaflet-map" style="width:100%;height:100%;"></div>
              </div>
            </div>
            <div>
              <div class="field">
                <label>Tipo de ocorrência</label>
                <select id="occ-tipo">
                  <option value="">— Selecione —</option>
                  <option value="acidente">🔴 Acidente</option>
                  <option value="congestionamento">🟡 Congestionamento</option>
                  <option value="obra">🟠 Obra / serviço</option>
                  <option value="veiculo_parado">🟢 Veículo parado</option>
                  <option value="bloqueio">⚫ Bloqueio</option>
                  <option value="chuva_forte">🔵 Chuva / visibilidade</option>
                </select>
              </div>
              <div class="field">
                <label>Gravidade</label>
                <select id="occ-grav">
                  <option value="baixa">Baixa</option>
                  <option value="media" selected>Média</option>
                  <option value="alta">Alta</option>
                  <option value="critica">Crítica</option>
                </select>
              </div>
              <div class="field">
                <label>Descrição</label>
                <textarea id="occ-desc" placeholder="O que você encontrou?"></textarea>
              </div>
              <div class="grid grid-cols-2 gap-2 mb-3">
                <div class="field" style="margin-bottom:0;">
                  <label>Latitude</label>
                  <input id="occ-lat" readonly placeholder="— clique no mapa —" class="font-mono text-xs"/>
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Longitude</label>
                  <input id="occ-lon" readonly placeholder="— clique no mapa —" class="font-mono text-xs"/>
                </div>
              </div>
              <button class="btn btn-primary btn-block" onclick="occ.save()">
                <i data-lucide="map-pin" class="w-4 h-4"></i>
                Registrar ocorrência
              </button>
            </div>
          </div>
        </div>
      </details>

      
      <div class="card p-4">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          <i data-lucide="list" class="w-3.5 h-3.5 inline"></i> Últimos relatos
        </div>
        <div class="divide-border">
          ${DB.viasStatus.slice(0,4).map(v => this._viaItem(v)).join('')}
        </div>
      </div>
    `;
  },

  

  dspDashboard() {
    const emRota = DB.veiculos.filter(v => v.status==='rota').length;
    const disp   = DB.veiculos.filter(v => v.status==='disponivel').length;

    return `
      
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Veíc. ativos</div>
          <div class="text-2xl font-black text-vale-green font-mono mt-0.5" id="kpi-vehicles">18</div>
          <div class="text-[10px] text-slate-500 font-mono">de 22 frota</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Funcionários</div>
          <div class="text-2xl font-black text-vale-ink font-mono mt-0.5">24</div>
          <div class="text-[10px] text-slate-500 font-mono">distribuídas</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Chamados</div>
          <div class="text-2xl font-black text-vale-yellow-dk font-mono mt-0.5" id="kpi-tickets">${DB.chamados.length}</div>
          <div class="text-[10px] text-slate-500 font-mono">abertos</div>
        </div>
        <div class="card p-3.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">TMA (min)</div>
          <div class="text-2xl font-black text-vale-ink font-mono mt-0.5" id="kpi-tma">4.2</div>
          <div class="text-[10px] text-vale-green font-mono">-0,8 vs meta</div>
        </div>
        <div class="card p-3.5 col-span-2 lg:col-span-1 bg-gradient-to-br from-vale-green to-vale-green-lt text-white border-transparent">
          <div class="text-[10px] uppercase tracking-wider font-bold opacity-90">Otimização IA</div>
          <div class="text-2xl font-black font-mono mt-0.5" id="kpi-opt">92%</div>
          <div class="text-[10px] font-mono opacity-90">+18% vs turno ant.</div>
        </div>
      </div>

      
      <div class="card overflow-hidden mb-4 border-vale-yellow/40">
        <div class="bg-gradient-to-r from-vale-yellow to-vale-yellow-dk px-4 py-2.5 flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-vale-ink"></i>
          <div class="font-bold text-sm text-vale-ink">Próximo match sugerido pela IA</div>
          <span class="ml-auto font-mono text-[10px] font-bold uppercase text-vale-ink/70">VRP Dinâmico</span>
        </div>
        <div class="p-4">
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex-1 min-w-[200px]">
              <div class="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Melhor match</div>
              <div class="mt-1 flex items-center gap-2 flex-wrap">
                <span class="font-mono font-bold text-vale-green text-lg">VL-07</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400"></i>
                <span class="font-bold">Equipe Manut. β</span>
                <span class="font-mono text-[11px] text-slate-500">#4821</span>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-vale-slate rounded-md px-3 py-1.5 text-center min-w-[60px]">
                <div class="text-[9px] text-slate-500 uppercase font-bold">ETA</div>
                <div class="font-black text-vale-green font-mono">4 min</div>
              </div>
              <div class="bg-vale-slate rounded-md px-3 py-1.5 text-center min-w-[60px]">
                <div class="text-[9px] text-slate-500 uppercase font-bold">Desvio</div>
                <div class="font-black font-mono">+0,3 km</div>
              </div>
              <div class="bg-vale-slate rounded-md px-3 py-1.5 text-center min-w-[60px]">
                <div class="text-[9px] text-slate-500 uppercase font-bold">Score</div>
                <div class="font-black text-vale-green font-mono">94</div>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-primary" onclick="dsp.aceitarMatch()">
                <i data-lucide="check" class="w-4 h-4"></i> Aceitar
              </button>
              <button class="btn btn-ghost">Alternativas</button>
            </div>
          </div>
        </div>
      </div>

      
      <div class="grid lg:grid-cols-3 gap-4 mb-4">

        
        <div class="lg:col-span-2 card overflow-hidden">
          <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2">
            <i data-lucide="map" class="w-4 h-4 text-vale-green"></i>
            <div class="font-bold text-sm">Mapa Operacional</div>
            <span class="chip bg-vale-green-bg text-vale-green-dk ml-2">
              <span class="w-1.5 h-1.5 rounded-full bg-vale-green pulse-dot text-vale-green"></span>
              Tempo real
            </span>
          </div>
          <div id="dsp-dashboard-map" style="height:360px;width:100%;"></div>
        </div>

        
        <div class="card p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="font-bold text-sm flex items-center gap-1.5">
              <i data-lucide="list-todo" class="w-4 h-4 text-vale-green"></i>
              Fila de chamados
            </div>
            <span class="chip bd-warn">${DB.chamados.length} abertos</span>
          </div>
          <div class="space-y-2 max-h-[360px] overflow-y-auto scrollbar-thin fade-mask pr-1">
            ${DB.chamados.map(c => {
              const prioColor = { alta:'bd-err', 'média':'bd-warn', baixa:'bd-mute' }[c.prio];
              return `
                <div class="border border-vale-border rounded-lg p-2.5 hover:border-vale-green transition cursor-pointer">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="font-mono font-bold text-[11px] text-vale-green">${c.id}</span>
                    <span class="font-semibold text-[12px]">${c.equipe}</span>
                    <span class="chip ${prioColor} ml-auto uppercase text-[9px]">${c.prio}</span>
                  </div>
                  <div class="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                    ${c.origem} <i data-lucide="arrow-right" class="w-2.5 h-2.5"></i> ${c.destino}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      
      <div class="grid lg:grid-cols-2 gap-4 mb-4">
        <div class="card p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="font-bold text-sm flex items-center gap-1.5">
              <i data-lucide="radio" class="w-4 h-4 text-vale-green"></i>
              Eventos em tempo real
            </div>
            <span class="pulse-dot text-vale-green-lt">
              <span class="relative inline-block w-2 h-2 rounded-full bg-vale-green-lt"></span>
            </span>
          </div>
          <div id="dspEventLog" class="space-y-1.5 max-h-60 overflow-y-auto scrollbar-thin text-[12px]"></div>
        </div>

        <div class="card p-4">
          <div class="font-bold text-sm mb-3 flex items-center gap-1.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-vale-yellow-dk"></i>
            Alertas
          </div>
          <div class="space-y-2">
            ${DB.alertas.map(a => `
              <div class="flex items-start gap-2 p-2.5 rounded-lg border-l-[3px] ${
                a.nivel==='alto'?'bg-red-50 border-red-500':
                a.nivel==='medio'?'bg-amber-50 border-amber-500':
                                  'bg-blue-50 border-blue-500'
              }">
                <i data-lucide="${a.tipo==='interdicao'?'octagon':a.tipo==='reroute'?'refresh-cw':'clock'}"
                   class="w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                     a.nivel==='alto'?'text-red-600':a.nivel==='medio'?'text-amber-700':'text-blue-600'
                   }"></i>
                <div class="text-[12px]">
                  <b>${a.titulo}</b><br/>
                  <span class="text-slate-600">${a.msg}</span>
                  <div class="text-[10px] text-slate-400 font-mono mt-0.5">${a.tempo}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      
      <div class="card overflow-hidden bg-gradient-to-br from-vale-ink to-vale-ink-2 text-white border-transparent">
        <div class="p-5">
          <div class="flex items-center gap-2 mb-4">
            <i data-lucide="trending-up" class="w-5 h-5 text-vale-yellow"></i>
            <div class="font-bold">Impacto esperado · Antes vs Depois</div>
            <span class="ml-auto text-[10px] uppercase tracking-wider opacity-60">Projeção piloto · 90 dias</span>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            ${[
              { label:'Tempo deslocamento', val:'-38%',  sub:'12min → 7,4min',    color:'text-vale-yellow', d:'M0 22 L15 18 L30 20 L45 14 L60 12 L75 8 L100 5', s:'#fdb913' },
              { label:'Ociosidade frota',   val:'-45%',  sub:'28% → 15%',          color:'text-vale-yellow', d:'M0 8 L20 10 L40 14 L60 18 L80 22 L100 25', s:'#fdb913' },
              { label:'Comunicação informal',val:'-72%', sub:'320/turno → 90',    color:'text-vale-yellow', d:'M0 5 L20 8 L40 14 L60 18 L80 24 L100 27',    s:'#fdb913' },
              { label:'Previsibilidade ETA',val:'+61%',  sub:'±6min → ±2min',     color:'text-vale-green-lt',d:'M0 25 L20 22 L40 18 L60 12 L80 8 L100 4', s:'#10a861' },
            ].map(m => `
              <div class="bg-white/5 rounded-lg p-3 border border-white/10">
                <div class="text-[11px] uppercase tracking-wider opacity-70">${m.label}</div>
                <div class="flex items-end gap-2 mt-1">
                  <div class="text-2xl font-black ${m.color} font-mono">${m.val}</div>
                  <div class="text-[11px] opacity-70 mb-1">${m.sub}</div>
                </div>
                <svg class="spark mt-2" viewBox="0 0 100 30" width="100%" height="30">
                  <path d="${m.d}" stroke="${m.s}" fill="none" stroke-width="2"/>
                </svg>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  dspMapa() {
    return `
      <div class="card overflow-hidden mb-4">
        <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2 flex-wrap">
          <div class="flex items-center gap-2 font-bold text-sm">
            <i data-lucide="map" class="w-4 h-4 text-vale-green"></i>
            Mapa Operacional · Porto Ponta da Madeira
          </div>
          <span class="chip bg-vale-green-bg text-vale-green-dk">
            <span class="w-1.5 h-1.5 rounded-full bg-vale-green pulse-dot text-vale-green"></span>
            Tempo real
          </span>
          <div class="flex-1"></div>
          <div class="flex items-center gap-1 flex-wrap text-[11px]">
            <button class="chip bd-ok cursor-pointer">🚚 Veículos</button>
            <button class="chip bd-ok cursor-pointer">👷 Equipes</button>
            <button class="chip bd-warn cursor-pointer">🟡 Rotas</button>
            <button class="chip bd-err cursor-pointer">⛔ Interdições</button>
          </div>
        </div>
        <div id="dsp-ops-map" style="height:520px;width:100%;"></div>
        <div class="px-4 py-3 border-t border-vale-border flex items-center flex-wrap gap-3 bg-white">
          <div class="mlg"><span class="d" style="background:#008f4c"></span> Disponível</div>
          <div class="mlg"><span class="d" style="background:#fdb913"></span> Em rota</div>
          <div class="mlg"><span class="d" style="background:#94a3b8"></span> Parado</div>
          <div class="mlg"><span class="d" style="background:#0e1a14"></span> Equipe</div>
          <div class="mlg"><span class="d" style="background:#dc2626;width:16px;height:3px;border-radius:2px"></span> Via interditada</div>
        </div>
      </div>
    `;
  },

  dspChamados() {
    return `
      <div class="card overflow-hidden">
        <div class="px-4 py-3 border-b border-vale-border flex items-center gap-2">
          <div class="font-bold text-sm">Fila de chamados · ordenado por prioridade</div>
          <span class="ml-auto chip bd-warn">${DB.chamados.length} abertos</span>
        </div>
        <table class="w-full text-[13px]">
          <thead class="bg-vale-slate text-[10px] uppercase tracking-wider text-slate-500 font-bold">
            <tr>
              <th class="text-left px-4 py-2.5">ID</th>
              <th class="text-left px-4 py-2.5">Equipe</th>
              <th class="text-left px-4 py-2.5 hidden md:table-cell">Origem → Destino</th>
              <th class="text-left px-4 py-2.5">Tipo</th>
              <th class="text-left px-4 py-2.5">Prioridade</th>
              <th class="text-left px-4 py-2.5 hidden md:table-cell">Aberto</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="divide-border">
            ${DB.chamados.map(c => {
              const p = { alta:'bd-err', 'média':'bd-warn', baixa:'bd-mute' }[c.prio];
              return `
                <tr class="hover:bg-vale-slate transition">
                  <td class="px-4 py-3 font-mono text-vale-green font-bold">${c.id}</td>
                  <td class="px-4 py-3 font-semibold">${c.equipe}</td>
                  <td class="px-4 py-3 font-mono text-[12px] text-slate-600 hidden md:table-cell">${c.origem} → ${c.destino}</td>
                  <td class="px-4 py-3 text-slate-600">${c.tipo}</td>
                  <td class="px-4 py-3"><span class="badge ${p} uppercase">${c.prio}</span></td>
                  <td class="px-4 py-3 font-mono text-slate-500 hidden md:table-cell">${c.criado} min</td>
                  <td class="px-4 py-3 text-right">
                    <button class="btn btn-ghost" style="padding:5px 10px;font-size:12px;">Atribuir</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  dspFrota() {
    return `
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card overflow-hidden">
          <div class="px-4 py-3 border-b border-vale-border flex items-center">
            <div class="font-bold text-sm flex items-center gap-1.5">
              <i data-lucide="truck" class="w-4 h-4 text-vale-green"></i>
              Frota de veículos
            </div>
            <span class="ml-auto chip bd-mute">${DB.veiculos.length} ativos</span>
          </div>
          <div class="divide-border">
            ${DB.veiculos.map(v => {
              const sMap = { rota:'bd-warn', disponivel:'bd-ok', parado:'bd-mute', manutencao:'bd-err' };
              const sLbl = { rota:'Em rota', disponivel:'Disponível', parado:'Parado', manutencao:'Manutenção' };
              return `
                <div class="flex items-center gap-3 p-3">
                  <div class="w-9 h-9 rounded-lg bg-vale-slate flex items-center justify-center text-slate-500 flex-shrink-0">
                    <i data-lucide="truck" class="w-4 h-4"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-mono font-bold text-sm">${v.id}</span>
                      <span class="text-[11px] text-slate-500">${v.tipo}</span>
                    </div>
                    <div class="text-[11px] text-slate-500 truncate">${v.motorista} · ETA ${v.eta}</div>
                  </div>
                  <span class="badge ${sMap[v.status]}">${sLbl[v.status]}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card overflow-hidden">
          <div class="px-4 py-3 border-b border-vale-border">
            <div class="font-bold text-sm flex items-center gap-1.5">
              <i data-lucide="users" class="w-4 h-4 text-vale-green"></i>
              Funcionários
            </div>
          </div>
          <div class="divide-border">
            ${DB.equipes.map(e => {
              const p = { alta:'bd-err', 'média':'bd-warn', baixa:'bd-mute' }[e.prio];
              return `
                <div class="flex items-center gap-3 p-3">
                  <div class="w-9 h-9 rounded-lg bg-vale-ink/10 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="users" class="w-4 h-4 text-vale-ink/60"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-sm">${e.id}</span>
                      <span class="text-[10px] font-mono text-slate-400">${e.membros} pax</span>
                    </div>
                    <div class="text-[11px] text-slate-500 truncate">${e.local} · ${e.demanda}</div>
                  </div>
                  <span class="badge ${p} uppercase">${e.prio}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  
  _condBadge(cond) {
    const m = {
      liberada: ['bd-ok',   '✓ Liberada'],
      lenta:    ['bd-warn', '⚠ Lentidão'],
      parcial:  ['bd-err',  '⊘ Parcial'],
      total:    ['bd-err',  '✕ Bloqueio'],
    };
    const [cls, lbl] = m[cond] || ['bd-mute', cond];
    return `<span class="badge ${cls}">${lbl}</span>`;
  },

  _viaItem(v) {
    const colors = { liberada:'#008f4c', lenta:'#fdb913', parcial:'#ea580c', total:'#dc2626' };
    const color = colors[v.cond] || '#94a3b8';
    return `
      <div class="flex items-start gap-3 p-3">
        <div class="w-2 h-2 rounded-full flex-shrink-0 mt-2" style="background:${color}"></div>
        <div class="flex-1 min-w-0">
          <div class="text-[13px] font-semibold">${v.via} <span class="text-slate-400 font-normal text-[12px]">· ${v.trecho}</span></div>
          <div class="text-[12px] text-slate-600">${v.obs}</div>
          <div class="text-[10px] text-slate-400 font-mono mt-0.5">${v.autor} · ${utils.agoMin(v.min)}</div>
        </div>
        ${this._condBadge(v.cond)}
      </div>
    `;
  },
};

window.mot = {
  aceitarTarefa() {
    S.tarefaAtual.aceito = true;
    ui.toast('Tarefa aceita! Iniciando navegação...', 'success');
    ui.navigate('mot-mapa');
  },
  recusarTarefa() {
    ui.toast('Tarefa recusada. IA buscará outro veículo.', 'warn');
  },
  adiarTarefa() {
    ui.toast('Tarefa adiada em 5 minutos.', 'info');
  },
  concluirTarefa() {
    S.tarefaAtual.concluido = true;
    ui.toast('Tarefa concluída! ✓', 'success');
    ui.navigate('mot-tarefa');
  },
  ligarEquipe() {
    ui.toast('Chamando Equipe Manut. β via rádio digital...', 'info');
  },
  abrirChamado(id) {
    ui.toast(`Chamado ${id} será atribuído a você pela IA`, 'info');
  },
};

window.cmp = {
  prioSel: 'média',

  selectPrio(prio, el) {
    this.prioSel = prio;
    document.querySelectorAll('.tile-cond[data-prio]').forEach(e => e.classList.remove('on'));
    el.classList.add('on');

    const color = prio==='alta' ? 'total' : prio==='média' ? 'lenta' : 'liberada';
    el.setAttribute('data-cond', color);
  },

  solicitar() {
    const tipo = document.getElementById('req-tipo').value;
    const destino = document.getElementById('req-destino').value;
    ui.toast(`Solicitação enviada! Tipo: ${tipo} → ${destino} (${this.prioSel})`, 'success');

    setTimeout(() => {
      ui.toast('✓ VL-07 alocado pela IA · ETA 4 min', 'success');
      ui.navigate('cmp-rastreio');
    }, 1500);
  },

  cancelar() {
    if (confirm('Deseja cancelar a solicitação?')) {
      ui.toast('Solicitação cancelada', 'warn');
      ui.navigate('cmp-inicio');
    }
  },
};

window.dsp = {
  aceitarMatch() {
    ui.toast('Match aceito · VL-07 recebeu a rota', 'success');
  },
};

window.formHelpers = {
  selectedCond: null,

  selectCond(cond, el) {
    this.selectedCond = cond;
    document.querySelectorAll('.tile-cond[data-cond]').forEach(e => {
      if (e.getAttribute('data-cond') === cond && !e.hasAttribute('data-prio')) {
        e.classList.add('on');
      } else if (!e.hasAttribute('data-prio')) {
        e.classList.remove('on');
      }
    });
  },

  submitRelato() {
    const via = document.getElementById('rel-via')?.value;
    const kmi = document.getElementById('rel-kmi')?.value;
    const kmf = document.getElementById('rel-kmf')?.value;
    const obs = document.getElementById('rel-obs')?.value?.trim();

    if (!via) return ui.toast('Selecione a via', 'error');
    if (!this.selectedCond) return ui.toast('Selecione a condição', 'error');

    DB.viasStatus.unshift({
      via,
      trecho: `Km ${kmi||'0,0'}–${kmf||'?'}`,
      cond: this.selectedCond,
      obs: obs || 'Sem observação',
      autor: S.user?.nome || '—',
      min: 0,
    });

    ui.toast('Relato enviado! IA aplicará ao roteamento em até 30s.', 'success');

    ['rel-via','rel-kmi','rel-kmf','rel-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    document.querySelectorAll('.tile-cond[data-cond]:not([data-prio])').forEach(e => e.classList.remove('on'));
    this.selectedCond = null;
  },
};

