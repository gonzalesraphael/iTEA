export interface Prestador {
  id: string;
  nome: string;
  tipo: "profissional" | "clinica" | "instituicao";
  endereco: string;
  telefone: string;
  email: string;
  especialidades: string[];
  descricao: string;
  avaliacao: number;
  numeroAvaliacoes: number;
}

// Dados para Intervenção Precoce
export const prestadoresIntervencaoPrecoce: Prestador[] = [
  {
    id: "ip-1",
    nome: "Dra. Ana Paula Silva",
    tipo: "profissional",
    endereco: "Rua das Acácias, 123 - Centro",
    telefone: "(11) 98765-4321",
    email: "ana.silva@email.com",
    especialidades: ["Fonoaudiologia"],
    descricao: "Fonoaudióloga especializada em intervenção precoce com 10 anos de experiência",
    avaliacao: 4.8,
    numeroAvaliacoes: 45,
  },
  {
    id: "ip-2",
    nome: "Clínica Desenvolvimento Infantil",
    tipo: "clinica",
    endereco: "Av. Paulista, 1500 - Bela Vista",
    telefone: "(11) 3456-7890",
    email: "contato@clinicadesenvolvimento.com.br",
    especialidades: ["Fonoaudiologia", "Terapia Ocupacional", "Treinamento para Pais"],
    descricao: "Clínica multidisciplinar especializada em desenvolvimento infantil",
    avaliacao: 4.9,
    numeroAvaliacoes: 120,
  },
  {
    id: "ip-3",
    nome: "Dr. Carlos Mendes",
    tipo: "profissional",
    endereco: "Rua Augusta, 890 - Consolação",
    telefone: "(11) 99876-5432",
    email: "carlos.mendes@email.com",
    especialidades: ["Terapia Ocupacional"],
    descricao: "Terapeuta ocupacional com foco em integração sensorial",
    avaliacao: 4.7,
    numeroAvaliacoes: 38,
  },
  {
    id: "ip-4",
    nome: "Centro Crescer Bem",
    tipo: "clinica",
    endereco: "Rua Pamplona, 250 - Jardim Paulista",
    telefone: "(11) 3789-4560",
    email: "atendimento@crescerbem.com.br",
    especialidades: ["Treinamento para Pais", "Fonoaudiologia"],
    descricao: "Centro especializado em orientação familiar e desenvolvimento infantil",
    avaliacao: 4.6,
    numeroAvaliacoes: 67,
  },
  {
    id: "ip-5",
    nome: "Dra. Beatriz Costa",
    tipo: "profissional",
    endereco: "Av. Brigadeiro Faria Lima, 2000 - Pinheiros",
    telefone: "(11) 98234-5678",
    email: "beatriz.costa@email.com",
    especialidades: ["Fonoaudiologia", "Treinamento para Pais"],
    descricao: "Fonoaudióloga especializada em comunicação alternativa e orientação parental",
    avaliacao: 4.9,
    numeroAvaliacoes: 52,
  },
];

