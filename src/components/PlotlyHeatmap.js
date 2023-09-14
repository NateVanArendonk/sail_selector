import React from "react";
import Plot from 'react-plotly.js';

export default function PlotlyHeatmap(props) {
    const plotWidth = props.width
    const plotHeight = props.height
    const data = props.data
    const xVals = props.data.wingSize
    const yVals = props.data.windSpeed
    const zVals = props.data.values
    
    // Create a custom color scale function
    const idealColor = '#3B71CA';
    const fringeColor = '#54B4D3';
    const remainingColor = '#DDE5E7';

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

    const coloredData = zVals.map(row => row.map(value => customColorScale(value)));


    // Define your custom color scale using Plotly-compatible stops
    const customColorScaleStops = [
        [0, remainingColor],
        [0.8, fringeColor],
        [0.9, idealColor],
        [1, idealColor],
        [1.5, idealColor],
        [2, fringeColor],
    ];


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
