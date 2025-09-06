import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

const Home = () => {
  // بيانات وهمية للتقارير مع أسماء الأدوية الحقيقية
  const totalImportedData = [
    { name: "باراسيتامول", quantity: 50 },
    { name: "أموكسيسيلين", quantity: 30 },
    { name: "إيبوبروفين", quantity: 20 },
    { name: "سيبروفلكس", quantity: 12 },
  ];

  const mostRequestData = [
    { name: "لورازيبام", quantity: 40 },
    { name: "أوميبرازول", quantity: 25 },
    { name: "أزيتروميسين", quantity: 15 },
    { name: "سيتريزين", quantity: 10 },
  ];

  const delegatesData = [
    { delegate: "أحمد علي", total: 80 },
    { delegate: "محمد حسن", total: 36 },
    { delegate: "سارة خالد", total: 184 },
    { delegate: "علي فهد", total: 62 },
  ];

  const totalSalesData = [
    { name: "باراسيتامول", sales: 1500 },
    { name: "أموكسيسيلين", sales: 1200 },
    { name: "إيبوبروفين", sales: 2000 },
    { name: "سيبروفلكس", sales: 900 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className=" grid grid-cols-2 gap-6 overflow-hidden">
      {/* Total Imported */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-center">إجمالي المستورد</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={totalImportedData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Most Requested */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-center">الأكثر طلبًا</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={mostRequestData}
              dataKey="quantity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {mostRequestData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Delegates */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-center">المندوبون</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={delegatesData}>
            <XAxis dataKey="delegate" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#FF8042" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Total Sales */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-center">إجمالي المبيعات</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={totalSalesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
