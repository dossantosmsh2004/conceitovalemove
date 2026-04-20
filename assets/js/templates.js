window.templates = {
  proposta() {
    return `
      
      <div class="bg-gradient-to-br from-vale-ink via-vale-ink-2 to-vale-green-dk text-white px-6 py-5 flex items-center gap-3 sticky top-0 z-10">
        <div class="vm-logo w-12 h-12" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="ValeMove">
            <path d="M10 14 L50 90 L90 14 L74 14 L50 62 L26 14 Z" fill="#1cb8be"/>
            <path d="M58 14 L90 14 C84 32 72 40 58 30 Z" fill="#fdb913"/>
            <path d="M30 22 Q38 38 46 48 Q52 54 54 68" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="30" cy="22" r="4.5" fill="#fff"/>
            <circle cx="54" cy="68" r="4.5" fill="#fff"/>
          </svg>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-[0.18em] opacity-80">Proposta de Solução · Desafio Vale 2026</div>
          <h2 class="text-lg font-bold leading-tight">ValeMove · Otimização de Rotas</h2>
          <div class="text-[11px] opacity-70">Porto Ponta da Madeira · São Luís/MA</div>
        </div>
        <button onclick="ui.closeModal()" class="ml-auto p-2 hover:bg-white/10 rounded-lg">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="text-[14px] text-slate-700">

        
        <section class="px-6 pt-6 pb-8 bg-gradient-to-b from-red-50/40 to-transparent">
          <div class="mb-5">
            <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-red-700 bg-red-100 px-3 py-1 rounded-full mb-3">
              <i data-lucide="alert-octagon" class="w-3 h-3"></i> Problema Central
            </div>
            <h3 class="text-xl font-bold text-vale-ink leading-tight">Os Desafios do Porto Ponta da Madeira</h3>
            <p class="text-[13px] text-slate-600 mt-1.5 max-w-2xl">
              Um dos maiores complexos portuários do Brasil enfrenta desafios críticos de coordenação operacional que comprometem a eficiência logística e a segurança das operações.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            ${[
              {
                icon: 'map-off',
                title: 'Sem Roteirização em Tempo Real',
                desc: 'Veículos pesados circulam sem rotas dinâmicas, causando congestionamentos e atrasos críticos no fluxo logístico.',
              },
              {
                icon: 'construction',
                title: 'Operação Rígida e Pouco Resiliente',
                desc: 'Interdições temporárias de vias e alterações no layout não são gerenciadas automaticamente, paralisando operações.',
              },
              {
                icon: 'message-square-warning',
                title: 'Comunicação Informal',
                desc: 'A coordenação entre funcionários e veículos depende de processos manuais e comunicação não estruturada.',
              },
              {
                icon: 'alarm-clock',
                title: 'Atrasos em Períodos de Pico',
                desc: 'Sem previsibilidade operacional, períodos de alta movimentação geram gargalos severos e perda de eficiência.',
              },
            ].map(p => `
              <div class="bg-white border border-red-100 rounded-xl p-4 flex gap-3 hover:border-red-300 transition">
                <div class="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                  <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-[14px] text-vale-ink mb-0.5">${p.title}</div>
                  <div class="text-[12.5px] text-slate-600 leading-snug">${p.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>

          
          <div class="mt-5 bg-vale-ink/5 border border-vale-ink/10 rounded-xl p-4">
            <div class="text-[10px] font-bold uppercase tracking-[0.12em] text-vale-green mb-1.5">Contexto</div>
            <p class="text-[13px] text-slate-700 leading-relaxed">
              A Vale opera de forma integrada desde a extração até a logística, incluindo ferrovias, portos e terminais marítimos.
              O <b>Porto de Ponta da Madeira</b> movimenta volumes massivos de minério de ferro, exigindo precisão e coordenação em tempo real entre centenas de veículos e equipes.
            </p>
          </div>
        </section>

        
        <section class="px-6 py-8 bg-gradient-to-br from-vale-green-bg via-white to-vale-yellow-bg/40">
          <div class="text-center mb-5">
            <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-vale-green bg-vale-green-bg px-3 py-1 rounded-full mb-3">
              <i data-lucide="sparkles" class="w-3 h-3"></i> Nossa Solução
            </div>
            <h3 class="text-2xl font-black text-vale-ink leading-tight">ValeMove</h3>
            <div class="text-[15px] font-semibold text-vale-green mt-0.5">Inteligência Logística Portuária</div>
            <p class="text-[13px] text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Uma plataforma integrada de roteirização inteligente que conecta veículos operacionais e funcionários em tempo real, transformando a operação do Porto de Ponta da Madeira.
            </p>
          </div>

          
          <div class="grid md:grid-cols-3 gap-3 mt-6">
            <div class="bg-white border border-vale-green/25 rounded-xl p-4 shadow-sm">
              <div class="w-9 h-9 rounded-lg bg-vale-green-bg text-vale-green flex items-center justify-center mb-2">
                <i data-lucide="steering-wheel" class="w-4 h-4"></i>
              </div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-vale-green mb-1">Motorista</div>
              <div class="text-[12.5px] text-slate-700 leading-snug">Recebe tarefa da IA, navega turn-by-turn dentro do porto, reporta condições e registra corridas.</div>
            </div>
            <div class="bg-white border border-vale-yellow/50 rounded-xl p-4 shadow-sm">
              <div class="w-9 h-9 rounded-lg bg-vale-yellow-bg text-vale-yellow-dk flex items-center justify-center mb-2">
                <i data-lucide="hard-hat" class="w-4 h-4"></i>
              </div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-vale-yellow-dk mb-1">Funcionário</div>
              <div class="text-[12.5px] text-slate-700 leading-snug">Solicita transporte com 1 toque, rastreia o veículo alocado em tempo real e reporta condições das vias.</div>
            </div>
            <div class="bg-white border border-vale-ink/15 rounded-xl p-4 shadow-sm">
              <div class="w-9 h-9 rounded-lg bg-vale-ink/5 text-vale-ink flex items-center justify-center mb-2">
                <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
              </div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-vale-ink mb-1">Administração</div>
              <div class="text-[12.5px] text-slate-700 leading-snug">Visão completa: frota, equipes, chamados, alertas. A IA sugere matches; o humano aprova ou ajusta.</div>
            </div>
          </div>
        </section>

        
        <section class="px-6 py-8 bg-white">
          <div class="text-center mb-6">
            <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-vale-ink bg-vale-slate px-3 py-1 rounded-full mb-3">
              <i data-lucide="workflow" class="w-3 h-3"></i> Como Funciona
            </div>
            <h3 class="text-xl font-bold text-vale-ink leading-tight">4 Passos para uma Operação Inteligente</h3>
            <p class="text-[13px] text-slate-600 mt-1.5 max-w-2xl mx-auto">
              Um fluxo simples e poderoso que transforma dados brutos em decisões logísticas precisas.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 relative">
            
            <svg class="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style="z-index:0;" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="18" x2="50" y2="82" stroke="#dbe1dd" stroke-width="0.3" stroke-dasharray="1 1"/>
            </svg>
            ${[
              {
                n: '01',
                icon: 'satellite-dish',
                title: 'Coleta de Dados',
                desc: 'Sensores IoT e GPS nos veículos e dispositivos dos funcionários enviam dados de localização e status em tempo real para a plataforma.',
                color: 'green',
              },
              {
                n: '02',
                icon: 'cpu',
                title: 'Processamento Inteligente',
                desc: 'O motor de IA analisa posições, demandas, condições das vias e histórico operacional para calcular as rotas otimizadas.',
                color: 'yellow',
              },
              {
                n: '03',
                icon: 'route',
                title: 'Roteamento Dinâmico',
                desc: 'Rotas são distribuídas automaticamente para veículos disponíveis, com recálculo imediato em caso de interdições ou mudanças.',
                color: 'blue',
              },
              {
                n: '04',
                icon: 'check-check',
                title: 'Confirmação & Feedback',
                desc: 'Motoristas e equipes confirmam chegadas e reportam ocorrências pelo app, alimentando o sistema para melhoria contínua.',
                color: 'green',
              },
            ].map((s, idx) => {
              const colors = {
                green:  { bg:'bg-vale-green-bg',  text:'text-vale-green',     border:'border-vale-green/30',    num:'text-vale-green' },
                yellow: { bg:'bg-vale-yellow-bg', text:'text-vale-yellow-dk', border:'border-vale-yellow/50',   num:'text-vale-yellow-dk' },
                blue:   { bg:'bg-blue-50',        text:'text-blue-600',       border:'border-blue-200',         num:'text-blue-600' },
              }[s.color];
              return `
                <div class="relative bg-white border ${colors.border} rounded-xl p-5 hover:shadow-md transition" style="z-index:1;">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0">
                      <div class="text-4xl font-black font-mono ${colors.num} leading-none tabular-nums">${s.n}</div>
                      <div class="w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mt-3">
                        <i data-lucide="${s.icon}" class="w-5 h-5"></i>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0 pt-1">
                      <div class="font-bold text-[15px] text-vale-ink mb-1">${s.title}</div>
                      <div class="text-[12.5px] text-slate-600 leading-relaxed">${s.desc}</div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        
        <section class="px-6 py-8 bg-gradient-to-br from-vale-ink to-vale-ink-2 text-white">
          <div class="text-center mb-5">
            <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-vale-yellow bg-vale-yellow/15 px-3 py-1 rounded-full mb-3">
              <i data-lucide="trending-up" class="w-3 h-3"></i> Impacto Esperado
            </div>
            <h3 class="text-xl font-bold leading-tight">KPIs projetados para o piloto de 90 dias</h3>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            ${[
              { val:'-38%',  sub:'Tempo de deslocamento', detail:'12 min → 7,4 min',   c:'text-vale-yellow' },
              { val:'-45%',  sub:'Ociosidade da frota',   detail:'28% → 15%',           c:'text-vale-yellow' },
              { val:'-72%',  sub:'Comunicação informal',  detail:'320/turno → 90',      c:'text-vale-yellow' },
              { val:'+61%',  sub:'Previsibilidade de ETA',detail:'±6 min → ±2 min',     c:'text-vale-green-lt' },
            ].map(k => `
              <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div class="text-3xl font-black font-mono ${k.c} tabular-nums">${k.val}</div>
                <div class="text-[12px] font-semibold mt-1">${k.sub}</div>
                <div class="text-[10px] opacity-60 font-mono mt-0.5">${k.detail}</div>
              </div>
            `).join('')}
          </div>
        </section>

        
        <section class="px-6 py-8 bg-white">
          <div class="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-vale-green text-base mb-3 flex items-center gap-2">
                <i data-lucide="layers" class="w-4 h-4"></i> Arquitetura
              </h3>
              <div class="space-y-2 text-[13px]">
                <div class="bg-vale-slate rounded-lg p-3"><b>Borda:</b> GPS/telemetria embarcada, app mobile (Android rugged), tags BLE em ativos críticos.</div>
                <div class="bg-vale-slate rounded-lg p-3"><b>Conectividade:</b> LTE privado + Wi-Fi mesh do porto, buffer offline com sincronização.</div>
                <div class="bg-vale-slate rounded-lg p-3"><b>Backend:</b> microserviços de ingestão, mapa digital do porto, motor VRP dinâmico com restrições de segurança.</div>
                <div class="bg-vale-slate rounded-lg p-3"><b>Inteligência:</b> ML para previsão de demanda, ETA preditivo, detecção de ociosidade e congestão.</div>
                <div class="bg-vale-slate rounded-lg p-3"><b>Integrações:</b> SAP, sistemas portuários (TOS), rádio TETRA, controle de acesso, BI Vale.</div>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-vale-green text-base mb-3 flex items-center gap-2">
                <i data-lucide="route" class="w-4 h-4"></i> Roadmap
              </h3>
              <div class="space-y-2 text-[13px]">
                <div class="border-l-[3px] border-vale-yellow bg-vale-slate p-3 rounded-r-lg">
                  <div class="font-mono text-[10px] text-vale-yellow-dk font-bold uppercase tracking-wider">0–3 meses</div>
                  <div class="font-semibold">MVP do app + telemetria</div>
                  <div class="text-slate-600 text-[12px]">Piloto em 5 veículos · validação de fluxos críticos</div>
                </div>
                <div class="border-l-[3px] border-vale-green bg-vale-slate p-3 rounded-r-lg">
                  <div class="font-mono text-[10px] text-vale-green font-bold uppercase tracking-wider">3–6 meses</div>
                  <div class="font-semibold">Piloto em um pátio</div>
                  <div class="text-slate-600 text-[12px]">Pátio B completo · motor VRP em produção</div>
                </div>
                <div class="border-l-[3px] border-vale-green bg-vale-slate p-3 rounded-r-lg">
                  <div class="font-mono text-[10px] text-vale-green font-bold uppercase tracking-wider">6–12 meses</div>
                  <div class="font-semibold">Expansão total</div>
                  <div class="text-slate-600 text-[12px]">100% da frota e equipes do PMad</div>
                </div>
                <div class="border-l-[3px] border-vale-ink bg-vale-slate p-3 rounded-r-lg">
                  <div class="font-mono text-[10px] text-vale-ink font-bold uppercase tracking-wider">12+ meses</div>
                  <div class="font-semibold">Replicação sistêmica</div>
                  <div class="text-slate-600 text-[12px]">Tubarão, Carajás, ferrovias e terminais Vale</div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="mt-6 p-4 bg-gradient-to-r from-vale-green-bg to-vale-yellow-bg rounded-xl border border-vale-green/20">
            <div class="flex items-start gap-3">
              <i data-lucide="copy-check" class="w-5 h-5 text-vale-green flex-shrink-0 mt-0.5"></i>
              <div>
                <div class="font-bold text-[14px] text-vale-ink">Arquitetura replicável por design</div>
                <div class="text-[12.5px] text-slate-700 mt-1 leading-relaxed">
                  Modular e cloud-native, com mapa digital configurável, motor de roteirização agnóstico ao ativo e integrações via API. Permite escala acelerada para <b>outros portos, minas, ferrovias e terminais Vale</b>.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      
      <div class="border-t border-vale-border px-6 py-3 flex items-center justify-end gap-2 bg-vale-slate sticky bottom-0">
        <button onclick="ui.closeModal()" class="btn btn-ghost">Fechar</button>
        <button class="btn btn-primary" onclick="ui.toast('Export em breve','info')">
          <i data-lucide="download" class="w-4 h-4"></i> Baixar PDF
        </button>
      </div>
    `;
  },

  alertas() {
    return `
      <div class="px-5 py-4 border-b border-vale-border flex items-center gap-2 sticky top-0 bg-white z-10">
        <i data-lucide="bell" class="w-5 h-5 text-vale-yellow-dk"></i>
        <div class="font-bold">Alertas ativos</div>
        <span class="chip bd-warn ml-auto">${DB.alertas.length}</span>
        <button onclick="ui.closeModal()" class="p-1.5 hover:bg-vale-slate rounded-lg ml-2">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
      <div class="p-4 space-y-3">
        ${DB.alertas.map(a => `
          <div class="p-3 rounded-lg border-l-[3px] ${
            a.nivel==='alto'?'bg-red-50 border-red-500':
            a.nivel==='medio'?'bg-amber-50 border-amber-500':
                              'bg-blue-50 border-blue-500'
          }">
            <div class="flex items-start gap-2.5">
              <i data-lucide="${a.tipo==='interdicao'?'octagon':a.tipo==='reroute'?'refresh-cw':'clock'}" class="w-4 h-4 flex-shrink-0 mt-0.5"></i>
              <div>
                <div class="font-semibold text-[13px]">${a.titulo}</div>
                <div class="text-[12px] text-slate-700">${a.msg}</div>
                <div class="text-[10px] text-slate-500 font-mono mt-0.5">${a.tempo}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
};

