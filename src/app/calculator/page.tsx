"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { evaluate, sqrt } from "mathjs";
import "../globals.css";
import { Layout } from "plotly.js";

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
  mode: "markers" | "lines";
  marker: { color: string; size?: number };
  name: string;
};

type AnnData = {
  x: number,
  y: number,
  text: string,
  clicktoshow: "onoff",
  showarrow: true,
  arrowhead: 2,
  ax: 0,
  ay: -30,
  font: {
    size: 12,
    color: string,
  },
  arrowcolor: "black",
  valign: "top" | "bottom" | "middle",
  bgcolor: "rgba(28,3,50,0.8)",
  bordercolor: "white",
  borderpad: 4,
  borderwidth: 1,
}

const getDiscriminant = (a: number, b: number, c: number) => {
  const result = b * b - 4 * a * c;
  return result;
}

const getSqrt = (a: number, b: number, c: number, d: number) => {
  const graphData: GraphData[] = [];
  const rootsData: AnnData[] = [];
  if (d > 0) {
    const x1 = (-b + (sqrt(d) as number)) / (2 * a);
    const x2 = (-b - (sqrt(d) as number)) / (2 * a);

    const d1: AnnData = {
      x: x1,
      y: 0,
      text: `(${x1.toFixed(2)}, ${0})`,
      clicktoshow: "onoff",
      showarrow: true,
      arrowhead: 2,
      ax: 0,
      ay: -30,
      font: {
        size: 12,
        color: "white",
      },
      valign: "bottom",
      arrowcolor: "black",
      bgcolor: "rgba(28,3,50,0.8)",
      bordercolor: "white",
      borderpad: 4,
      borderwidth: 1,
    };

    const d2: AnnData = {
      x: x2,
      y: 0,
      text: `(${x2.toFixed(2)}, ${0})`,
      clicktoshow: "onoff",
      showarrow: true,
      arrowhead: 2,
      ax: 0,
      ay: -30,
      font: {
        size: 12,
        color: "white",
      },
      valign: "bottom",
      arrowcolor: "black",
      bgcolor: "rgba(28,3,50,0.8)",
      bordercolor: "white",
      borderpad: 4,
      borderwidth: 1,
    };

    rootsData.push(d1, d2);
    graphData.push({
      x: [x1],
      y: [0],
      type: "scatter",
      mode: "markers",
      marker: { color: "yellow", size: 10 },
      name: "x1",
    },
      {
        x: [x2],
        y: [0],
        type: "scatter",
        mode: "markers",
        marker: { color: "blue", size: 10 },
        name: "x2",
      },
    );
  }

  return {
    graphData,
    rootsData,
  };
}

export default function Calculator() {
  const [coefficients, setCoefficients] = useState<{ a: number; b: number; c: number }>({
    a: 1,
    b: 1,
    c: 1,
  });

  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [layout, setLayout] = useState<Partial<Layout>>({
    title: "Grafik Fungsi Kuadrat",
    xaxis: { title: "x" },
    yaxis: { title: "f(x)" },
    legend: { orientation: "v" },
    boxmode: "overlay",
    modebar: {
      activecolor: "green",
      orientation: "v",
    },
  });

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

      const xVertex = -b / (2 * a);
      const yVertex = evaluate(`${a} * x^2 + ${b} * x + ${c}`, { x: xVertex });

      const annotations: AnnData[] = [];
      const data: GraphData[] = [
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          marker: { color: "purple" },
          name: "f(x)",
        },
        {
          x: [xVertex],
          y: [yVertex],
          type: "scatter",
          mode: "markers",
          marker: { color: "green", size: 15 },
          name: "Vertex",
        },
      ];

      const vertex: AnnData =
      {
        x: xVertex,
        y: yVertex,
        text: `(${xVertex.toFixed(2)}, ${yVertex.toFixed(2)})`,
        clicktoshow: "onoff",
        showarrow: true,
        arrowhead: 2,
        ax: 0,
        ay: -30,
        font: {
          size: 12,
          color: "white",
        },
        valign: "top",
        arrowcolor: "black",
        bgcolor: "rgba(28,3,50,0.8)",
        bordercolor: "white",
        borderpad: 4,
        borderwidth: 1,
      };

      annotations.push(vertex);
      const disc = getDiscriminant(a, b, c);
      const xRoots = getSqrt(a, b, c, disc);
      if (disc > 0) {
        annotations.push(...xRoots.rootsData);
        data.push(...xRoots.graphData);
      }

      setLayout({
        ...layout,
        annotations,
      });

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
                  layout={layout}
                  config={{
                    displaylogo: false,
                    showTips: true,
                    doubleClick: "autosize",
                    watermark: false,
                    scrollZoom: true,
                    toImageButtonOptions: {
                      format: "png",
                      filename: "quadratic_function_graph",
                      height: 600,
                      width: 600,
                    },
                    modeBarButtonsToRemove: ["select2d", "lasso2d"],
                  }}
                  className="w-80 sm:w-[500px] md:w-full rounded overflow-hidden"
                />
              </div>
              <div className="font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <MathJax dynamic>
                  {`$$ f(x) = ${coefficients.a === 1 ? "" : coefficients.a === -1 ? "-" : coefficients.a}x^2 ${coefficients.b >= 0 ? "+" : ""} ${coefficients.b === 1 ? "" : coefficients.b === -1 ? "-" : coefficients.b}x ${coefficients.c >= 0 ? "+" : ""} ${coefficients.c} $$`}
                </MathJax>
              </div>
              <div className="flex gap-2 bg-violet-700 bg-opacity-30 py-2 gap rounded">
                <label className="flex items-center">
                  <span className="mr-2">
                    <MathJax inline>{"$ a: $"}</MathJax>
                  </span>
                  <input
                    type="number"
                    name="a"
                    defaultValue={coefficients.a}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
                <label className="flex items-center">
                  <span className="mr-2">
                    <MathJax inline>{"$ b: $"}</MathJax>
                  </span>
                  <input
                    type="number"
                    name="b"
                    defaultValue={coefficients.b}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
                <label className="flex items-center">
                  <span className="mr-2">
                    <MathJax inline>{"$ c: $"}</MathJax>
                  </span>
                  <input
                    type="number"
                    name="c"
                    defaultValue={coefficients.c}
                    onChange={handleChange}
                    className="w-16 border p-1 rounded text-black"
                  />
                </label>
              </div>
              <button
                onClick={generateGraphData}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-3 py-2 rounded cursor-pointer z-10"
              >
                Buat Grafik
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
