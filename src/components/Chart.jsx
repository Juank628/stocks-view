import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

export default function Chart() {
  const data = [
    { year: '2017', price: 32 },
    { year: '2018', price: 64 },
    { year: '2019', price: 21 },
    { year: '2020', price: 43 },
    { year: '2021', price: 28 },
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="year" fontSize="12px" />
          <YAxis fontSize="12px" />
          <Area type="monotone" dataKey="price" stroke="#68A7AD" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
