import React from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

export default function Chart() {
  const { prices } = useSelector((store) => store.stockHistory);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={prices}
          margin={{
            top: 10,
            right: 5,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis 
            dataKey="time"
            scale="time"
            type="number"
            domain={['auto', 'auto']}
            tickFormatter={(unixTime) => new Date(unixTime * 1000).getFullYear()}
            fontSize="12px"
          />
          <YAxis fontSize="12px" />
          <Area type="monotone" dataKey="price" stroke="#68A7AD" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
