import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function Chart() {
    const data = [
        { year: "2017", price: 32},
        { year: "2018", price: 64},
        { year: "2019", price: 21},
        { year: "2020", price: 43},
        { year: "2021", price: 28},
      ]
    
      return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
            <LineChart 
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: -35,
                bottom: 0,
              }}
            >
              <XAxis dataKey="year" />
              <YAxis />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
            </ResponsiveContainer>
        </div>
      )
}
