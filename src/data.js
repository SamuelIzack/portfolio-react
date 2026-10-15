export const profile = {
  name: 'Samuel Izack',
  email: 'Samuel.lopes0761@gmail.com',
  github: 'https://github.com/SamuelIzack',
  linkedin: 'https://www.linkedin.com/in/samuel-izack/',
}

const icon = (name, file = `${name}-original`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${file}.svg`

export const stack = [
  { name: 'Node.js', icon: icon('nodejs'), area: 'back' },
  { name: 'MySQL', icon: icon('mysql'), area: 'back', lighten: true },
  { name: 'Python', icon: icon('python'), area: 'back' },
  { name: 'JavaScript', icon: icon('javascript'), area: 'front' },
  { name: 'React', icon: icon('react'), area: 'front' },
  { name: 'HTML', icon: icon('html5'), area: 'front' },
  { name: 'CSS', icon: icon('css3'), area: 'front' },
]

// Linhas do painel de log da abertura (ilustrativo, baseado nos projetos)
export const requestLog = [
  { method: 'POST', path: '/api/terminais', status: 201, ms: 38 },
  { method: 'PUT', path: '/api/estoque/TRM-0142', status: 200, ms: 21 },
  { method: 'POST', path: 'capta › /v1/terminals', status: 201, ms: 112 },
  { method: 'GET', path: '/api/chuva?regiao=centro', status: 200, ms: 64 },
  { method: 'GET', path: '/api/historico/enchentes', status: 200, ms: 47 },
  { method: 'GET', path: '/api/risco/mapa', status: 200, ms: 95 },
]

// image: caminho em /public (ex.: '/projects/simpiu.png') substitui a ilustração. github/demo: URL ou null.
export const projects = [
  {
    id: 'terminais',
    illustration: 'terminal',
    image: null,
    tech: ['Node.js', 'MySQL', 'React', 'JavaScript', 'HTML', 'CSS'],
    github: null,
    demo: null,
  },
  {
    id: 'simpiu',
    illustration: 'map',
    image: null,
    tech: ['Node.js', 'Python', 'MySQL', 'React', 'JavaScript', 'HTML', 'CSS'],
    github: null,
    demo: null,
  },
]

export const translations = {
  pt: {
    nav: { projects: 'Projetos', about: 'Sobre', contact: 'Contato' },
    hero: {
      role: 'Desenvolvedor full stack com foco em back‑end',
      bio: 'Estudante de Análise e Desenvolvimento de Sistemas e técnico em Informática. Trabalho com Node.js, MySQL e React em sistemas usados por gente de verdade.',
      status: 'Aberto a estágio e vagas júnior',
      projects: 'Ver projetos',
      cv: 'Entrar em contato',
      logTitle: 'requisições recentes',
    },
    projects: {
      title: 'Projetos',
      intro: 'Dois sistemas feitos na faculdade para problemas reais: um para uma empresa, outro para a cidade.',
      flow: 'Fluxo',
      code: 'Código',
      demo: 'Ver online',
      items: {
        terminais: {
          kind: 'Projeto de extensão, Faculdade Senac Minas',
          title: 'Gestão de Terminais de Pagamento',
          text: 'Sistema feito para uma empresa real do setor de maquininhas de cartão. Acompanha cada equipamento do cadastro ao estoque, seguindo as regras de negócio da operação.',
          highlight: 'O cadastro nasce no sistema e é enviado à Capta pela API dela, então existe uma única fonte de dados e ninguém precisa cadastrar a mesma máquina duas vezes.',
          steps: ['Cadastro da maquininha', 'Regras e estoque no MySQL', 'Sincronização com a API da Capta'],
        },
        simpiu: {
          kind: 'Projeto Integrador',
          title: 'S.I.M.P.I.U',
          subtitle: 'Sistema Inteligente de Monitoramento e Predição de Inundações Urbanas',
          text: 'Cruza dados de APIs de chuva com o histórico de enchentes de cada região para estimar, num mapa, a chance de alagamento.',
          highlight: 'Reúne em um só lugar a chuva atual, a intensidade, a previsão, o histórico da região e o risco, tudo com dados reais.',
          steps: ['Chuva e previsão via API', 'Histórico de enchentes', 'Cálculo de risco', 'Mapa interativo'],
        },
      },
    },
    about: {
      title: 'Sobre mim',
      text: [
        'Comecei no técnico em Informática e hoje curso ADS. No caminho percebi que o que mais me prende é o back-end: modelar o banco, pensar nas regras de negócio e fazer sistemas conversarem por API.',
        'No front uso React quando o projeto pede, e por isso me apresento como full stack.',
      ],
      timelineTitle: 'Trajetória',
      timeline: [
        { title: 'Técnico em Informática', detail: 'Concluído' },
        { title: 'Análise e Desenvolvimento de Sistemas', detail: 'Em andamento' },
        { title: 'Projetos para problemas reais', detail: 'Terminais de pagamento e S.I.M.P.I.U' },
      ],
      stackTitle: 'Tecnologias',
      areas: { back: 'Back-end e dados', front: 'Front-end' },
    },
    contact: {
      title: 'Vamos conversar',
      text: 'Se você tem uma vaga, um projeto ou só quer trocar uma ideia, me manda um e-mail.',
      copy: 'Copiar',
      copied: 'Copiado',
    },
    footer: 'Feito com React e Vite',
  },
  en: {
    nav: { projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: {
      role: 'Full stack developer focused on back‑end',
      bio: 'Systems Analysis and Development student with a technical degree in IT. I work with Node.js, MySQL and React on systems real people use.',
      status: 'Open to internships and junior roles',
      projects: 'See projects',
      cv: 'Get in touch',
      logTitle: 'recent requests',
    },
    projects: {
      title: 'Projects',
      intro: 'Two systems built at university for real problems: one for a company, one for the city.',
      flow: 'Flow',
      code: 'Code',
      demo: 'Live',
      items: {
        terminais: {
          kind: 'Extension project, Faculdade Senac Minas',
          title: 'Payment Terminal Management',
          text: 'Built for a real company in the card machine industry. It tracks each device from registration to inventory, following the business rules of the operation.',
          highlight: 'Devices are created in our system and sent to Capta through its API, so there is one source of data and nobody registers the same machine twice.',
          steps: ['Device registration', 'Rules and stock in MySQL', 'Sync with the Capta API'],
        },
        simpiu: {
          kind: 'Capstone project',
          title: 'S.I.M.P.I.U',
          subtitle: 'Intelligent Urban Flood Monitoring and Prediction System',
          text: 'Combines rainfall API data with each area’s flood history to estimate, on a map, how likely flooding is.',
          highlight: 'It brings current rain, intensity, forecast, local history and risk together in one place, all from real data.',
          steps: ['Rain and forecast via API', 'Flood history', 'Risk estimate', 'Interactive map'],
        },
      },
    },
    about: {
      title: 'About me',
      text: [
        "I started with a technical degree in IT and I'm now studying Systems Analysis and Development. Along the way I realized what keeps me hooked is the back-end: modeling the database, thinking through business rules and getting systems to talk through APIs.",
        'On the front-end I use React when a project needs it, which is why I call myself full stack.',
      ],
      timelineTitle: 'Path',
      timeline: [
        { title: 'Technical degree in IT', detail: 'Completed' },
        { title: 'Systems Analysis and Development', detail: 'In progress' },
        { title: 'Projects for real problems', detail: 'Payment terminals and S.I.M.P.I.U' },
      ],
      stackTitle: 'Tech',
      areas: { back: 'Back-end and data', front: 'Front-end' },
    },
    contact: {
      title: "Let's talk",
      text: 'If you have a role, a project, or just want to chat, send me an email.',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: 'Built with React and Vite',
  },
}