// Dados para Apoio Educacional
export const prestadoresApoioEducacional: Prestador[] = [
  {
    id: "ae-1",
    nome: "Instituto Educação Inclusiva",
    tipo: "instituicao",
    endereco: "Rua da Consolação, 500 - Centro",
    telefone: "(11) 3123-4567",
    email: "contato@educacaoinclusiva.org.br",
    especialidades: ["Assistência PEI", "Reforço Escolar", "Grupos de Habilidades Sociais"],
    descricao: "Instituto especializado em educação inclusiva e desenvolvimento de PEI",
    avaliacao: 4.8,
    numeroAvaliacoes: 95,
  },
  {
    id: "ae-2",
    nome: "Profª. Mariana Oliveira",
    tipo: "profissional",
    endereco: "Rua Oscar Freire, 320 - Jardins",
    telefone: "(11) 99123-4567",
    email: "mariana.oliveira@email.com",
    especialidades: ["Reforço Escolar"],
    descricao: "Pedagoga especializada em educação especial e reforço escolar individualizado",
    avaliacao: 4.7,
    numeroAvaliacoes: 41,
  },
  {
    id: "ae-3",
    nome: "Centro de Apoio Escolar Aprender+",
    tipo: "instituicao",
    endereco: "Av. Rebouças, 1800 - Pinheiros",
    telefone: "(11) 3456-7891",
    email: "contato@aprendermais.com.br",
    especialidades: ["Assistência PEI", "Reforço Escolar"],
    descricao: "Centro educacional com foco em planos individualizados de ensino",
    avaliacao: 4.6,
    numeroAvaliacoes: 73,
  },
  {
    id: "ae-4",
    nome: "Espaço Habilidades Sociais",
    tipo: "instituicao",
    endereco: "Rua Haddock Lobo, 560 - Cerqueira César",
    telefone: "(11) 3789-0123",
    email: "info@espacohabilidades.com.br",
    especialidades: ["Grupos de Habilidades Sociais"],
    descricao: "Grupos terapêuticos para desenvolvimento de habilidades sociais e comunicação",
    avaliacao: 4.9,
    numeroAvaliacoes: 88,
  },
  {
    id: "ae-5",
    nome: "Profª. Sandra Lima",
    tipo: "profissional",
    endereco: "Rua Estados Unidos, 1200 - Jardim América",
    telefone: "(11) 98765-1234",
    email: "sandra.lima@email.com",
    especialidades: ["Assistência PEI", "Grupos de Habilidades Sociais"],
    descricao: "Psicopedagoga com especialização em TEA e desenvolvimento de PEI",
    avaliacao: 4.8,
    numeroAvaliacoes: 56,
  },
];

// Dados para Serviços Comportamentais
export const prestadoresServicosComportamentais: Prestador[] = [
  {
    id: "sc-1",
    nome: "Clínica ABA Desenvolvimento",
    tipo: "clinica",
    endereco: "Av. Angélica, 2400 - Consolação",
    telefone: "(11) 3234-5678",
    email: "contato@abadesenvolvimento.com.br",
    especialidades: ["Terapia ABA", "Planos Comportamentais"],
    descricao: "Clínica especializada em análise do comportamento aplicada (ABA)",
    avaliacao: 4.9,
    numeroAvaliacoes: 110,
  },
  {
    id: "sc-2",
    nome: "Dr. Roberto Santos",
    tipo: "profissional",
    endereco: "Rua Bela Cintra, 780 - Consolação",
    telefone: "(11) 99234-5678",
    email: "roberto.santos@email.com",
    especialidades: ["Terapia ABA"],
    descricao: "Psicólogo especialista em ABA com certificação internacional BCBA",
    avaliacao: 4.8,
    numeroAvaliacoes: 62,
  },
  {
    id: "sc-3",
    nome: "Centro Comportamento Positivo",
    tipo: "clinica",
    endereco: "Rua Augusta, 1500 - Consolação",
    telefone: "(11) 3456-7892",
    email: "atendimento@comportamentopositivo.com.br",
    especialidades: ["Planos Comportamentais", "Coaching Familiar"],
    descricao: "Centro multidisciplinar focado em suporte comportamental positivo",
    avaliacao: 4.7,
    numeroAvaliacoes: 85,
  },
  {
    id: "sc-4",
    nome: "Dra. Fernanda Alves",
    tipo: "profissional",
    endereco: "Av. Europa, 650 - Jardim Europa",
    telefone: "(11) 98123-4567",
    email: "fernanda.alves@email.com",
    especialidades: ["Coaching Familiar", "Planos Comportamentais"],
    descricao: "Psicóloga especializada em orientação familiar e manejo comportamental",
    avaliacao: 4.9,
    numeroAvaliacoes: 71,
  },
  {
    id: "sc-5",
    nome: "Instituto ABA Brasil",
    tipo: "clinica",
    endereco: "Rua Joaquim Floriano, 1000 - Itaim Bibi",
    telefone: "(11) 3789-1234",
    email: "contato@ababrasil.org.br",
    especialidades: ["Terapia ABA", "Coaching Familiar", "Planos Comportamentais"],
    descricao: "Instituto de referência em terapia ABA e suporte familiar",
    avaliacao: 5.0,
    numeroAvaliacoes: 134,
  },
];

