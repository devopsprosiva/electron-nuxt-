<template>
  <div class="chart-bar">
    <echart :options="barChart" />
  </div>
</template>

<script>
export default {
  props: {
    seriesName1: String,
    seriesName2: String,
    title: String,
    yAxisMin: Number,
    yAxisMax: Number,
    yAxisLabelFormatter: String
  },
  data () {
    return {
      barChart: {
        legend: {
          type: 'plain'
        },
        title: {
          text: this.Title
        },
        grid: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: 'shadowBlur',
            opacity: '1'
          }
        },
        xAxis: {
          data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.1
            }
          }
        },
        yAxis: {
          min: 0,
          max: 100,
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.1
            }
          }
        },
        series: [
          {
            name: this.seriesName1,
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          }
        ]
      }
    }
  }
}
</script>
