<template>
  <div>
    <div class="bg-gray-800 overflow-hidden sm:rounded-md">
      <div class="flex bg-blue-800 mx-3 my-5 sm:rounded-lg">
        <div class="bg-gray-900 mr-3 my-3 px-4 py-5 rounded-lg w-1/4">
          <chart-line
            y-axis-label-formatter="{value}"
            title="ECharts entry example"
            series-name1="Sales"
          />
        </div>
        <div class="bg-gray-900 my-3 px-4 py-5 sm:p-6 rounded-lg w-1/4">
          <chart-bar
            y-axis-label-formatter="{value}"
            title="ECharts entry example"
            series-name1="Sales"
          />
        </div>
        <div class="bg-gray-900 ml-3 my-3 px-4 py-5 sm:p-6 rounded-lg w-1/4">
          <chart-custom-pie
            y-axis-label-formatter="{value}"
            title="ECharts entry example"
            series-name1="Custom Pie"
          />
        </div>
      </div>
      <div class="flex bg-red-800 mx-3 my-5 sm:rounded-lg">
        <div class="bg-gray-900 my-3 px-4 py-5 sm:p-6 rounded-lg w-full">
          <chart-area
            y-axis-label-formatter="{value}"
            title="ECharts entry example"
            series-name1="Area Chart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ChartLine from '~/components/ChartLine'
import ChartBar from '~/components/ChartBar'
import ChartArea from '~/components/ChartArea'
import ChartCustomPie from '~/components/ChartCustomPie'

export default {
  components: {
    ChartLine,
    ChartBar,
    ChartArea,
    ChartCustomPie
  }
}
</script>

<style>

</style>
