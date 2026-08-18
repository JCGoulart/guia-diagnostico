export const INSTITUTIONAL_COLORS = {
  blue: '#004b87',
  lightBlue: '#e6f0fa',
  green: '#009b3a',
  lightGreen: '#e6f5ea',
  dark: '#1e293b',
  gray: '#f8fafc',
}

export const LIMITS = {
  // Limites específicos da Vigilância Socioassistencial
}

export const BLOCK_ACCENTS = {
  gestao: { border: 'border-block-gestao', light: 'bg-block-gestao-light', color: 'text-block-gestao-text', hex: '#004b87', label: 'azul', badgeBg: 'bg-block-gestao-light', badgeText: 'text-block-gestao-text', badgeBorder: 'border-block-gestao/30', lineGradient: 'from-institucional-blue to-blue-300', iconBg: 'bg-institucional-blue', iconBgDark: 'dark:bg-blue-800' },
  planejamento: { border: 'border-block-planejamento', light: 'bg-block-planejamento-light', color: 'text-block-planejamento-text', hex: '#009b3a', label: 'verde', badgeBg: 'bg-block-planejamento-light', badgeText: 'text-block-planejamento-text', badgeBorder: 'border-block-planejamento/30', lineGradient: 'from-institucional-green to-green-300', iconBg: 'bg-institucional-green', iconBgDark: 'dark:bg-green-800' },
  reprogramacao: { border: 'border-block-reprogramacao', light: 'bg-block-reprogramacao-light', color: 'text-block-reprogramacao-text', hex: '#0891b2', label: 'ciano', badgeBg: 'bg-block-reprogramacao-light', badgeText: 'text-block-reprogramacao-text', badgeBorder: 'border-block-reprogramacao/30', lineGradient: 'from-cyan-500 to-cyan-300', iconBg: 'bg-cyan-500', iconBgDark: 'dark:bg-cyan-700' },
  controle: { border: 'border-block-controle', light: 'bg-block-controle-light', color: 'text-block-controle-text', hex: '#be185d', label: 'rosa', badgeBg: 'bg-block-controle-light', badgeText: 'text-block-controle-text', badgeBorder: 'border-block-controle/30', lineGradient: 'from-pink-500 to-pink-300', iconBg: 'bg-pink-500', iconBgDark: 'dark:bg-pink-700' },
}

export const BLOCKS = [
  {
    id: 'bloco-1',
    title: 'Bloco 1 - Problema',
    accent: 'gestao',
    items: [
      { id: 'premissa', title: 'Área de Cobertura Inadequada' },
      { id: 'metodo', title: 'Passo a Passo para Identificar Cobertura Inadequada' },
      { id: 'aplicacao', title: 'O Diagnóstico de Silva Jardim' },
    ],
  },
  {
    id: 'bloco-2',
    title: 'Bloco 2 - Perfil de Renda',
    accent: 'planejamento',
    items: [
      { id: 'populacao', title: 'População no CadÚnico' },
      { id: 'renda', title: 'Perfil de renda' },
      { id: 'trabalho', title: 'Trabalho e fontes de renda' },
    ],
  },
  {
    id: 'bloco-3',
    title: 'Bloco 3 - Acessibilidade e Transporte',
    accent: 'reprogramacao',
    items: [
      { id: 'regioes', title: 'População por região de transporte' },
      { id: 'vulnerabilidade', title: 'Vulnerabilidade por região' },
      { id: 'transporte', title: 'Acessibilidade (transporte público)' },
    ],
  },
  {
    id: 'bloco-4',
    title: 'Bloco 4 - Capacidade vs. Demanda',
    accent: 'controle',
    items: [
      { id: 'cras', title: 'CRAS hoje: demanda e capacidade' },
    ],
  },
  {
    id: 'bloco-5',
    title: 'Bloco 5 - Proposta de Solução',
    accent: 'gestao',
    items: [
      { id: 'justificativa', title: 'Justificativa da relocalização' },
      { id: 'proposta', title: 'Proposta: CRAS CRIAR para Varginha' },
    ],
  },
]

export const INTRO_SECTIONS = [
  { id: 'capa', title: 'Capa' },
  { id: 'expediente', title: 'Expediente' },
  { id: 'sumario', title: 'Sumário' },
  { id: 'apresentacao', title: 'Apresentação' },
  { id: 'planejamento', title: 'Como Planejar e Executar um Diagnóstico Socioterritorial' },
  { id: 'fundamentos', title: 'Por que o Diagnóstico Socioterritorial é Indispensável?' },
  { id: 'modelos', title: 'Modelos e Abordagens para Elaboração de Diagnósticos' },
  { id: 'quem-realiza', title: 'Quem pode realizar o Diagnóstico Socioterritorial ?' },
]

export const FINAL_SECTIONS = [
  { id: 'anexos', title: 'Anexos — Fontes e notas' },
  { id: 'contra-capa', title: 'Contra-Capa' },
]
