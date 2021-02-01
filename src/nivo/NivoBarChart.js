import React, {useEffect, useState} from 'react';
import {ResponsiveBar} from "@nivo/bar";
import {Switch, makeStyles, Grid} from "@material-ui/core";

const useStyles = makeStyles({
  chartArea: {
    height: '600px',
  }
});


export const NivoBarChart = ({data}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    groupModeStacked: true,
    chartLayoutVertical: true,
  });

  const [groupMode, setGroupMode] = useState(
    state.groupModeStacked ? 'stacked' : 'grouped'
  );
  const [chartLayout, setChartLayout] = useState(
    state.chartLayoutVertical ? 'vertical' : 'horizontal'
  )

  const handleGroupMode = (ev) => {
    setState({
      ...state,
      [ev.target.name]: ev.target.checked
    });
    setGroupMode(ev.target.checked ? 'stacked' : 'grouped');
  };
  const handleChartLayout = (ev) => {
    setState({
      ...state,
      [ev.target.name]: ev.target.checked
    });
    setChartLayout(ev.target.checked ? 'vertical' : 'horizontal');
  }

  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          <span>Group</span>
          <Switch checked={state.groupModeStacked}
                  onChange={handleGroupMode}
                  name={'groupModeStacked'}/>
          <span>Stack</span>
        </Grid>
        <Grid item>
          <span>水平</span>
          <Switch checked={state.chartLayoutVertical}
                  onChange={handleChartLayout}
                  name={'chartLayoutVertical'}/>
          <span>垂直</span>
        </Grid>
      </Grid>


      <div className={classes.chartArea}>
        <ResponsiveBar
          data={data}
          // indexBy={'month'} 'id' is the default
          keys={['肉', '魚', '野菜']}
          groupMode={groupMode}
          layout={chartLayout}

          margin={{top: 50, right: 130, bottom: 50, left: 60}}
          padding={0.2}
          colors={{scheme: 'paired'}}


          borderWidth={1}
          borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}

          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5, tickPadding: 5, tickRotation: 0,
            legend: '年月', legendPosition: 'middle', legendOffset: 42
          }}
          axisLeft={{
            tickSize: 5, tickPadding: 5, tickRotation: 0,
            legend: '消費量', legendPosition: 'middle', legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{from: 'color', modifiers: [['brighter', 1.6]]}}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: true,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 3,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.7,
              symbolSize: 20,
              effects: [{
                on: 'hover', style: {itemOpacity: 1}
              }]

            }
          ]}
        />
      </div>
    </>
  );
}