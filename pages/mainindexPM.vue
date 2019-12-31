<template>
  <v-container>
    <v-progress-linear
      v-if="!chartLoaded || !managerLoaded"
      indeterminate
    ></v-progress-linear>
    <div v-else>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="600px">
          <v-card light>
            <v-card-title class="justify-center">
              <span class="headline">Daily Report</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="last_24_hour_activities"
                      label="Done"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="next_24_hour_activities"
                      label="Plan"
                      type="text"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="obstacles"
                      label="Obstacle"
                      type="text"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="text-center"
                color="blue darken-1"
                text
                @click="
                  dialog = false
                  submitDailyReport()
                "
                >SUBMIT</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row id="firstRow">
        <v-col>
          <v-card light hover flat style="border-radius: 10px">
            <v-card-title append-icon="mdi-gifts">Reward</v-card-title>
            <v-card-text class="text-center"><h1>89</h1></v-card-text>
            <v-card-text>Overall employee total reward</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card light hover flat style="border-radius: 10px">
            <v-card-title append-icon="mdi-gifts"
              >Productivity Ratio</v-card-title
            >
            <v-card-text class="text-center"
              ><h1>{{ Math.ceil(productivityAvg) }} %</h1></v-card-text
            >
            <v-card-text>Team Productivity Average</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card light hover flat style="border-radius: 10px">
            <v-card-title append-icon="mdi-gifts">Total Time</v-card-title>
            <v-card-text class="text-center">
              <h1>{{ (totalTime / 3600).toFixed(2) }} Hour</h1>
            </v-card-text>
            <v-card-text>Overall employee productive time</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row id="chart">
        <v-col cols="12">
          <v-card light flat style="border-radius: 10px">
            <v-card-title>Team Productivity Chart</v-card-title>
            <v-sparkline
              :labels="labels"
              :value="value"
              line-width="2"
              padding="16"
              label-size="4"
              show-labels="showLabels"
            >
            </v-sparkline>
          </v-card>
        </v-col>
      </v-row>
      <v-row id="lastRow">
        <v-col>
          <v-card light flat style="border-radius: 10px">
            <v-card-text class="text-center" style="border-radius: 10px">
              <div>Most Productive Application</div>
              <v-row class="justify-center">
                <div>mostProductiveApp.name</div>
                <div class="ml-5">mostProductiveApp.duration</div>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mt-4" light flat style="border-radius: 10px">
            <v-card-text class="text-center" style="border-radius: 10px">
              <div>Most Unproductive Application</div>
              <v-row class="justify-center">
                <div>mostUnproductiveApp.name</div>
                <div class="ml-5">MostUnproductiveApp.duration</div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            color="#2D9CDB"
            flat
            style="border-radius: 10px"
            min-height="148.3"
            class="fill-height"
            to="/dailyreport"
            hover
          >
            <v-container fill-height text-center>
              <v-layout align-center>
                <v-flex v-if="dailyReportStatus"
                  >Daily Report : <span>Done</span></v-flex
                ><v-flex v-if="!dailyReportStatus"
                  >Daily Report : <span>Incomplete</span></v-flex
                >
              </v-layout>
            </v-container>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            color="#0D3C67"
            flat
            style="border-radius: 10px"
            min-height="148.3"
            class="fill-height pt-3 pb-3"
            hover
          >
            <div class="text-center">
              <v-icon class="mt-4" large>
                mdi-account-circle
              </v-icon>
            </div>
            <v-card-text class="text-center mx-0 pa-2">
              {{ manager.name }}
            </v-card-text>
            <v-divider class="mx-auto mb-3" width="150px" dense></v-divider>
            <div class="text-center h5">Project Manager</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      labels: [
        'Six days ago',
        'Five days ago',
        'Four days ago',
        'Three days ago',
        'Two days ago',
        'Yesterday',
        'Today'
      ],
      value: [],
      productivityAvg: 0,
      manager: '',
      chartLoaded: false,
      managerLoaded: false,
      dailyReportStatus: false,
      totalTime: 0
    }
  },
  mounted() {
    this.loadProductivityChart()
    this.getManager()
    this.dailyReportCheck()
    this.loadUserRank()
  },
  methods: {
    loadUserRank() {
      this.$axios
        .post('daily-tracking-report/overal-per-user-team', {
          id_team: localStorage.getItem('team_id'),
          date: new Date().toISOString().substr(0, 10)
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    loadProductivityChart() {
      this.$axios
        .post('daily-tracking-report/history-per-team', {
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          this.value = response.data.data
          this.productivityAvg = response.data.average
          this.totalTime = response.data.total_time
          this.chartLoaded = true
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getManager() {
      this.$axios
        .post('team/member', {
          id: localStorage.getItem('team_id')
        })
        .then((response) => {
          this.manager = response.data.data.manager
          console.log(response.data.data)
          this.managerLoaded = true
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    submitDailyReport() {
      this.$axios
        .post('daily-scrum-report', {
          id_team: localStorage.getItem('team_id'),
          next_24_hour_activities: this.next_24_hour_activities,
          last_24_hour_activities: this.last_24_hour_activities,
          obstacle: this.obstacles
        })
        .then((response) => {
          // this.$store.commit('SET_USER_TOKEN', response.data.success.token)
          console.log(response.data)
          this.dailyReportStatus = true
          // this.usertoken = 'Bearer ' + this.$store.state.token
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    dailyReportCheck() {
      this.$axios
        .post('daily-scrum-report/check', {
          // id_team: this.$store.state.idTeam
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.message === 'sudah mengisi data hari ini') {
            this.dialog = false
            this.dailyReportStatus = true
          } else this.dialog = true
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    loadMostUser() {
      this.$axios
        .post('daily-scrum-report/check', {
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.message === 'sudah mengisi data hari ini') {
            this.dialog = false
            this.dailyReportStatus = true
          } else this.dialog = true
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
