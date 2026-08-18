# Guia do Diagnóstico Socioterritorial

**SUAS / RJ — COOVIG / SEDSODH**

[![Licença: CC BY-SA 4.0](https://img.shields.io/badge/Licen%C3%A7a-CC%20BY--SA%204.0-brightgreen)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)

> Roteiro prático e didático para apoiar as equipes do SUAS na elaboração do Diagnóstico Socioterritorial, com um exemplo completo aplicado ao município de **Silva Jardim (RJ)**.

---

## Sobre

O **Diagnóstico Socioterritorial** é um instrumento essencial da Vigilância Socioassistencial: por meio dele, a política de assistência social **produz, sistematiza, analisa e dissemina informações territorializadas** sobre situações de vulnerabilidade e risco social, subsidiando o planejamento e a gestão das ações no território.

Este Guia, produzido pela **Coordenação Estadual de Vigilância Socioassistencial (COOVIG)** da Secretaria de Estado de Desenvolvimento Social e Direitos Humanos (SEDSODH), apresenta um roteiro didático em formato de **caderno interativo**, com linguagem acessível e usando apenas ferramentas simples (Excel, Word e I.A.) disponíveis às equipes do SUAS.

O material percorre:

| Parte | Conteúdo |
|---|---|
| **Fundamentos e Planejamento** | Conceitos, base normativa e organização do diagnóstico |
| **Modelos prontos** | Portaria e Resolução do CMAS |
| **Método e Aplicação** | Quem realiza e como aplicar o roteiro na prática |
| **Exemplo aplicado** | Diagnóstico passo a passo do município de Silva Jardim (RJ), em **5 etapas**: problema, perfil de renda, acessibilidade e transporte, capacidade vs. demanda e proposta |

Inclui ainda **checklists**, perguntas frequentes, glossário, referências e as **Regras de Ouro** da Vigilância Socioassistencial.

---

## Acesso

O Guia está publicado em:

👉 **[sedsodh.github.io/guia-vigilancia-socioassistencial](https://sedsodh.github.io/guia-vigilancia-socioassistencial/)**

---

## Tecnologia

| Camada | Stack |
|---|---|
| Framework | [Astro 6](https://astro.build) (SSG) |
| Componentes interativos | [React 19](https://react.dev) |
| Efeito de livro | [react-pageflip](https://www.npmjs.com/package/react-pageflip) |
| Estilização | [Tailwind CSS 3](https://tailwindcss.com) |
| Busca textual | [Pagefind](https://pagefind.app) |
| Hospedagem | [GitHub Pages](https://pages.github.com) |

---

## Executar localmente

```bash
# Clonar o repositório
git clone https://github.com/JCGoulart/guia-diagnostico.git
cd guia-diagnostico

# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção (gera também o índice do Pagefind)
npm run build

# Preview do build
npm run preview
```

> ⚠️ Na primeira execução, rode `npm run build` uma vez para gerar o índice de busca do Pagefind em `public/pagefind`.

---

## Contribuir

Sugestões e correções são bem-vindas. Este é um projeto mantido pela COOVIG/SEDSODH com equipe reduzida — contribuições externas serão analisadas conforme disponibilidade.

1. Abra uma **issue** descrevendo a sugestão ou problema encontrado
2. Para alterações de conteúdo técnico, aguarde a revisão da equipe da COOVIG
3. Pull requests são bem-vindos, especialmente para correções de código e acessibilidade

---

## Licença

Este Guia está licenciado sob a **[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](./LICENSE)**.

**Você pode:**
- Compartilhar e adaptar o material para qualquer fim
- Usar, citar e distribuir livremente

**Desde que:**
- Atribua o crédito à SEDSODH/COOVIG
- Mantenha a mesma licença em obras derivadas

---

## Expediente

**Governo do Estado do Rio de Janeiro**  
Secretaria de Estado de Desenvolvimento Social e Direitos Humanos (SEDSODH)  
Coordenação Estadual de Vigilância Socioassistencial (COOVIG)

**Secretário:** Patricia Tavares  
**Subsecretário de Gestão do SUAS:** Felippe de Souza Rodrigues  
**Superintendente de Gestão do SUAS:** Adriana Alves Pinto de Castro  
**Coordenador de Vigilância Socioassistencial:** Matheus Lopes

**Equipe responsável pelo Guia:** Matheus Lopes (coordenação), Junier Goulart, Matheus de Freitas