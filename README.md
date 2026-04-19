# ValeMove

Protótipo web conceitual para **otimização de rotas operacionais** no **Porto Ponta da Madeira**, com foco em apoio à tomada de decisão, visualização de rotas, registro de ocorrências e acompanhamento da operação.

## Visão geral

O **ValeMove** foi desenvolvido como um **protótipo front-end em HTML, CSS e JavaScript**, simulando uma solução de roteirização e apoio operacional para ambientes logísticos de alta complexidade.

A aplicação apresenta uma experiência de uso responsiva, com interface voltada para operação em desktop e mobile, e organiza a navegação por **três perfis de acesso**:

- **Motorista**
- **Funcionário de campo**
- **Administração / despacho**

Além disso, o sistema inclui uma **modal de proposta**, que contextualiza o problema logístico do Porto Ponta da Madeira e posiciona o projeto como solução para o desafio. 

## Objetivo do projeto

O protótipo busca demonstrar, de forma visual e interativa, como uma plataforma poderia:

- organizar solicitações de transporte interno;
- acompanhar veículos e equipes;
- recalcular ou apoiar decisões de rota;
- registrar condições da via com geolocalização;
- melhorar a visibilidade operacional em tempo real.

## Funcionalidades presentes no protótipo

### 1. Autenticação simulada
A tela inicial oferece dois modos de acesso:

- **Login por matrícula e senha**
- **Login por crachá RFID** com validação simulada por código

Também há botões de **acesso rápido para demonstração**, permitindo entrar diretamente com usuários mockados de cada perfil.

### 2. Perfis de usuário

#### Motorista
O menu do motorista inclui:

- **Tarefa Atual**
- **Mapa · Rota**
- **Chamados**
- **Reportar Via**
- **Meu Turno**

#### Funcionário de campo
O menu do funcionário inclui:

- **Solicitar Transporte**
- **Rastrear Veículo**
- **Condição da Via**
- **Histórico**

#### Administração / despacho
O menu administrativo inclui:

- **Dashboard**
- **Mapa Operacional**
- **Chamados**
- **Frota & Equipes**

### 3. Navegação responsiva
A aplicação foi pensada para funcionar tanto em:

- **desktop**, com sidebar lateral;
- **mobile**, com barra inferior de navegação.

### 4. Mapa e roteirização visual
O HTML utiliza:

- **Leaflet** para mapas;
- **OSRM** como base de roteamento configurada no front-end;
- componentes visuais para exibição de rota, ocorrência e mapa operacional.

### 5. Registro de ocorrências
Há fluxo para registro de ocorrências com:

- tipo;
- gravidade;
- descrição;
- marcação de localização no mapa;
- armazenamento em estado local da aplicação.

### 6. Dados simulados
O projeto utiliza **dados mockados no próprio JavaScript**, incluindo:

- usuários;
- veículos;
- equipes;
- chamados;
- alertas;
- status de vias;
- eventos operacionais.

Isso reforça que o projeto é um **protótipo conceitual**, sem backend persistente real.

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Tailwind CSS** via CDN
- **Lucide Icons**
- **Leaflet**
- **OSRM (endpoint público configurado)**

## Estrutura geral do arquivo

O projeto está concentrado em um único arquivo `index.html`, contendo:

- estrutura da interface;
- estilos;
- navegação entre telas;
- dados simulados;
- lógica de autenticação;
- renderização dinâmica das seções;
- controle de mapas e interações.

## Como executar

Como é um protótipo front-end, basta:

1. baixar o arquivo `index.html`;
2. abrir em um navegador moderno;

ou publicar em um serviço estático, como:

- GitHub Pages
- Netlify
- Vercel

## Usuários de demonstração

Os acessos de demonstração estão embutidos no HTML. Há usuários simulados para:

- motoristas;
- funcionários de campo;
- administração.

Também existem credenciais mockadas no código para login por matrícula/senha.

## Limitações atuais

Este projeto, no estado atual, é **conceitual / demonstrativo**. Isso significa que:

- não possui backend real;
- não possui banco de dados persistente;
- não integra autenticação real;
- não grava informações em servidor;
- não possui integração real com operação logística;
- usa dados simulados em memória;
- depende de serviços CDN e de mapa para parte da experiência visual.

## Possíveis evoluções

Em uma próxima etapa, este protótipo pode evoluir para uma aplicação funcional com:

- backend próprio;
- banco de dados;
- autenticação real;
- integração com APIs de roteirização;
- cadastro e gestão real de usuários;
- persistência de chamados e ocorrências;
- painel administrativo conectado a dados reais.

## Contexto do desafio

O protótipo está contextualizado como uma solução para o **Desafio Vale 2026**, focado em **otimização de rotas e coordenação operacional** no **Porto Ponta da Madeira**, em São Luís/MA.

## Observação importante

Este repositório representa principalmente uma **prova de conceito de interface e fluxo operacional**, e não um sistema completo de produção.

---

## Sugestão de organização do repositório

```bash
/
├── index.html
└── README.md
```

## Licença

Defina a licença conforme a finalidade do projeto:

- acadêmica;
- interna;
- demonstrativa;
- open source.

Caso ainda não tenha definido, você pode deixar temporariamente como:

> Uso acadêmico e demonstrativo.
