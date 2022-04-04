import React from "react";
import AreaChartCom from "../chart/AreaChart";
import BarChartCom from "../chart/BarChart";
import LineChartCom from "../chart/LineChart";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="CartBox">
    <h1 style={{ color: "#2827CC" }}>Investment vs Revenue</h1>
      <LineChartCom />
      <h1 style={{ color: "#2827CC" }}>Sell vs Revenue</h1>
      <BarChartCom />
      <h1 style={{ color: "#2827CC" }}>Sell vs Revenue vs Investment</h1>
      <AreaChartCom />
    </div>
  );
};

export default Dashboard;
