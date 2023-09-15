import React from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexHeatmap(props) {
    const xData = props.data.wingSize;
    const yData = props.data.windSpeed;
    const zData = props.data.values;

    function convertListValuesToString(list) {
        return list.map(String);
    }

    const idealColor = '#3B71CA';
    const fringeColor = '#54B4D3';
    const remainingColor = '#DDE5E7';

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
            xaxis: {
                categories: convertListValuesToString(xData), // Set x-axis labels here
                labels: {
                    style: {
                        fontSize: '12px', // You can customize label font size and other styles
                    },
                },
                title: {
                    text: 'Wing Size [m]', // Set x-axis label here
                    style: {
                        fontSize: '18px', // You can customize label font size and other styles
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Wind Speed [mph]', // Set y-axis label here
                    style: {
                        fontSize: '18px', // You can customize label font size and other styles
                    },
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
                                color: fringeColor, // Blue for values between 1.01 and 2
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
                custom: function({ seriesIndex, dataPointIndex, w }) {
                    // Customize the tooltip content based on your value ranges
                    const value = w.globals.series[seriesIndex][dataPointIndex];
                    if (value >= 0 && value < 0.8) {
                        return "Bad Winging Conditions";
                    } else if (value >= 0.8 && value < 0.9) {
                        return "Manageable Conditions";
                    } else if (value >= 0.9 && value < 1.5) {
                        return "Ideal Conditions";
                    } else if (value >= 1.5 && value < 2.0) {
                        return "Manageable Conditions";
                    } else {
                        return "Bad Winging Conditions";
                    }
                },
            },
            
        },
    };

    return (
        <div>
            <ReactApexChart
                options={heatmapOptions.options}
                series={heatmapOptions.series}
                type="heatmap"
                height={600}
                width={900}
            />
        </div>
    );
}
