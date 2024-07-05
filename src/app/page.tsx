'use client'

import { SetStateAction, useState } from "react";
import { Chart } from "./components/chart"

export default function Home() {
  const [symbol, setSymbol] = useState('IBM');

  const handleSymbolChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setSymbol(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8">
    <h1 className="text-2xl font-bold mb-4">Weekly Time Series for {symbol}</h1>

    <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        placeholder="Enter symbol"
        className="border border-gray-300 px-4 py-2 rounded-md mb-4 text-black"
    />

     <Chart symbol={symbol} />
    </div>
  );
}
