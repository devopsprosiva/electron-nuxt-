import Vue from 'vue'

// Vue.config.productionTip = false

import Echarts from 'vue-echarts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/line'
import 'echarts/theme/dark'
import 'echarts/theme/green'

Vue.component('echart', Echarts)
