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

export default Graphics1;
