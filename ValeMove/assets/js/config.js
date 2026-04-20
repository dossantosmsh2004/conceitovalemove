window.CFG = {
  PORT_LAT: -2.5689,
  PORT_LON: -44.3664,
  OSRM_BASE: 'https://router.project-osrm.org/route/v1/driving',
};

window.MENUS = {
  motorista: [
    { id:'mot-tarefa',   label:'Tarefa Atual', short:'Tarefa', icon:'target' },
    { id:'mot-mapa',     label:'Mapa · Rota',  short:'Mapa',   icon:'map' },
    { id:'mot-chamados', label:'Chamados',     short:'Fila',   icon:'list-todo', badge: true },
    { id:'mot-reportar', label:'Reportar Via', short:'Reporte',icon:'alert-triangle' },
    { id:'mot-perfil',   label:'Meu Turno',    short:'Turno',  icon:'user' },
    { id:'proposta',     label:'Proposta',     short:'Sobre',  icon:'file-text', hideMobile: true },
  ],
  campo: [
    { id:'cmp-inicio',   label:'Solicitar Transporte', short:'Chamar', icon:'hand' },
    { id:'cmp-rastreio', label:'Rastrear Veículo',     short:'Rastrear',icon:'navigation' },
    { id:'cmp-via',      label:'Condição da Via',      short:'Via',    icon:'road' },
    { id:'cmp-historico',label:'Histórico',            short:'Log',    icon:'history' },
    { id:'proposta',     label:'Proposta',             short:'Sobre',  icon:'file-text', hideMobile: true },
  ],
  despacho: [
    { id:'dsp-dashboard',label:'Dashboard',     short:'Painel', icon:'layout-dashboard' },
    { id:'dsp-mapa',     label:'Mapa Operac.',  short:'Mapa',   icon:'map' },
    { id:'dsp-chamados', label:'Chamados',      short:'Fila',   icon:'list-todo' },
    { id:'dsp-frota',    label:'Frota & Equipes',short:'Frota', icon:'truck' },
    { id:'proposta',     label:'Proposta',      short:'Sobre',  icon:'file-text', hideMobile: true },
  ],
};

