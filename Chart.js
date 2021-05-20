import React from 'react';
import ChartBar from './ChartBar';
import './Char.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return ( <
        div className = "chart" > {
            props.dataPoints.map((datapoint) => ( <
                ChartBar key = { dataPoint.id }
                value = { dataPoint.Value }
                maxValue = { totalMaximum }
                label = { dataPoint.label }
                />
            ))
        } <
        /div>
    );
};

export default Chart;