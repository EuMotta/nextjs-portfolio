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
  Scatter,
  ComposedChart,
  Brush,
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
const dadosFinanceiros = [
  {
    ano: 2010,
    rendaFamiliar: 35000,
    despesaHabitacao: 12000,
    despesaAlimentacao: 7000,
    despesaTotal: 19000,
  },
  {
    ano: 2011,
    rendaFamiliar: 32000,
    despesaHabitacao: 14000,
    despesaAlimentacao: 8000,
    despesaTotal: 22000,
  },
  {
    ano: 2012,
    rendaFamiliar: 22000,
    despesaHabitacao: 15000,
    despesaAlimentacao: 8500,
    despesaTotal: 23500,
  },
  {
    ano: 2013,
    rendaFamiliar: 35000,
    despesaHabitacao: 16000,
    despesaAlimentacao: 9000,
    despesaTotal: 25000,
  },
  {
    ano: 2014,
    rendaFamiliar: 40000,
    despesaHabitacao: 17000,
    despesaAlimentacao: 10000,
    despesaTotal: 27000,
  },
  {
    ano: 2015,
    rendaFamiliar: 18000,
    despesaHabitacao: 18000,
    despesaAlimentacao: 10000,
    despesaTotal: 28000,
  },
];
const temperatureData = [
  {
    date: '2022-01-01',
    Guaratingueta: 20,
    GuaratinguetaHumidity: 50,
    GuaratinguetaWindSpeed: 15,
    Taubate: 22,
    TaubateHumidity: 40,
    TaubateWindSpeed: 10,
    SJC: 24,
    SJCHumidity: 45,
    SJCWindSpeed: 20,
  },
  {
    date: '2022-01-02',
    Guaratingueta: 22,
    GuaratinguetaHumidity: 55,
    GuaratinguetaWindSpeed: 12,
    Taubate: 23,
    TaubateHumidity: 45,
    TaubateWindSpeed: 15,
    SJC: 23,
    SJCHumidity: 50,
    SJCWindSpeed: 25,
  },
  {
    date: '2022-01-03',
    Guaratingueta: 21,
    GuaratinguetaHumidity: 60,
    GuaratinguetaWindSpeed: 17,
    Taubate: 21,
    TaubateHumidity: 50,
    TaubateWindSpeed: 14,
    SJC: 14,
    SJCHumidity: 40,
    SJCWindSpeed: 21,
  },
  {
    date: '2022-01-04',
    Guaratingueta: 19,
    GuaratinguetaHumidity: 65,
    GuaratinguetaWindSpeed: 11,
    Taubate: 22,
    TaubateHumidity: 55,
    TaubateWindSpeed: 14,
    SJC: 19,
    SJCHumidity: 45,
    SJCWindSpeed: 18,
  },
  {
    date: '2022-01-05',
    Guaratingueta: 16,
    GuaratinguetaHumidity: 70,
    GuaratinguetaWindSpeed: 10,
    Taubate: 20,
    TaubateHumidity: 60,
    TaubateWindSpeed: 11,
    SJC: 25,
    SJCHumidity: 50,
    SJCWindSpeed: 16,
  },
  {
    date: '2022-01-06',
    Guaratingueta: 20,
    GuaratinguetaHumidity: 65,
    GuaratinguetaWindSpeed: 14,
    Taubate: 23,
    TaubateHumidity: 55,
    TaubateWindSpeed: 13,
    SJC: 23,
    SJCHumidity: 45,
    SJCWindSpeed: 19,
  },
  {
    date: '2022-01-07',
    Guaratingueta: 24,
    GuaratinguetaHumidity: 60,
    GuaratinguetaWindSpeed: 15,
    Taubate: 17,
    TaubateHumidity: 50,
    TaubateWindSpeed: 14,
    SJC: 29,
    SJCHumidity: 40,
    SJCWindSpeed: 14,
  },
  {
    date: '2022-01-08',
    Guaratingueta: 15,
    GuaratinguetaHumidity: 55,
    GuaratinguetaWindSpeed: 17,
    Taubate: 25,
    TaubateHumidity: 45,
    TaubateWindSpeed: 15,
    SJC: 30,
    SJCHumidity: 50,
    SJCWindSpeed: 13,
  },
  {
    date: '2022-01-09',
    Guaratingueta: 16,
    GuaratinguetaHumidity: 50,
    GuaratinguetaWindSpeed: 11,
    Taubate: 20,
    TaubateHumidity: 40,
    TaubateWindSpeed: 21,
    SJC: 27,
    SJCHumidity: 45,
    SJCWindSpeed: 22,
  },
  {
    date: '2022-01-10',
    Guaratingueta: 21,
    GuaratinguetaHumidity: 45,
    GuaratinguetaWindSpeed: 20,
    Taubate: 17,
    TaubateHumidity: 50,
    TaubateWindSpeed: 18,
    SJC: 25,
    SJCHumidity: 40,
    SJCWindSpeed: 15,
  },
];
const products = [
  { produto: '1', vendas: 300, lucro: 456 },
  { produto: '2', vendas: -145, lucro: -230 },
  { produto: '3', vendas: -100, lucro: -345 },
  { produto: '4', vendas: -8, lucro: -450 },
  { produto: '5', vendas: 100, lucro: 321 },
  { produto: '6', vendas: 9, lucro: 235 },
  { produto: '7', vendas: 53, lucro: 267 },
  { produto: '8', vendas: 252, lucro: 378 },
  { produto: '9', vendas: 79, lucro: -210 },
  { produto: '10', vendas: 294, lucro: 230 },
  { produto: '11', vendas: 320, lucro: 456 },
  { produto: '12', vendas: -135, lucro: -230 },
  { produto: '13', vendas: -160, lucro: -345 },
  { produto: '14', vendas: 26, lucro: 450 },
  { produto: '15', vendas: 120, lucro: 321 },
  { produto: '16', vendas: 15, lucro: 235 },
  { produto: '17', vendas: 88, lucro: 267 },
  { produto: '18', vendas: -60, lucro: -378 },
  { produto: '19', vendas: -7, lucro: -210 },
  { produto: '20', vendas: 294, lucro: 230 },
  { produto: '21', vendas: 300, lucro: 456 },
  { produto: '22', vendas: 145, lucro: 230 },
  { produto: '23', vendas: 100, lucro: 345 },
  { produto: '24', vendas: 8, lucro: 450 },
  { produto: '25', vendas: 100, lucro: 321 },
  { produto: '26', vendas: 9, lucro: 235 },
  { produto: '27', vendas: 53, lucro: 267 },
  { produto: '28', vendas: -252, lucro: 378 },
  { produto: '29', vendas: -79, lucro: -210 },
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
const Graphics8 = () => (
  <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
    <ComposedChart
      width={500}
      height={400}
      data={dadosFinanceiros}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="ano" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="despesaTotal"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Bar dataKey="rendaFamiliar" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="despesaHabitacao" stroke="#ff7300" />
      <Scatter dataKey="despesaAlimentacao" fill="red" />
    </ComposedChart>
  </ResponsiveContainer>
);
const Graphics9 = () => (
  <div style={{ width: '100%' }}>
    <h4>Temperatura</h4>

    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={200}
        data={temperatureData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Guaratingueta"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="Taubate"
          stroke="#e99903"
          fill="#e99903"
        />
        <Line type="monotone" dataKey="SJC" stroke="#03e916" fill="#03e916" />
      </LineChart>
    </ResponsiveContainer>
    <p>Umidade</p>

    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={200}
        data={temperatureData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="GuaratinguetaHumidity"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="TaubateHumidity"
          stroke="#e99903"
          fill="#e99903"
        />
        <Line
          type="monotone"
          dataKey="SJCHumidity"
          stroke="#03e916"
          fill="#03e916"
        />
        <Brush />
      </LineChart>
    </ResponsiveContainer>
    <p>Utilize a barra para ajustar o zoom do gráfico</p>
    <p>Velocidade do vento</p>
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
        data={temperatureData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="SJCWindSpeed"
          stroke="#03e916"
          fill="#03e916"
        />
        <Area
          type="monotone"
          dataKey="GuaratinguetaWindSpeed"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="TaubateWindSpeed"
          stroke="#e99903"
          fill="#e99903"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
const Graphics10 = () => (
  <div style={{ width: '100%' }}>
    <h4>Produtos</h4>

    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={products}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="produto" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="produto" height={30} stroke="#8884d8" />
        <Bar dataKey="vendas" fill="#8884d8" />
        <Bar dataKey="lucro" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export {
  Graphics1,
  Graphics2,
  Graphics3,
  Graphics4,
  Graphics5,
  Graphics6,
  Graphics7,
  Graphics8,
  Graphics9,
  Graphics10,
};
