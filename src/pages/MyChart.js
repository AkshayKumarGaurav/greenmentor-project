import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import "./Group.css";

export default function MyChart() {
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
    <div className="w100">
         <ComposedChart
          width={600}
          height={500}
        className="w100"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis
            dataKey="Month"
            scale="band"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis />
          <Tooltip />
          {/* {toggle? <Legend verticalAlign="top" height={50} />: null} */}
          <Bar dataKey="Emissions-2023" barSize={20} fill="#5470c6" />
          <Bar dataKey="Emissions-2022" barSize={20} fill="#91cc75" />
          <Line dataKey="E_R-2023" stroke="#ee6a6a" activeDot={{ r: 4 }} />
          <Line dataKey="E_R-2022" stroke="#facc63" activeDot={{ r: 4 }} />
        </ComposedChart>
    </div>
  )
}


