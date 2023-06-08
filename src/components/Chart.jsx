import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';
import TimeSpanSelector from './TimeSpanSelector';

export default function Chart() {
  const now = (new Date().getTime()) / 1000;
  const { prices } = useSelector((store) => store.stockHistory);
  const [xRange, setXRange] = useState([(now - 7766000), now]);

  const changeRange = (timeSpan) => {
    setXRange([(now - timeSpan), now]);
  };

  return (
    <>
      <div style={{ width: '100%', height: '300px' }}>
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
              type="number"
              scale="time"
              interval={270}
              allowDataOverflow
              domain={xRange}
              tickFormatter={(unixTime) => new Date(unixTime * 1000).getFullYear()}
              fontSize="12px"
            />
            <YAxis fontSize="12px" />
            <Area type="monotone" dataKey="price" stroke="#68A7AD" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <TimeSpanSelector selectTime={changeRange} />
    </>
  );
}
