import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MyPieChart() {
    const data =  [
        {
            "Date": "6/1/23",
            "Month": "Jan",
            "Year": 2023,
            "Supplier": "Jio",
            "Emissions-2023": 2506,
            "Emissions-2022":2499,
            "Revenue": 220000,
            "E_R-2023": 1999.8,
            "E_R-2022":1899,
          },
        {
          "Date": "16/2/23",
          "Month": "Feb",
          "Year": 2023,
          "Supplier": "Adani",
          "Emissions-2023": 2205,
          "Emissions-2022":2399,
          "Revenue": 220000,
          "E_R-2023": 2199.8,
          "E_R-2022":2099,
        },
        {
          "Date": "17/3/23",
          "Month": "Mar",
          "Year": 2023,
          "Supplier": "Reliance",
          "Emissions-2023": 2251,
          "Emissions-2022":2399,
          "Revenue": 254815,
          "E_R-2023": 2213.2,
          "E_R-2022":2366,
        },
        {
          "Date": "6/4/23",
          "Month": "Apr",
          "Year": 2023,
          "Supplier": "Shaurya Drugs",
          "Emissions-2023": 4522,
          "Emissions-2022":4399,
          "Revenue": 879797,
          "E_R-2023": 4494.6,
          "E_R-2022":4399,
        },
        {
          "Date": "12/5/23",
          "Month": "May",
          "Year": 2023,
          "Supplier": "Orlife Healthcare",
          "Emissions-2023": 8522,
          "Emissions-2022":8399,
          "Revenue": 464464,
          "E_R-2023": 8554.5,
          "E_R-2022":8399,
        },
        {
            "Date": "2/6/23",
            "Month": "June",
            "Year": 2023,
            "Supplier": "life Healthcare",
            "Emissions-2023": 5672,
            "Emissions-2022":5799,
            "Revenue": 564464,
            "E_R-2023": 5694.5,
            "E_R-2022":5399,
          },
          {
            "Date": "1/7/23",
            "Month": "July",
            "Year": 2023,
            "Supplier": "Healthcare",
            "Emissions-2023": 6678,
            "Emissions-2022":6899,
            "Revenue": 490864,
            "E_R-2023": 6654.5,
            "E_R-2022":6599,
          },
        {
          "Date": "11/8/23",
          "Month": "Aug",
          "Year": 2023,
          "Supplier": "Rezicure Pharmaceuticals",
          "Emissions-2023": 1124,
          "Emissions-2022":1299,
          "Revenue": 548582,
          "E_R-2023": 1088.1,
          "E_R-2022":1199,
        },
        {
          "Date": "6/10/23",
          "Month": "Oct",
          "Year": 2023,
          "Supplier": "Steller Bio Labs",
          "Emissions-2023": 4524,
          "Emissions-2022":4399,
          "Revenue": 516513,
          "E_R-2023": 4414.2,
          "E_R-2022":4399,
        },
        {
          "Date": "8/9/23",
          "Month": "Sep",
          "Year": 2023,
          "Supplier": "Ruzette Organics",
          "Emissions-2023": 7858,
          "Emissions-2022":7999,
          "Revenue": 564651,
          "E_R-2023": 7781.9,
          "E_R-2022":7399,
        },
        {
          "Date": "10/11/23",
          "Month": "Nov",
          "Year": 2023,
          "Supplier": "Eskos Pharma",
          "Emissions-2023": 4524,
          "Emissions-2022":4399,
          "Revenue": 546561,
          "E_R-2023": 4420.8,
          "E_R-2022":4399,
        }
      ]
  return (
    <div className='bg-white w-2/5 m-4 rounded-xl shadow border border-gray-200'>
            <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="Emissions-2023"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
        {/* <Tooltip content={<CustomTooltip />}/> */}
      </PieChart>
     
      </div>
  )
}









