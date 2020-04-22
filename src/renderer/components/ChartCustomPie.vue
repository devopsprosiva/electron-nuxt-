<template>
  <div class="chart-custom-pie">
    <echart :options="customPieChart" v-bind:autoresize="true" />
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
      customPieChart: {
        legend: {
          type: 'plain'
        },
        title: {
          text: this.Title,
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        grid: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
          axisPointer: {
            type: 'cross',
            crossStyle: 'shadowBlur',
            opacity: '1'
          }
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
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
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' },
              { value: 400, name: '搜索引擎' }
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay (idx) {
              return Math.random() * 200
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
