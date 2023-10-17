import React from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexHeatmap(props) {
    const xData = props.data.wingSize;
    const yData = props.data.windSpeed;
    const zData = props.advancedData ? props.data.valuesAdvanced : props.data.values;    

    function convertListValuesToString(list) {
        return list.map(String);
    }

    const idealColor = '#3B71CA';
    const fringeColor = '#54B4D3';
    const remainingColor = '#DDE5E7';
    const overpoweredColor = '#E4A11B';

    const result = zData.map((list, index) => ({
        name: `${yData[index]}`,
        data: list,
        yData: yData[index],
    }));

    const heatmapOptions = {    
        series: result,
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
                position: 'top',
            },
            xaxis: {
                categories: convertListValuesToString(xData), // Set x-axis labels here
                labels: {
                    style: {
                        fontSize: '12px', // You can customize label font size and other styles
                        fontFamily: 'sans-serif',
                    },
                },
                title: {
                    text: 'Wing Size (m)', // Set y-axis label here
                    style: {
                        fontSize: '18px', // You can customize label font size and other styles
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'sans-serif',
                    },
                },
                title: {
                    text: 'Wind Speed (mph)', // Set y-axis label here
                    style: {
                        fontSize: '18px', // You can customize label font size and other styles
                    },
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    // color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },
            },
            plotOptions: {
                heatmap: {
                    colorScale: {
                        ranges: [
                            {
                                from: 0,
                                to: 0.8,
                                color: remainingColor, // Red for values less than or equal to 0
                            },
                            {
                                from: 0.8,
                                to: 0.9,
                                color: fringeColor, // Green for values between 0.01 and 1
                            },
                            {
                                from: 0.9,
                                to: 1.5,
                                color: idealColor, // Blue for values between 1.01 and 2
                            },
                            {
                                from: 1.5,
                                to: 2.0,
                                color: overpoweredColor, // Blue for values between 1.01 and 2
                            },
                            {
                                from: 2.0,
                                to: 1000000000,
                                color: remainingColor, // Blue for values between 1.01 and 2
                            },
                        ],
                    },
                },
            },
            tooltip: {
                enabled: true,
                shared: true,
                followCursor: true,
                intersect: false,
                inverseOrder: false,
                theme: 'light',
                style: {
                    fontSize: '12px',
                    fontFamily: "sans-serif",
                    background: 'white',
                    border: '1px solid #ccc',
                    padding: '2px',
                },
                fillSeriesColor: true,
                onDatasetHover: {
                    highlightDataSeries: true,
                },
                x: {
                    show: true,
                    formatter: function(val) {
                        return `Wing Size: ${val} meter`;
                    },
                },
                y: {
                    formatter: function(val, { seriesIndex, dataPointIndex, w }) {
                        const seriesName = w.config.series[seriesIndex].name;
                        let toolTipText = ''
                        if (val >= 0 && val < 0.8) {
                            toolTipText = "Bad Winging Conditions";
                        } else if (val >= 0.8 && val < 0.9) {
                            toolTipText = "Underpowered Winging Conditions";
                        } else if (val >= 0.9 && val < 1.5) {
                            toolTipText = "Ideal Winging Conditions";
                        } else if (val >= 1.5 && val < 2.0) {
                            toolTipText = "Overpowered Winging Conditions";
                        } else {
                            toolTipText = "Bad Winging Conditions";
                        }
                        return `${seriesName} mph: ${toolTipText}`;
                    },
                    title: {
                        formatter: () => '', // Set the y-axis title to "Wind Speed"
                    },
                },
                marker: {
                    show: false,
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 40,
                    offsetY: 0,
                },
                customLegendItems: {
                        
                }
            },
        },
    };
    return (
        <div>
            <ReactApexChart
                options={heatmapOptions.options}
                series={heatmapOptions.series}
                type="heatmap"
                height={props.windowHeight*0.9}
                width={props.windowWidth*0.9}
                />
        </div>
    );
}


// height={700}
// width={1000}
