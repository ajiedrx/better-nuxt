//
<script>
// import { Doughnut, mixins } from 'vue-chartjs'
// export default {
//   extends: Doughnut,
//   mixins: [mixins.reactiveProps],
//   props: {
//     chartdata: {
//       type: Object,
//       default: null
//     },
//     options: {
//       type: Object,
//       default: null
//     }
//   },
//   data() {
//     return {
//       // datasets: [
//       //   {
//       //     data: [70, 20, 10],
//       //     backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
//       //     hoverBackgroundColor: ['#fbd2cd', '#fef5c9', '#d1e3f7']
//       //   }
//       // ],
//       // labels: ['Productive', 'Unproductive', 'Neutral'],
//       // option: { responsive: true }
//     }
//   },
//   mounted() {
//     this.renderChart(this.chartdata, this.options)
//   }
// }
//
</script>
<template>
  <div class="card">
    <div class="card-img-bottom">
      <chartjs-doughnut
        v-if="loaded"
        :bind="true"
        :labels="labels"
        :data="datasets.data"
        :datacolor="datasets.backgroundColor"
        :option="option"
        width="500px"
      />
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   datasets: {
  //     type: Object,
  //     default: null
  //   },
  //   labels: {
  //     type: Object,
  //     default: null
  //   },
  //   option: {
  //     type: Object,
  //     default: null
  //   }
  // },
  data() {
    return {
      loaded: false,
      array: [0, 0, 0],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: ['#c0db6ff', '#969696', '#cf3530'],
          hoverBackgroundColor: ['#0db6ff', '#cf3530', '#969696']
        }
      ],
      labels: ['Productive', 'Neutral', 'Unproductive'],
      option: {},
      date: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    loadChartData() {
      // this.$axios
      //   .post('daily-tracking-report/overal-per-user', {
      //     date: this.date,
      //     id: localStorage.getItem('user_id')
      //   })
      //   .then((response) => {
      //     // console.log(response.data.data.value)
      //     this.array = response.data.data.value
      //     // for (let i = 0; i < this.array.lenght; i++) {
      //     //   this.datasets.data[i] = this.array[i]
      //     // }
      //     // console.log(this.datasets.data)
      //     this.datasets.data = this.array
      //     console.log(this.array)
      //     this.loaded = true
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      this.array[0] = this.$store.state.productive
      this.array[1] = this.$store.state.neutral
      this.array[2] = this.$store.state.unproductive
      this.datasets.data = this.array
      this.loaded = true
    }
  },
  mounted() {
    this.loadChartData()
  }
}
</script>
