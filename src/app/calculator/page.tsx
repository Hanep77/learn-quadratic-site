"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { evaluate } from "mathjs";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { mathJaxConfig } from "../learn/layout";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

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
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex flex-row justify-between bg-[rgba(28,3,50,1)] pt-20 px-12 min-h-screen max-w-screen">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Quadratic Function Calculator</h2>
            <div className="inputs mb-4 flex flex-col items-start space-y-4">
              <div className="ml-7 mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <MathJax inline>
                  {`$ f(x) = ${coefficients.a == 1 ? "" : coefficients.a == -1? "-" : coefficients.a }x^2 ${coefficients.b >= 0 ? "+" : ""} ${coefficients.b == 1 ? "": coefficients.b == -1 ? "-" : coefficients.b}x ${coefficients.c >= 0 ? "+" : ""} ${coefficients.c} $`}
                </MathJax>
              </div>
              <label className="flex items-center">
                <span className="mr-2"><MathJax inline>{"$ a: $"}</MathJax></span>
                <input
                  type="number"
                  name="a"
                  defaultValue={coefficients.a}
                  onChange={handleChange}
                  className="border p-1 rounded text-black"
                />
              </label>
              <label className="flex items-center">
                <span className="mr-2"><MathJax inline>{"$ b: $"}</MathJax></span>
                <input
                  type="number"
                  name="b"
                  defaultValue={coefficients.b}
                  onChange={handleChange}
                  className="border p-1 rounded text-black"
                />
              </label>
              <label className="flex items-center">
                <span className="mr-2"><MathJax inline>{"$ c: $"}</MathJax></span>
                <input
                  type="number"
                  name="c"
                  defaultValue={coefficients.c}
                  onChange={handleChange}
                  className="border p-1 rounded text-black"
                />
              </label>
              <button
                onClick={generateGraphData}
                className="ml-6 bg-green-500 text-white px-3 py-1 rounded cursor-pointer z-10"
              >
                Generate Graph
              </button>
            </div>
          </div>

          <div>
            <Plot
              data={graphData}
              layout={{
                title: "Quadratic Function Graph",
                xaxis: { title: "x" },
                yaxis: { title: "f(x)" },
              }}
              style={{ width: "100%", height: "85vh" }}
            />
          </div>
        </div>
      </MathJaxContext>
    </>
  );
}