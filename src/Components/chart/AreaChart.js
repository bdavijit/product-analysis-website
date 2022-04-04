import React from 'react';
import {  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartCom = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 50000,
            "revenue": 5000
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 10000,
            "revenue": 2000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 50000,
            "revenue": 50000
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 20000,
            "revenue": 50000
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 40000,
            "revenue": 60000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 30000,
            "revenue": 70000
        }
    ];
    return (

<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#BF3312" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#BF3312" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorA)" />
  <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorB)" />
  <Area type="monotone" dataKey="revenue" stroke="#BF3312" fillOpacity={1} fill="url(#colorC)" />
</AreaChart>
 
    );
};

export default AreaChartCom;