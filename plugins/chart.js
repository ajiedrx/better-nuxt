// import { Doughnut } from 'vue-chartjs'
// // import the component - chart you need

// export default {
//   extends: Doughnut,
//   data() {
//     return {
//       chartlabels: ['Productive', 'Neutral', 'Unproductive'],
//       chartdatas: [],
//       loaded: false
//     }
//   },
//   beforeMount() {
//     this.$axios
//       .post('daily-tracking-report/overal-per-user', {
//         date: '2019-11-27'
//       })
//       .then((response) => {
//         // console.log(response.data.data.value)
//         this.chartdatas = response.data.data.value
//         console.log(this.chartdatas)
//         this.loaded = true
//         // console.log(this.datasets.data)
//         // this.datasets.data[0] = response.data.data.value.productive_value
//         // this.datasets.data[1] = response.data.data.value.netral_value
//         // this.datasets.data[2] = response.data.data.value.not_productive_value
//         // this.datasets.data = response.data.data.value
//         // console.log(this.datasets.data)
//         // this.datasets.data = response.data.value
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   },
//   mounted() {
//     if (this.loaded) {
//       this.renderChart({
//         labels: [this.chartlabels[0], this.chartlabels[1], this.chartlabels[2]],
//         datasets: [
//           {
//             label: 'Productivity Chart',
//             backgroundColor: ['#3c8dbc', '#000000', '#111111'],
//             data: [this.chartdatas[0], this.chartdatas[1], this.chartdatas[2]]
//           }
//         ]
//       })
//     }
//   }
// }
import Vue from 'vue'

import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)
