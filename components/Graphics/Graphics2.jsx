import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,

  BarChart,
  Bar,
} from 'recharts';

const dataBirthRate = [
  { name: '2012', tax: 1704405 },
  { name: '2013', tax: 1708252 },
  { name: '2014', tax: 1745343 },
  { name: '2015', tax: 1880129 },
  { name: '2016', tax: 1736850 },
  { name: '2017', tax: 1723563 },
  { name: '2018', tax: 1747041 },
  { name: '2019', tax: 1720886 },
  { name: '2020', tax: 1583218 },
  { name: '2021', tax: 1588606 },
  { name: '2022', tax: 1530532 },
];
const Graphics2 = () => (
  <ResponsiveContainer width="100%" height="100%">
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
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="tax" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default Graphics2;

