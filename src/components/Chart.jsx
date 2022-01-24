import Paper from "@material-ui/core/Paper";
import React from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];



const ExampleChart = () => {
    return (
        <div>
            <Paper variant="outlined">
            <Chart data={data}>
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries valueField="value" argumentField="argument" />
            </Chart>
          </Paper>
        </div>
    );
}

export default ExampleChart;
