import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataBar = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 5000 },
  { name: "Apr", uv: 4000 },
  { name: "May", uv: 6000 },
];

const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#84cc16", "#65a30d", "#4d7c0f", "#22c55e"]; // lime and green tones

export default function ChartsComponent() {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-linear-to-r from-lime-400 to-green-500 rounded-2xl shadow-xl">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Monthly Data
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataBar}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#84cc16" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataPie}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#84cc16"
              label
            >
              {dataPie.map((_, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
