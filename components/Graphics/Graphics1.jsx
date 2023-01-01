import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Line,
  LineChart,
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from 'recharts';

const dataCoin = [
  { name: 'Dia 1 dez', dolar: 5.19, euro: 5.46, amt: 2400 },
  { name: 'Dia 2 dez', dolar: 5.22, euro: 5.5, amt: 2210 },
  { name: 'Dia 3 dez', dolar: 5.22, euro: 5.5, amt: 2290 },
  { name: 'Dia 4 dez', dolar: 5.22, euro: 5.46, amt: 2000 },
  { name: 'Dia 5 dez', dolar: 5.28, euro: 5.54, amt: 2181 },
  { name: 'Dia 6 dez', dolar: 5.24, euro: 5.48, amt: 2500 },
  { name: 'Dia 7 dez', dolar: 5.21, euro: 5.47, amt: 2100 },
  { name: 'Dia 8 dez', dolar: 5.23, euro: 5.52, amt: 2100 },
  { name: 'Dia 9 dez', dolar: 5.24, euro: 5.52, amt: 2100 },
  { name: 'Dia 10 dez', dolar: 5.24, euro: 5.52, amt: 2100 },
  { name: 'Dia 11 dez', dolar: 5.24, euro: 5.52, amt: 2100 },
  { name: 'Dia 12 dez', dolar: 5.32, euro: 5.61, amt: 2100 },
  { name: 'Dia 13 dez', dolar: 5.29, euro: 5.63, amt: 2100 },
  { name: 'Dia 14 dez', dolar: 5.28, euro: 5.64, amt: 2100 },
  { name: 'Dia 15 dez', dolar: 5.31, euro: 5.64, amt: 2100 },
  { name: 'Dia 16 dez', dolar: 5.31, euro: 5.62, amt: 2100 },
  { name: 'Dia 17 dez', dolar: 5.31, euro: 5.62, amt: 2100 },
  { name: 'Dia 18 dez', dolar: 5.31, euro: 5.62, amt: 2100 },
  { name: 'Dia 19 dez', dolar: 5.29, euro: 5.62, amt: 2100 },
  { name: 'Dia 20 dez', dolar: 5.2, euro: 5.53, amt: 2100 },
  { name: 'Dia 21 dez', dolar: 5.21, euro: 5.52, amt: 2100 },
  { name: 'Dia 22 dez', dolar: 5.17, euro: 5.48, amt: 2100 },
  { name: 'Dia 23 dez', dolar: 5.17, euro: 5.48, amt: 2100 },
  { name: 'Dia 24 dez', dolar: 5.17, euro: 5.48, amt: 2100 },
  { name: 'Dia 25 dez', dolar: 5.17, euro: 5.48, amt: 2100 },
  { name: 'Dia 26 dez', dolar: 5.22, euro: 5.48, amt: 2100 },
  { name: 'Dia 27 dez', dolar: 5.29, euro: 5.64, amt: 2100 },
  { name: 'Dia 28 dez', dolar: 5.27, euro: 5.59, amt: 2100 },
  { name: 'Dia 29 dez', dolar: 5.29, euro: 5.46, amt: 2100 },
  { name: 'Dia 30 dez', dolar: 5.29, euro: 5.66, amt: 2100 },
  { name: 'Dia 31 dez', dolar: 5.29, euro: 5.67, amt: 2100 },
];
const dataBirthRate = [
  { name: '2012', Natalidade: 1704405 },
  { name: '2013', Natalidade: 1708252 },
  { name: '2014', Natalidade: 1745343 },
  { name: '2015', Natalidade: 1880129 },
  { name: '2016', Natalidade: 1736850 },
  { name: '2017', Natalidade: 1723563 },
  { name: '2018', Natalidade: 1747041 },
  { name: '2019', Natalidade: 1720886 },
  { name: '2020', Natalidade: 1583218 },
  { name: '2021', Natalidade: 1588606 },
  { name: '2022', Natalidade: 1530532 },
];
const population01 = [
  { name: 'China', value: 1439323776, fill: '#eb833f' },
  { name: 'Índia', value: 1380004385, fill: '#3c50c2' },
  { name: 'Estados Unidos', value: 331002651, fill: '#47c23c' },
  { name: 'Indonésia', value: 273523615, fill: '#b23cc2' },
  { name: 'Paquistão', value: 220892340, fill: '#e0d041' },
  { name: 'Brasil', value: 212559417, fill: '#4144e0' },
];
const performanceEvaluation = [
  { name: 'Comunicação', value: 4.5, value2: 3.5 },
  { name: 'Trabalho em equipe', value: 4.0, value2: 3 },
  { name: 'Proatividade', value: 3.5, value2: 4.5 },
  { name: 'Iniciativa', value: 3.0, value2: 5 },
  { name: 'Gestão de tempo', value: 2.5, value2: 3.1 },
  { name: 'Liderança', value: 2.0, value2: 2.8 },
];
const dataAnalysis = [
  { name: 'Dados', site1: 75, site2: 65 },
  { name: 'Interesse', site1: 60, site2: 80 },
  { name: 'conversão', site1: 90, site2: 75 },
  { name: 'Tempo médio', site1: 45, site2: 50 },
  { name: 'visualizações', site1: 70, site2: 90 },
  { name: 'rejeição', site1: 60, site2: 64 },
];
const salesData = [
  { name: 'Janeiro', produto: 75, produto2: 65 },
  { name: 'Fevereiro', produto: 60, produto2: 80 },
  { name: 'Março', produto: 90, produto2: 75 },
  { name: 'Abril', produto: 45, produto2: 50 },
  { name: 'Maio', produto: 70, produto2: 90 },
  { name: 'Junho', produto: 60, produto2: 64 },
];
const clothingSales = [
  { name: 'Camisetas', masculino: 75, feminino: 65, infantil: 35 },
  { name: 'Calças', masculino: 60, feminino: 80, infantil: 50 },
  { name: 'Sapatos', masculino: 90, feminino: 75, infantil: 55 },
  { name: 'Acessórios', masculino: 45, feminino: 50, infantil: 25 },
  { name: 'Jaquetas', masculino: 70, feminino: 90, infantil: 45 },
  { name: 'Bolsas', masculino: 60, feminino: 64, infantil: 30 },
];

