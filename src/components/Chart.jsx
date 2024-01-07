import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./style/Chart.css";

const Chart = () => {
  const data = [
    {
      name: "20",
      employer: 1,
      employee: 2,
      interest: 3,
    },
    {
      name: "",
      employer: 4,
      employee: 5,
      interest: 6,
    },
    {
      name: "25",
      employer: 6,
      employee: 7,
      interest: 8,
    },
    {
      name: "",
      employer: 9,
      employee: 10,
      interest: 11,
    },
    {
      name: "30",
      employer: 12,
      employee: 13,
      interest: 14,
    },
    {
      name: "",
      employer: 15,
      employee: 16,
      interest: 17,
    },
    {
      name: "35",
      employer: 18,
      employee: 19,
      interest: 20,
    },
    {
      name: "",
      employer: 21,
      employee: 22,
      interest: 23,
    },
    {
      name: "40",
      employer: 24,
      employee: 25,
      interest: 26,
    },
    {
      name: "",
      employer: 27,
      employee: 28,
      interest: 29,
    },
    {
      name: "45",
      employer: 30,
      employee: 31,
      interest: 32,
    },
    {
      name: "",
      employer: 33,
      employee: 34,
      interest: 35,
    },
    {
      name: "50",
      employer: 36,
      employee: 37,
      interest: 38,
    },
    {
      name: "",
      employer: 39,
      employee: 40,
      interest: 41,
    },
    {
      name: "60",
      employer: 42,
      employee: 43,
      interest: 44,
    },
    {
      name: "",
      employer: 45,
      employee: 46,
      interest: 47,
    },
    {
      name: "65",
      employer: 48,
      employee: 49,
      interest: 50,
    },
  ];
  return (
    <div className="chart_main_container mt-4">
      <br />
      <h3>Contributions Overtime</h3>
      <div className=" d-flex justify-content-between">
        <div className="chart_data_details">
          <span></span>
          <p>
            Employer:<span> K 73500</span>
          </p>
        </div>
        <div className="chart_data_details">
          <span className="em_sp"></span>
          <p>
            Employee:<span> K 52500</span>
          </p>
        </div>
        <div className="chart_data_details">
          <span className="ti_sp"></span>
          <p>
            Total Interest:<span> K 244,313</span>
          </p>
        </div>
      </div>
      <BarChart
        width={520}
        height={170}
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey="employer" stackId="a" fill="#0800A3" />
        <Bar dataKey="employee" stackId="a" fill="#4935FF" />
        <Bar dataKey="interest" stackId="a" fill="#85AFFF" />
      </BarChart>
    </div>
  );
};

export default Chart;
