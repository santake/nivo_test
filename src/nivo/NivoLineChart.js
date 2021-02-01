import React, {useState} from 'react';
import {ResponsiveLine} from "@nivo/line";

import {makeStyles, Grid, Select, MenuItem} from "@material-ui/core";


const useStyes = makeStyles({
  chartArea: {
    height: '600px',
  }
});

export const NivoLineChart = ({data}) => {
  const classes = useStyes();

  const [curveType, setCurveType] = useState('natural');

  const handleCurveType = (ev) => {
    setCurveType(ev.target.value);
  };

  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          <Select value={curveType}
                  onChange={handleCurveType}>
            <MenuItem value={'natural'}>Natural</MenuItem>
            <MenuItem value={'linear'}>Linear</MenuItem>
            <MenuItem value={'step'}>Step</MenuItem>
            <MenuItem value={'cardinal'}>Cardinal</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <div className={classes.chartArea}>
        <ResponsiveLine
          data={data}
          colors={{scheme:'category10'}}
          curve={curveType}
          margin={{ top:50, right:110, bottom:50, left:60 }}
          xScale={{type: 'point'}}
          yScale={{type: 'linear', min:9900, max:'auto'}}
          yFormat={'>-.2f'}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5, tickPadding: 5, tickRotation: 0,
            legend: '2020年',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5, tickPadding: 5, tickRotation: 0,
            legend:'日経平均',
            legendOffset: -50,
            legendPosition: 'middle'
          }}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{from: 'serieColor'}}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction:'column',
              justify: false,
              translateX: 100, translateY: 0,
              itemSpacing:0, itemDirection:'left-to-right',
              itemWidth: 80, itemHeight: 20, itemOpacity: 0.75,
              symbolSize: 12, symbolShape: 'circle',
              symbolBorderColor: 'rgba(0,0,0,0.5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0,0,0,0.13)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </>
  );
}