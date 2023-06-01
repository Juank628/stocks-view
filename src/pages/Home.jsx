import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'

export default function Home() {
  const data = [
    { year: "2017", price: 32},
    { year: "2018", price: 64},
    { year: "2019", price: 21},
    { year: "2020", price: 43},
    { year: "2021", price: 28},
  ]

  return (
    <div>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
    </div>
  )
}
