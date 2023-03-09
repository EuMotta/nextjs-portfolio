import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  Brush,
  Line,
  ComposedChart,
  Area,
  PieChart,
  Pie,
} from 'recharts';

const funcionariosRH = [
  {
    nome: 'Desenvolvimento de software',
    funcionarios: 19,
    fill: '#000080',
  },
  {
    nome: 'Suporte técnico',
    funcionarios: 11,
    fill: '#006400',
  },
  {
    nome: 'Segurança da informação',
    funcionarios: 14,
    fill: '#663399',
  },
  {
    nome: 'Desenvolvimento FrontEnd',
    funcionarios: 15,
    fill: '#8B4513',
  },
  {
    nome: 'Desenvolvimento BackEnd',
    funcionarios: 11,
    fill: '#A9A9A9',
  },
];

const rhData = [
  {
    mes: 'Janeiro',
    contratacoes: 10,
    desligamentos: 5,
    massa_salarial: 100000,
    lucro_mensal: 270000,
    despesa_mensal: 180000,
    treinamentos: 3,
    absenteismo: 2,
  },
  {
    mes: 'Fevereiro',
    contratacoes: 15,
    desligamentos: 8,
    massa_salarial: 110000,
    lucro_mensal: 240000,
    despesa_mensal: 160000,
    treinamentos: 4,
    absenteismo: 1,
  },
  {
    mes: 'Março',
    contratacoes: 20,
    desligamentos: 12,
    massa_salarial: 120000,
    lucro_mensal: 270000,
    despesa_mensal: 170000,
    treinamentos: 5,
    absenteismo: 3,
  },
  {
    mes: 'Abril',
    contratacoes: 18,
    desligamentos: 10,
    massa_salarial: 130000,
    lucro_mensal: 160000,
    despesa_mensal: 200000,
    treinamentos: 2,
    absenteismo: 2,
  },
  {
    mes: 'Maio',
    contratacoes: 12,
    desligamentos: 5,
    massa_salarial: 140000,
    lucro_mensal: 290000,
    despesa_mensal: 220000,
    treinamentos: 4,
    absenteismo: 1,
  },
  {
    mes: 'Junho',
    contratacoes: 15,
    desligamentos: 4,
    massa_salarial: 150000,
    lucro_mensal: 290000,
    despesa_mensal: 120000,
    treinamentos: 6,
    absenteismo: 1,
  },
  {
    mes: 'Julho',
    contratacoes: 17,
    desligamentos: 9,
    massa_salarial: 140000,
    lucro_mensal: 280000,
    despesa_mensal: 200000,
    treinamentos: 7,
    absenteismo: 3,
  },
  {
    mes: 'Agosto',
    contratacoes: 14,
    desligamentos: 5,
    massa_salarial: 130000,
    lucro_mensal: 290000,
    despesa_mensal: 220000,
    treinamentos: 4,
    absenteismo: 2,
  },
  {
    mes: 'Setembro',
    contratacoes: 13,
    desligamentos: 2,
    massa_salarial: 140000,
    lucro_mensal: 270000,
    despesa_mensal: 250000,
    treinamentos: 8,
    absenteismo: 2,
  },
  {
    mes: 'Outubro',
    contratacoes: 16,
    desligamentos: 5,
    massa_salarial: 150000,
    lucro_mensal: 280000,
    despesa_mensal: 120000,
    treinamentos: 4,
    absenteismo: 1,
  },
  {
    mes: 'Novembro',
    contratacoes: 15,
    desligamentos: 5,
    massa_salarial: 140000,
    lucro_mensal: 150000,
    despesa_mensal: 100000,
    treinamentos: 7,
    absenteismo: 2,
  },
  {
    mes: 'Dezembro',
    contratacoes: 19,
    desligamentos: 5,
    massa_salarial: 130000,
    lucro_mensal: 220000,
    despesa_mensal: 110000,
    treinamentos: 9,
    absenteismo: 3,
  },
];
const Dashboard1 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={rhData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="contratacoes" fill="#425fe0" className="text-[#425fe0]" />
      <Bar dataKey="desligamentos" fill="#e63e3e" />
      <Brush />
    </BarChart>
  </ResponsiveContainer>
);
const Dashboard2 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <ComposedChart
      width={500}
      height={400}
      data={rhData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="mes" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="despesa_mensal"
        barSize={20}
        fill="#cf6f38"
        className="text-[#3835e0]"
      />
      <Line type="monotone" dataKey="lucro_mensal" stroke="#3835e0" />
    </ComposedChart>
  </ResponsiveContainer>
);
// const Dashboard3 = () => (
//   <ResponsiveContainer width="100%" height={300}>
//     <ComposedChart
//       layout="vertical"
//       width={500}
//       height={400}
//       data={rhData}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20,
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis type="number" />
//       <YAxis dataKey="mes" type="category" scale="band" />
//       <Tooltip />
//       <Legend />
//       <Area dataKey="media" fill="#8884d8" stroke="#8884d8" />
//       <Bar dataKey="absenteismo" barSize={20} fill="#413ea0" />
//       <Line dataKey="treinamentos" stroke="#ff7300" />
//     </ComposedChart>
//   </ResponsiveContainer>
// );
// const Dashboard4 = () => (
//   <ResponsiveContainer width="100%" height={300}>
//     <BarChart
//       width={500}
//       height={300}
//       data={rhData}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="mes" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="massa_salarial" fill="#4e3edf" />
//       <Brush />
//     </BarChart>
//   </ResponsiveContainer>
// );
const Dashboard5 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={400} height={400}>
      {funcionariosRH.map((item) => (
        <Pie
          key={item.nome}
          dataKey="funcionarios"
          nameKey="nome"
          isAnimationActive={false}
          data={funcionariosRH}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      ))}
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);
export { Dashboard1, Dashboard2, Dashboard3, Dashboard4, Dashboard5 };
