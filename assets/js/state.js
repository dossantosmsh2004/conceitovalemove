window.S = {
  user: null,
  activeSection: null,
  rfidUser: null,
  rfidCode: null,

  leafletMap: null,
  leafletMarkers: [],
  occLat: null,
  occLon: null,

  reports: [],

  selCond: null,

  tarefaAtual: {
    id: '#4821',
    equipe: 'Manut. β',
    origem: 'Pátio A (atual)',
    destino: 'Píer II · Pá mecânica',
    dist: '1,6 km',
    eta: '4 min',
    prio: 'alta',
    tipo: 'Transporte de equipe',
    score: 94,
    aceito: false,
    concluido: false,
  },
};

