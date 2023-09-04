import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

type HeatmapProps = {
  width: number;
  height: number;
  data: { wingSize: string; windSpeed: string; value: number }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  // bounds = area inside the axis
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // groups
  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.windSpeed))], [data]);
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.wingSize))], [data]);

  // x and y scales
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01);
  }, [data, height]);

  // Calculate the min and max values from your data
  const [min, max] = d3.extent(data.map((d) => d.value));

  if (!min || !max) {
    return null;
  }

  // DDE5E7
  // D4674C
  // 67727E


  // Create a custom color scale function
  const idealColor = '#67727E'
  const fringeColor = '#D4674C'
  const remainingColor = '#DDE5E7'
  function customColorScale(value) {
    if (value >= 0.9 && value <= 1.5) {
      return idealColor;
    } else if (value >= 0.8 && value < 0.9) {
      return fringeColor;
    } else if (value > 1.5 && value <= 2) {
      return fringeColor;
    } else {
      return remainingColor;
    }
  }

  // Create a color scale with the new domain based on min and max values
  // const colorScale = d3
  //   .scaleSequential()
  //   .interpolator(d3.interpolateInferno)
  //   .domain([min, max]);

  // Build the rectangles
  const allRects = data.map((d, i) => {
    const fillColor = customColorScale(d.value);
    return (
      <rect
        key={i}
        r={4}
        x={xScale(d.wingSize)}
        y={yScale(d.windSpeed)}
        width={xScale.bandwidth()}
        height={yScale.bandwidth()}
        opacity={1}
        fill={fillColor}
        rx={5}
        stroke={"white"}
      />
    );
  });

  const xLabels = allXGroups.map((name, i) => {
    const xPos = xScale(name) ?? 0;
    return (
      <text
        key={i}
        x={xPos + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
  });

  const yLabels = allYGroups.map((name, i) => {
    const yPos = yScale(name) ?? 0;
    return (
      <text
        key={i}
        x={-5}
        y={yPos + yScale.bandwidth() / 2}
        textAnchor="end"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allRects}
          {xLabels}
          {yLabels}
        </g>
      </svg>
    </div>
  );
};
