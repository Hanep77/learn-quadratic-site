"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { evaluate } from "mathjs";
import '../globals.css';

const MathJax = dynamic(() => import("better-react-mathjax").then(mod => mod.MathJax), {
  ssr: false,
  loading: () => <span>Loading Math...</span>,
});
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <div>Loading Graph...</div>,
});

type GraphData = {
  x: number[];
  y: number[];
  type: "scatter";
  mode: "lines";
  marker: { color: string };
  name: string;
};

export default function Calculator() {
  const [coefficients, setCoefficients] = useState<{ a: number; b: number; c: number }>({
    a: 1,
    b: 1,
    c: 1,
  });

  const [graphData, setGraphData] = useState<GraphData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCoefficients((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const generateGraphData = () => {
    try {
      const { a, b, c } = coefficients;

      const xValues = Array.from({ length: 201 }, (_, i) => -10 + i * 0.1);

      const yValues = xValues.map((x) =>
        evaluate(`${a} * x^2 + ${b} * x + ${c}`, { x }) as number
      );

      const data: GraphData[] = [
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          marker: { color: "blue" },
          name: "f(x)",
        },
      ];

      setGraphData(data);
    } catch (error) {
      console.error("Error generating graph data:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-[rgba(28,3,50,1)] pt-20 pb-4 min-h-screen max-w-screen">
        <div className="max-w-screen-lg m-auto flex flex-col gap-2 items-center">
          <div className="w-80 sm:w-[500px] md:w-full pb-4 md:p-4 bg-violet-700 bg-opacity-30 rounded">
            <div className="inputs flex flex-col items-center gap-4">
              <div className="rounded flex-grow">
                <Plot
                  data={graphData}
                  layout={{
                    title: "Quadratic Function Graph",
                    xaxis: { title: "x" },
                    yaxis: { title: "f(x)" },
                  }}
                  className="w-80 sm:w-[500px] md:w-full rounded overflow-hidden"
                />
              </div>
              <div className="font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <MathJax dynamic>
                  {`$$ f(x) = ${coefficients.a == 1 ? "" : coefficients.a == -1 ? "-" : coefficients.a}x^2 ${coefficients.b >= 0 ? "+" : ""} ${coefficients.b == 1 ? "" : coefficients.b == -1 ? "-" : coefficients.b}x ${coefficients.c >= 0 ? "+" : ""} ${coefficients.c} $$`}
                </MathJax>
              </div>
              <div className="flex gap-2 bg-violet-700 bg-opacity-30 py-2 gap rounded">
                <label className="flex items-center">
                  <span className="mr-2"><MathJax inline>{"$ a: $"}</MathJax></span>
                  <input
                    type="number"
                    name="a"
                    value={coefficients.a}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
                <label className="flex items-center">
                  <span className="mr-2"><MathJax inline>{"$ b: $"}</MathJax></span>
                  <input
                    type="number"
                    name="b"
                    value={coefficients.b}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
                <label className="flex items-center">
                  <span className="mr-2"><MathJax inline>{"$ c: $"}</MathJax></span>
                  <input
                    type="number"
                    name="c"
                    value={coefficients.c}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
              </div>
              <button
                onClick={generateGraphData}
                className="bg-green-500 text-white px-3 py-2 rounded cursor-pointer z-10"
              >
                Generate Graph
              </button>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </>
  );
}
