<template>
  <v-container>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div v-if="loaded">
      <v-row>
        <h3 style="color: #1592E6">PRODUCTIVITY</h3>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Pick date"
                prepend-icon="mdi-calendar"
                readonly
                light
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable light>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn
                text
                color="primary"
                @click="
                  $refs.dialog.save(date)
                  chooseDate()
                "
                >OK</v-btn
              >
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <ChartDoughnut />
      </v-row>
      <v-row class="mt-5">
        <!-- <a @click="pm = true">BACK</a> -->
        <v-col cols="12">
          <v-card light flat>
            <v-row>
              <v-col align="center" justify="center">
                Productive Apps
                <v-card class="ma-5" color="#cbcbcb" flat>
                  <v-row
                    v-for="appdatas in appdata.productive"
                    :key="appdatas.name"
                  >
                    <v-col>
                      <v-card-text>{{ appdatas.name }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ appdatas.duration }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col align="center" justify="center">
                Non-Productive Apps
                <v-card class="ma-5" color="#cbcbcb" flat>
                  <v-row
                    v-for="appdatas in appdata.not_productive"
                    :key="appdatas.name"
                  >
                    <v-col>
                      <v-card-text>{{ appdatas.name }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ appdatas.duration }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col align="center" justify="center">
                Neutral Apps
                <v-card class="ma-5" color="#cbcbcb" flat>
                  <v-row
                    v-for="appdatas in appdata.netral"
                    :key="appdatas.name"
                  >
                    <v-col>
                      <v-card-text>{{ appdatas.name }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ appdatas.duration }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'main',
  data() {
    return {
      loaded: false,
      dataCollection: [],
      // datasets: [
      //   {
      //     data: [],
      //     backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
      //     hoverBackgroundColor: ['#fbd2cd', '#fef5c9', '#d1e3f7']
      //   }
      // ],
      // labels: ['Productive', 'Unproductive', 'Neutral'],
      // option: { responsive: true },
      datachart: [],
      appdata: [],
      date: new Date().toISOString().substr(0, 10)
    }
  },
  // watch: {
  //   chartData() {
  //     this.$data._chart.update()
  //   }
  // },
  // async asyncData({ env }) {
  //   const res = await axios.post('daily-tracking-report/overal-per-user', {
  //     date: '2019-11-27'
  //   })
  //   return {
  //     datasets: [
  //       {
  //         data: [res.data.data.value],
  //         backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
  //         hoverBackgroundColor: ['#fbd2cd', '#fef5c9', '#d1e3f7']
  //       }
  //     ],
  //     labels: ['Productive', 'Unproductive', 'Neutral'],
  //     option: { responsive: true }
  //   }
  // },
  // async mounted() {
  //   this.loaded = false
  //   try {
  //     const { datasets } = await this.$axios.post(
  //       'daily-tracking-report/overal-per-user',
  //       {
  //         date: '2019-11-27'
  //       }
  //     )
  //     this.datasets.data = datasets
  //     this.loaded = true
  //     console.log(this.datasets.data)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // },
  mounted() {
    // this.loadChartData()
    this.getAppData()
  },
  methods: {
    chooseDate() {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date
        })
        .then((response) => {
          this.appdata = response.data.data.app
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAppData() {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: '2019-12-02'
        })
        .then((response) => {
          this.appdata = response.data.data.app
          this.loaded = true
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // loadChartData() {
    //   this.$axios
    //     .post('daily-tracking-report/overal-per-user', {
    //       date: '2019-11-27'
    //     })
    //     .then((response) => {
    //       // console.log(response.data.data.value)
    //       this.datachart = response.data.data.value
    //       // console.log(this.datasets.data)
    //       this.dataCollection = {
    //         labels: ['Productive', 'Neutral', 'Unproductive'],
    //         datasets: [
    //           {
    //             label: ['Productivity Chart'],
    //             backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
    //             data: [this.datachart]
    //           }
    //         ]
    //       }
    //       console.log(response)
    //       this.loaded = true
    //       // this.datasets.data[0] = response.data.data.value.productive_value
    //       // this.datasets.data[1] = response.data.data.value.netral_value
    //       // this.datasets.data[2] = response.data.data.value.not_productive_value
    //       // this.datasets.data = response.data.data.value
    //       // console.log(this.datasets.data)
    //       // this.datasets.data = response.data.value
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
  }
}
</script>
