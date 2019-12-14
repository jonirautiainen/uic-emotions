import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui'

import { Stack, Animation } from '@devexpress/dx-react-chart'

import styles from './Summary.module.scss'

const emoji = require('emoji-dictionary')

export const chartData = [
  {
    emoji: emoji.getUnicode('smile'),
    amount: 10
  },
  {
    emoji: emoji.getUnicode('+1'),
    amount: 6
  },
  {
    emoji: emoji.getUnicode('worried'),
    amount: 5
  },
  {
    emoji: emoji.getUnicode('sleeping'),
    amount: 4
  }
]

const Summary = () => (
  <div className={styles['container']}>
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Summary</h1>

      <Card>
        <p>
          Reporting streak: 11
          <br />
          Keep up the good work!
          <br />
          <br />
          <br />
        </p>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Amount"
            valueField="amount"
            argumentField="emoji"
            color="#ffd700"
          />
          <Animation />
          <Title text="Most used emojis during the past two weeks" />
          <Stack />
        </Chart>
        <p>
          You have reported mostly positive values. Glad to see you are doing
          well!
        </p>
      </Card>
    </Grid>
  </div>
)

export default Summary
