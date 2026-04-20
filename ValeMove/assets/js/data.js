window.DB = {
  usuarios: [
    { id:'u01', nome:'Marcos Silva',    matricula:'V200541', cargo:'motorista', senha:'vale123', veiculo:'VL-07', rfid:'RFID-M01' },
    { id:'u02', nome:'João Pereira',    matricula:'V200665', cargo:'motorista', senha:'vale123', veiculo:'VL-03', rfid:'RFID-M02' },
    { id:'u03', nome:'Carlos Andrade',  matricula:'V100234', cargo:'campo',     senha:'vale123', equipe:'Manut. β', rfid:'RFID-C01' },
    { id:'u04', nome:'Ana Ribeiro',     matricula:'V100890', cargo:'campo',     senha:'vale123', equipe:'Insp. γ',  rfid:'RFID-C02' },
    { id:'u05', nome:'Rafael Souza',    matricula:'V300789', cargo:'despacho',  senha:'vale123', rfid:'RFID-D01' },
  ],

  veiculos: [
    { id:'VL-01', placa:'NTC-1A12', modelo:'Toyota Hilux',      tipo:'Pickup',    motorista:'A. Silva',   status:'rota',       eta:'3 min',  bat: 82 },
    { id:'VL-02', placa:'NTC-1A34', modelo:'Mercedes Sprinter', tipo:'Van',       motorista:'M. Costa',   status:'disponivel', eta:'—',      bat: 91 },
    { id:'VL-03', placa:'NTC-2B56', modelo:'Ford Ranger',       tipo:'Pickup',    motorista:'J. Pereira', status:'rota',       eta:'7 min',  bat: 64 },
    { id:'VL-04', placa:'NTC-2B78', modelo:'VW Amarok',         tipo:'Pickup',    motorista:'P. Lima',    status:'parado',     eta:'—',      bat: 45 },
    { id:'VL-05', placa:'NTC-3C90', modelo:'Iveco Daily',       tipo:'Caminhão',  motorista:'C. Rocha',   status:'manutencao', eta:'—',      bat: 0 },
    { id:'VL-06', placa:'NTC-3C12', modelo:'Renault Master',    tipo:'Van',       motorista:'R. Mendes',  status:'rota',       eta:'2 min',  bat: 77 },
    { id:'VL-07', placa:'NTC-4D34', modelo:'Toyota Hilux',      tipo:'Pickup',    motorista:'M. Silva',   status:'disponivel', eta:'—',      bat: 95 },
    { id:'VL-08', placa:'NTC-4D56', modelo:'Volvo VM',          tipo:'Caminhão',  motorista:'T. Alves',   status:'rota',       eta:'9 min',  bat: 58 },
    { id:'VL-10', placa:'NTC-5E90', modelo:'Scania P-360',      tipo:'Caminhão',  motorista:'F. Dias',    status:'rota',       eta:'5 min',  bat: 71 },
  ],

  equipes: [
    { id:'Manut. α',   local:'Pátio A · Correia TR-102', demanda:'Reparo em correia',       prio:'alta',  membros:4, lider:'R. Teixeira' },
    { id:'Manut. β',   local:'Píer II · Pá mecânica',    demanda:'Aguardando transporte',   prio:'alta',  membros:3, lider:'Carlos Andrade' },
    { id:'Insp. γ',    local:'Pátio C · Bacia 3',        demanda:'Inspeção de rotina',      prio:'média', membros:2, lider:'Ana Ribeiro' },
    { id:'Insp. δ',    local:'Portaria · Acesso N',      demanda:'Sem cobertura',           prio:'média', membros:2, lider:'P. Neves' },
    { id:'Limpeza ε',  local:'Pátio B · Via 4',          demanda:'Coleta de resíduos',      prio:'baixa', membros:3, lider:'S. Moura' },
    { id:'Segur. ζ',   local:'Píer III · Ronda N',       demanda:'Ronda de segurança',      prio:'baixa', membros:2, lider:'D. Campos' },
  ],

  chamados: [
    { id:'#4821', equipe:'Manut. β',  origem:'Píer II',       destino:'Pátio C',         prio:'alta',  tipo:'Transporte',      criado: 6, status:'aberto', match:'VL-07', eta:4, score:94 },
    { id:'#4822', equipe:'Insp. γ',   origem:'Oficina',       destino:'Pátio C',         prio:'média', tipo:'Material',         criado: 14,status:'aberto' },
    { id:'#4823', equipe:'Limpeza ε', origem:'Pátio B',       destino:'Saída N',         prio:'baixa', tipo:'Container',        criado: 22,status:'aberto' },
    { id:'#4824', equipe:'Manut. α',  origem:'Almox.',        destino:'Pátio A',         prio:'alta',  tipo:'Peça sobressalente',criado: 3, status:'aberto' },
    { id:'#4825', equipe:'Segur. ζ',  origem:'Píer III',      destino:'Píer III',        prio:'média', tipo:'Reforço',          criado: 18,status:'aberto' },
    { id:'#4826', equipe:'Insp. δ',   origem:'Portaria',      destino:'Pátio A',         prio:'média', tipo:'Veículo p/ ronda', criado: 9, status:'aberto' },
    { id:'#4827', equipe:'Manut. β',  origem:'Tanque',        destino:'Píer II',         prio:'baixa', tipo:'Combustível',      criado: 31,status:'aberto' },
  ],

  viasStatus: [
    { via:'Via Principal L-1',   trecho:'Km 0,0 – 2,4',  cond:'liberada', obs:'Tráfego normal',              autor:'A. Ribeiro', min:  4 },
    { via:'Acesso Píer II',      trecho:'Entrada N',     cond:'lenta',    obs:'Fila de caminhões carregados', autor:'M. Silva',  min: 11 },
    { via:'Via Interna Pátio C', trecho:'Curva 3',       cond:'total',    obs:'Interdição: manobra de pá',    autor:'C. Andrade',min: 18 },
    { via:'Contorno Oficina',    trecho:'Km 1,2 – 1,6',  cond:'parcial',  obs:'Obra de drenagem em curso',    autor:'A. Ribeiro', min: 42 },
    { via:'Via Principal L-2',   trecho:'Km 2,4 – 4,0',  cond:'liberada', obs:'Liberada após reparo',         autor:'C. Andrade',min: 65 },
    { via:'Acesso Portaria N',   trecho:'Entrada',       cond:'liberada', obs:'Tráfego normal',              autor:'Sistema',    min:122 },
  ],

  eventos: [
    { t: 0, msg:'Interdição detectada — Via Interna Pátio C',   icon:'alert-triangle', color:'text-red-600' },
    { t: 0, msg:'IA recalculou 3 rotas automaticamente',        icon:'refresh-cw',     color:'text-vale-green' },
    { t: 1, msg:'VL-07 alocado para Equipe Manut. β',          icon:'check-circle',   color:'text-vale-green' },
    { t: 2, msg:'Chamado #4821 aberto · prioridade alta',       icon:'plus-circle',    color:'text-vale-yellow-dk' },
    { t: 3, msg:'VL-03 chegou ao Pátio B (atraso 0 min)',      icon:'map-pin',        color:'text-vale-green' },
    { t: 5, msg:'Equipe Limpeza ε realocada para Pátio A',     icon:'users',          color:'text-vale-green' },
  ],

  poolEventos: [
    { msg:'VL-10 entrou no Pátio C',                            icon:'map-pin',        color:'text-vale-green' },
    { msg:'Score de otimização atualizado: 94/100',             icon:'sparkles',       color:'text-vale-yellow-dk' },
    { msg:'Congestionamento previsto em Via L-1 (+2 min)',      icon:'alert-triangle', color:'text-vale-yellow-dk' },
    { msg:'VL-06 finalizou rota · disponível',                   icon:'check-circle',   color:'text-vale-green' },
    { msg:'Equipe Insp. γ concluiu inspeção no Pátio C',        icon:'clipboard-check',color:'text-vale-green' },
    { msg:'Alerta de geofencing: VL-08 saiu da área designada', icon:'shield-alert',   color:'text-red-600' },
  ],

  alertas: [
    { tipo:'interdicao', titulo:'Interdição ativa na rota', msg:'Via Interna Pátio C — manobra de pá mecânica (18 min)', tempo:'há 18 min', nivel:'alto' },
    { tipo:'reroute',    titulo:'Rota recalculada',         msg:'Desvio pela Via L-2 — economia estimada de 4 min',      tempo:'há 3 min',  nivel:'info' },
    { tipo:'slow',       titulo:'Lentidão no trecho',       msg:'Acesso Píer II com fila de caminhões carregados',       tempo:'há 11 min', nivel:'medio'},
  ],
};

