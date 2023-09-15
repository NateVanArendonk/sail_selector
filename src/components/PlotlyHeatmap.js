import React from "react";
import Plot from 'react-plotly.js';

export default function PlotlyHeatmap(props) {
    const plotWidth = props.width
    const plotHeight = props.height
    const xVals = props.data.wingSize
    const yVals = props.data.windSpeed
    const zVals = props.data.values

    return (
        <Plot
          data={[
            {
                z: zVals,
                x: xVals,
                y: yVals,
                type: 'heatmap',
                hoverongaps: false,
                showscale: false,
            }
          ]}
          layout={ {
            width: plotWidth,
            height: plotHeight,
            xaxis: {title: 'Wing Size [m]'},
            yaxis: {title: 'Wind Speed [mph]'},
        }}
        />
    )
}
