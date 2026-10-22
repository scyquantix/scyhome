import type { LucideIcon } from "lucide-react";
import { ChartColumn, Cog, Database, Boxes } from "lucide-react";

export type Solution = {
  icon: LucideIcon;
  problem: string;
  service: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    icon: Database,
    problem: "Dados espalhados entre sistemas",
    service: "Integração e organização de dados",
    description: "Reunimos informações de sistemas e arquivos em uma base organizada para análise.",
  },
  {
    icon: Cog,
    problem: "Relatórios que dependem de trabalho manual",
    service: "Automação de rotinas",
    description:
      "Automatizamos a preparação e a atualização dos dados que alimentam seus relatórios.",
  },
  {
    icon: ChartColumn,
    problem: "Dificuldade para acompanhar resultados",
    service: "Indicadores e painéis de gestão",
    description:
      "Definimos indicadores e painéis a partir das decisões que sua empresa precisa tomar.",
  },
  {
    icon: Boxes,
    problem: "Seu processo exige uma solução sob medida?",
    service: "Aplicações sob medida",
    description:
      "Desenvolvemos ferramentas para consultar informações, executar análises e apoiar processos específicos.",
  },
];

export type Founder = {
  name: string;
  role: string;
  /** Trechos alternados; os de índice ímpar saem em negrito. */
  bio: string[];
};

export const founders: Founder[] = [
  {
    name: "Fabrício Toccoli Fenili",
    role: "Cofundador",
    bio: [
      "Reúne visão de negócio e liderança técnica, construídas em 16 anos no Itaú Unibanco. Sua experiência abrange planejamento, engenharia de dados e automação, incluindo ",
      "atendimento a demandas do Banco Central do Brasil e elaboração de reportes regulatórios",
      ".",
    ],
  },
  {
    name: "Leonardo Souza",
    role: "Cofundador",
    bio: [
      "Reúne experiência em engenharia de dados, análise estatística e desenvolvimento de sistemas. Atua na automação e otimização de processos, conectando necessidades de gestão à construção de aplicações e análises, com foco em eficiência e uso responsável de recursos.",
    ],
  },
];

export const steps = [
  { title: "Entendimento", description: "Necessidade e objetivos" },
  { title: "Proposta", description: "Escopo, prazos, entregas e investimento" },
  { title: "Desenvolvimento", description: "Construção e validação com você" },
  { title: "Entrega", description: "Documentação e orientação de uso" },
];
