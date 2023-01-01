import { Graphics1, Graphics5 } from '../../../components/Graphics/Graphics1';

export const LinesGraphs = [
  {
    title: 'Linhas Horizontais',
    subtitle: 'Valores do euro e do dólar em relação ao real brasileiro',
    description: 'Este gráfico mostra os valores do euro e do dólar em relação com o real brasileiro ao longo de um período de um mês, de 1º a 31 de dezembro de 2022. É possível ver todas as alterações nos valores dessas moedas nesse período, com os dados sendo atualizados diariamente através de um banco de dados. O gráfico exibe os valores do euro e do dólar lado a lado, permitindo comparar as alterações nas taxas de câmbio em tempo real. Além disso, o gráfico é atualizado automaticamente conforme os valores mudam, garantindo que os dados sejam sempre precisos e atualizados.',
    graph: <Graphics1 />,
  },
  {
    title: 'Linhas Verticais',
    subtitle: 'Análise de dados de acessos a um website',
    description: 'Este gráfico apresenta uma série de métricas importantes sobre os acessos a um site, incluindo dados demográficos, interesses dos usuários, taxas de conversão e tempo médio no site. O gráfico de linhas vertical permite uma visualização fácil e rápida dessas informações, tornando mais fácil entender como nosso site está sendo utilizado e quais ações podem ser tomadas para melhorar o desempenho.',
    graph: <Graphics5 />,
  },
];
