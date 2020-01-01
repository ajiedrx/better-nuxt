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
        <ChartDoughnut v-if="chart" />
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
      datachart: [],
      chart: false,
      appdata: [],
      array: [],
      date: new Date().toISOString().substr(0, 10)
    }
  },
  mounted() {
    this.getAppData()
    this.loadChartData()
  },
  methods: {
    chooseDate() {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: localStorage.getItem('user_id')
        })
        .then((response) => {
          this.appdata = response.data.data.app
          this.chart = false
        })
        .catch((error) => {
          console.log(error)
        })
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: localStorage.getItem('user_id')
        })
        .then((response) => {
          this.array = response.data.data.value
          this.$store.commit('SET_PRODUCTIVE', this.array[0])
          this.$store.commit('SET_UNPRODUCTIVE', this.array[2])
          this.$store.commit('SET_NEUTRAL', this.array[1])
          this.loaded = true
          this.chart = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAppData() {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: localStorage.getItem('user_id')
        })
        .then((response) => {
          this.appdata = response.data.data.app
          this.loaded = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadChartData() {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: localStorage.getItem('user_id')
        })
        .then((response) => {
          this.array = response.data.data.value
          console.log(this.array)
          this.loaded = true
          this.$store.commit('SET_PRODUCTIVE', this.array[0])
          this.$store.commit('SET_UNPRODUCTIVE', this.array[2])
          this.$store.commit('SET_NEUTRAL', this.array[1])
          console.log(this.$store.state.productive)
          console.log(this.$store.state.neutral)
          console.log(this.$store.state.unproductive)
        })
        .catch((error) => {
          console.log(error)
        })
      this.chart = true
    }
  }
}
</script>
