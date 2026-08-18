/**
 * Welcome Modal configuration and content
 * For the Vigilância Socioassistencial Guide
 */

export const WELCOME_CONFIG = {
  localStorageKey: 'guia-vigilancia-welcome-seen',
  showDelayMs: 600,
}

export const WELCOME_CONTENT = {
  title: 'Diagnóstico Socioterritorial de Silva Jardim',
  subtitle: 'SUAS / RJ — COOVIG / SEDSODH',
  description:
    'Elaborado para os profissionais do Sistema Único de Assistência Social (SUAS), este material oferece orientações práticas para a execução de um Diagnostico Socioterritorial. Com uma linguagem acessível e didática, o material apresenta o passo a passo para a elaboração de um Diagnóstico Socioterritorial, servindo como guia de referência para o planejamento, a gestão e a qualificação das ações no território.',
  teamLabel: 'Equipe Responsável',
  otherCadernosLabel: 'Outros Cadernos desenvolvidos pela Vigilância Socioassistencial',
  otherCadernosEmpty: 'Outros cadernos serão publicados em breve.',
  dontShowAgainLabel: 'Não mostrar novamente nesta sessão',
  ctaLabel: 'Iniciar leitura',
}

export const WELCOME_TEAM = [
  {
    unit: 'Coordenação Estadual de Vigilância Socioassistencial (COOVIG)',
    role: 'Desenvolvimento do Guia',
    responsible: 'Junier Goulart',
    support: 'Matheus Lopes e Matheus de Freitas',
    email: 'coordvigilanciasgs@sedsdh.rj.gov.br',
  },
]

export const WELCOME_CONTACT = {
  phone: '(21) 3231-3658',
  email: 'coordvigilanciasgs@sedsdh.rj.gov.br',
  address: 'Secretaria de Estado de Desenvolvimento Social e Direitos Humanos — Rio de Janeiro/RJ',
}

export const OTHER_CADERNOS = [
  {
    href: 'https://guia-prontuario.sedsodh.org/',
    label: 'Guia do Prontuário SUAS',
    description: 'Manual de uso do Prontuário Eletrônico do SUAS',
    accentClass: 'bg-institucional-green',
  },
  {
    href: 'https://hub-vigilancia.sedsodh.org/',
    label: 'Hub da Vigilância Socioassistencial',
    description: 'Central de informações, indicadores e dados da Vigilância Socioassistencial',
    accentClass: 'bg-institucional-blue',
  },
  {
    href: 'https://caderno.gofsuasrj.org/',
    label: 'Caderno de Gestão Orçamentária e Financeira do SUAS',
    description: 'Orientações para gestão dos recursos do cofinanciamento estadual',
    accentClass: 'bg-institucional-green',
  },
]
