import React, {useState, useEffect} from 'react';
import {Grid, Card, CardContent, CardHeader} from "@material-ui/core";

import {NivoBarChart} from './nivo/NivoBarChart';
import {NivoLineChart} from "./nivo/NivoLineChart";
import {NivoPieChart} from './nivo/NivoPieChart';
import {obtainData} from "./nivo/DataProvider";


function App() {
  const [barChartData, setBarChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    obtainData("line").then(data => setLineChartData(data));
    obtainData("bar").then(data => setBarChartData(data));
    obtainData('pie').then(data => setPieChartData(data));
  });


  return (
    <Grid container={true} spacing={2}>
      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'棒グラフ'}/>
          <CardContent>
            <NivoBarChart data={barChartData}/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'線グラフ'}/>
          <CardContent>
            <NivoLineChart data={lineChartData}/>
          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'円グラフ'}/>
          <CardContent>
            <NivoPieChart data={pieChartData}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
