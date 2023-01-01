import { Graphics1, Graphics2, Graphics5, Graphics6, Graphics7 } from '../../../components/Graphics/Graphics1';

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
export const AreasGraphs = [
  {
    title: 'Area simples',
    subtitle: 'Comparação de vendas',
    description: 'O gráfico de área seria útil neste caso, pois permite comparar facilmente as vendas do produto ao longo do tempo. Ele também permite destacar o tamanho relativo das vendas em cada mês, permitindo ver a tendência geral das vendas ao longo do tempo. Além disso, o gráfico de área também pode ser usado para comparar as vendas de dois produtos diferentes, como no exemplo acima, onde o valor e o valor2 representam as vendas de dois produtos diferentes. Isso pode ser útil para identificar quais produtos estão tendo mais sucesso e onde é preciso focar mais esforços de marketing.',
    graph: <Graphics6 />,
  },
];
export const BarsGraphs = [
  {
    title: 'Barras',
    subtitle: 'Gráfico de Barras da Taxa de Natalidade no Brasil de 2012 a 2022',
    description: 'O gráfico de barras é uma ótima maneira de visualizar a evolução de um dado ao longo do tempo. No gráfico ao lado, é possível ver a taxa de natalidade no Brasil de 2012 a 2022. Cada barra representa um ano e a sua altura indica o valor da taxa de natalidade nesse ano. É possível ver, por exemplo, que a taxa de natalidade teve um aumento significativo entre 2015 e 2016, mas depois se estabilizou até 2022. Além disso, o gráfico de barras permite comparar facilmente os valores de cada ano, o que pode nos ajudar a entender melhor a tendência da taxa de natalidade no Brasil.',
    graph: <Graphics2 />,
  },
  {
    title: 'Barras',
    subtitle: 'Gráfico de Barras para comparar vendas',
    description: 'O gráfico de barras seria útil neste caso, pois permite comparar facilmente as vendas de cada tipo de produto entre os diferentes gêneros e também entre as vendas para crianças. Ele também permite destacar o tamanho relativo das vendas de cada tipo de produto para cada gênero, permitindo ver qual tipo de produto é mais popular entre os diferentes gêneros. Além disso, o gráfico de barras também pode ser usado para comparar as vendas de diferentes lojas ou para mostrar a tendência das vendas ao longo do tempo.',
    graph: <Graphics7 />,
  },
];
