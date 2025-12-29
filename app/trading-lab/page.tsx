"use client";

import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,} from "recharts";


export default function Home(){


const data = [
  { name: "Mon", value: 100000 },
  { name: "Tue", value: 101200 },
  { name: "Wed", value: 100800 },
  { name: "Thu", value: 102400 },
  { name: "Fri", value: 105560 },
];





  return(

      
  <div className="bg-gray-700 h-400 py-8">
    <div className="text-center">
      {/* Title */}
      <h1 className="text-white text-2xl" style={{ fontFamily: "Ethnocentric, sans-serif" }}>Welcome To The Trading Lab</h1>

      {/* Account Specifications */}
      <div className="py-8">
        <h1 className="text-white"style={{ fontFamily: "Ethnocentric, sans-serif" }}>Account User: Cecil Silva</h1>
        <h2 className="text-white"style={{ fontFamily: "Ethnocentric, sans-serif" }}>Platform: Alpaca Trading</h2>
        <h3 className="text-white"style={{ fontFamily: "Ethnocentric, sans-serif" }}>Account Type: Paper</h3>
      </div>

      {/* Division */}
      <div className="flex gap-6 px-8">

        {/* LEFT SIDE */}
        <div className="w-1/2 flex gap-6">
          {/* Left Box in the left side */}
          <div className="w-1/2">
            <div className=" h-80 bg-gray-800 rounded-xl p-6 text-white border-4 border-purple-400">
              <h2 className="font-bold text-xl mb-4">Stocks Owned</h2>

              {/* Stocks Box */}
              <ul className="h-50 space-y-4 overflow-y-auto">
                <li>AAPL — 10 shares — Avg Price: $34.5</li>
                <li>TSLA — 5 shares — Avg Price: $54.5</li>
                <li>NVDA — 2 shares — Avg Price: $27</li>
                <li>NVDA — 2 shares — Avg Price: $38</li>
                <li>NVDA — 2 shares — Avg Price: $14.9</li>
                <li>NVDA — 2 shares — Avg Price: $34.5</li>
                <li>NVDA — 2 shares — Avg Price: $34.5</li>
                <li>NVDA — 2 shares — Avg Price: $34.5</li>
                <li>NVDA — 2 shares — Avg Price: $34.5</li>
              </ul>
            </div>
          </div>


            {/* MIDDLE BOXES*/}
          <div className="w-1/2">

         
              <div className="h-80 bg-gray-800 rounded-xl p-6 text-white border-4 border-purple-400">
              <h2 className="text-xl mb-4 font-bold">Account Info</h2>
              {/* Account Info*/}
              <ul className="space-y-2 text-xl">
                <li>Total Account Worth: $105,560</li>
                <li>Money In Stocks: $100,000</li>
                <li>Money Not In Use: $5,560</li>
              </ul>

            </div>
          </div>
        </div>


        {/* RIGHT BOXES*/}
        <div className="w-1/2 bg-gray-800 h-150 rounded-xl p-6 text-white border-4 border-purple-700">
        <h2 className="text-xl mb-4 font-bold">Current Loaded Portfolio</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#a855f7"
            strokeWidth={3}
            dot={false}/>
          </LineChart>
        </ResponsiveContainer>
</div>
        
        
        
        </div>

      </div>

    </div>
    
  

  )}
    