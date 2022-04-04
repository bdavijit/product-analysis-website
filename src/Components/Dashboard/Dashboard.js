import React from "react";
import AreaChartCom from "../chart/AreaChart";
import BarChartCom from "../chart/BarChart";
import LineChartCom from "../chart/LineChart";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="CartBox">
      <LineChartCom />
      <BarChartCom />
      <AreaChartCom />
    </div>
  );
};

export default Dashboard;
