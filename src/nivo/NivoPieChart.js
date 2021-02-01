import React  from 'react';
import {Grid, makeStyles} from "@material-ui/core";

import {ResponsivePie} from "@nivo/pie";

const useStyles = makeStyles({
  chartArea: {
    height: '600px',
  }
});


export const NivoPieChart = ({data}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          {/*something */}
        </Grid>
      </Grid>

      <div className={classes.chartArea}>
        <ResponsivePie
          data={data}
          margin={{top:40, right:100, bottom:80, left:100}}
          innerRadius={0.2}
          padAngle={1.5}
          cornerRadius={0}
          colors={{scheme: 'pastel1'}}
          borderWidth={2}
          borderColor={{from:'color', modifiers: [['darker', 0.2]] }}
          radialLabel={ data => `${data.label} (${data.value})` }
          radialLabelsSkipAngle={10}
          radialLabelsTextColor={'#333333'}
          radialLabelsLinkColor={{from: 'color'}}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor={'#333333'}
          legends={[
            {
              anchor:'bottom',
              direction:'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor:'#000000',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#ff0000'
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