// Dados para Serviços de Transição
export const prestadoresServicosTransicao: Prestador[] = [
  {
    id: "st-1",
    nome: "Instituto Vida Independente",
    tipo: "instituicao",
    endereco: "Av. Paulista, 2300 - Bela Vista",
    telefone: "(11) 3567-8901",
    email: "contato@vidaindependente.org.br",
    especialidades: ["Treinamento Profissional", "Habilidades para a Vida", "Orientação de Carreira"],
    descricao: "Instituto dedicado à preparação de jovens autistas para vida adulta independente",
    avaliacao: 4.9,
    numeroAvaliacoes: 102,
  },
  {
    id: "st-2",
    nome: "Centro de Capacitação Profissional Incluir",
    tipo: "instituicao",
    endereco: "Rua Vergueiro, 1800 - Vila Mariana",
    telefone: "(11) 3234-5679",
    email: "info@incluircapacitacao.com.br",
    especialidades: ["Treinamento Profissional", "Orientação de Carreira"],
    descricao: "Centro especializado em capacitação profissional para pessoas com TEA",
    avaliacao: 4.7,
    numeroAvaliacoes: 78,
  },
  {
    id: "st-3",
    nome: "Profª. Julia Martins",
    tipo: "profissional",
    endereco: "Rua Fradique Coutinho, 450 - Pinheiros",
    telefone: "(11) 99876-5433",
    email: "julia.martins@email.com",
    especialidades: ["Habilidades para a Vida"],
    descricao: "Terapeuta ocupacional especializada em habilidades de vida diária e autonomia",
    avaliacao: 4.8,
    numeroAvaliacoes: 54,
  },
  {
    id: "st-4",
    nome: "Espaço Autonomia",
    tipo: "instituicao",
    endereco: "Av. Brigadeiro Luís Antônio, 2050 - Bela Vista",
    telefone: "(11) 3456-7893",
    email: "contato@espacoautonomia.com.br",
    especialidades: ["Habilidades para a Vida", "Treinamento Profissional"],
    descricao: "Espaço de treinamento em habilidades práticas e preparação para o mercado de trabalho",
    avaliacao: 4.6,
    numeroAvaliacoes: 69,
  },
  {
    id: "st-5",
    nome: "Dr. Paulo Rodrigues - Coach de Carreira",
    tipo: "profissional",
    endereco: "Rua Padre João Manuel, 850 - Jardins",
    telefone: "(11) 98234-5679",
    email: "paulo.rodrigues@email.com",
    especialidades: ["Orientação de Carreira"],
    descricao: "Coach especializado em orientação profissional para pessoas neurodivergentes",
    avaliacao: 4.9,
    numeroAvaliacoes: 47,
  },
];

// Mapas de filtros para cada categoria
export const filtrosIntervencaoPrecoce = [
  "Fonoaudiologia",
  "Terapia Ocupacional",
  "Treinamento para Pais",
];

export const filtrosApoioEducacional = [
  "Assistência PEI",
  "Reforço Escolar",
  "Grupos de Habilidades Sociais",
];

export const filtrosServicosComportamentais = [
  "Terapia ABA",
  "Planos Comportamentais",
  "Coaching Familiar",
];

export const filtrosServicosTransicao = [
  "Treinamento Profissional",
  "Habilidades para a Vida",
  "Orientação de Carreira",
];