const Graphics1 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      width={500}
      height={300}
      data={dataCoin}
      margin={{
        top: 20,
        right: 50,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[5.1, 5.7]} />
      <Tooltip />
      <Legend />
      <ReferenceLine x="Page C" stroke="red" label="Max euro PAGE" />
      <ReferenceLine y={9800} label="Max" stroke="red" />
      <Line type="monotone" dataKey="euro" stroke="#8884d8" />
      <Line type="monotone" dataKey="dolar" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);
const Graphics2 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={dataBirthRate}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[1500000, 1900000]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Natalidade" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);
const Graphics3 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={population01}
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);
const Graphics4 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performanceEvaluation}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="RH2"
          dataKey="value2"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Radar
          name="RH"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  </ResponsiveContainer>
);
const Graphics5 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        layout="vertical"
        width={500}
        height={300}
        data={dataAnalysis}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis domain={[20, 150]} type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="site1" stroke="#8884d8" />
        <Line dataKey="site2" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </ResponsiveContainer>
);
const Graphics6 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={salesData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[25, 90]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="produto"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="produto2"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ResponsiveContainer>
);
const Graphics7 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={clothingSales}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="masculino" fill="#8884d8" />
        <Bar dataKey="feminino" fill="#f5a244" />
        <Bar dataKey="infantil" fill="#5cd338" />
      </BarChart>
    </ResponsiveContainer>
  </ResponsiveContainer>
);

export {
  Graphics1,
  Graphics2,
  Graphics3,
  Graphics4,
  Graphics5,
  Graphics6,
  Graphics7,
};
