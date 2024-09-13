import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { blueGrey, green } from "@mui/material/colors";

// Data for the charts
const barLineData = [
  { name: "Mon", ABS: 6, PRS: 494, amt: 500 },
  { name: "Tue", ABS: 0, PRS: 500, amt: 500 },
  { name: "Wed", ABS: 1, PRS: 499, amt: 500 },
  { name: "Thurs", ABS: 10, PRS: 490, amt: 500 },
  { name: "Fri", ABS: 2, PRS: 498, amt: 500 },
];
// Data and configuration for PieChart
const pieData = [
  { name: "OnTime", value: 50 },
  { name: "Present", value: 50 },
  { name: "Absent", value: 90 },
  { name: "Late", value: 20 },
];

const COLORS = ["Green", "Blue", "Red", "black"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderLegend = () => {
  return (
    <div
      className="custom-legend"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      {pieData.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: COLORS[index % COLORS.length],
              marginRight: "10px",
            }}
          ></div>
          <span style={{ fontSize: "16px" }}>{entry.name}</span>
        </div>
      ))}
    </div>
  );
};

// Main Home component
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Employees</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>500</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Present Employees</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>498</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>On-Time Employees</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>410</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Late Employees</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>88</h1>
        </div>
      </div>

      <div className="charts">
        {/* BarChart */}
        <div
          style={{
            width: "100%",
            maxHeight: 300,
            position: "relative",
          }}
        >
          <div className="date-input-container" style={{ color: "black" }}>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <h1 id="h1">Weekly Employee Attendance status</h1>
          <ResponsiveContainer width="100%" height={250} style={{ zIndex: 0 }}>
            <BarChart
              data={barLineData}
              margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="PRS" fill="green" />
              <Bar dataKey="ABS" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PieChart */}
        <div
          style={{
            width: "100%",
            height: 300,
            borderLeft: "1px solid black",
            color: "black",
            position: "relative",
          }}
        ><h1 id="h1" style={{ textAlign: "left", margin:"15px"}}>
            Daily Employee Attendance Status
          </h1>
          {renderLegend()} {/* Render the custom legend above the chart */}
        
          <ResponsiveContainer width="60%" height="86%">
        
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel} // This adds custom labels
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
              >
               
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8989334333046!2d77.29223145!3d19.112089200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29f0b2e43199%3A0xe11b84ac3144b2b4!2sSGGS%2C%20Vishnupuri%2C%20Nanded%2C%20Maharashtra%20431606!5e0!3m2!1sen!2sin!4v1726208416808!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Home;
