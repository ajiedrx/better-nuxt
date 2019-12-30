<template>
  <v-container>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div v-if="loaded">
      <v-row>
        <h3 style="color: #1592E6">DAILY REPORT</h3>
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
      <v-row dense>
        <v-col v-for="report in reports" :key="report.daily.id" cols="12">
          <v-card class="pb-3 pl-2 mx-5" min-height="150" light>
            <v-row class="ml-2" align="center" dense no-gutters>
              <v-col>
                <v-list class="pb-0">
                  <v-list-item>
                    <v-list-item-avatar class="mr-0">
                      <v-avatar color="primary"> </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-card-text>{{ report.user.name }}</v-card-text>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col class="pt-0 mr-3" align="end">
                <v-card-text class="pt-0">{{
                  report.daily.created_at
                }}</v-card-text>
              </v-col>
            </v-row>
            <v-container class="pt-0" dense>
              <v-subheader light>Done :</v-subheader>
              <div class="ml-5 pl-5">
                {{ report.daily.last_24_hour_activities }}
              </div>
              <v-subheader light>Plan :</v-subheader>
              <div class="ml-5 pl-5">
                {{ report.daily.next_24_hour_activities }}
              </div>
              <v-subheader light>Obstacle :</v-subheader>
              <div class="ml-5 pl-5">{{ report.obstacle[0].content }}</div>
            </v-container>
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
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      loaded: false,
      reports: []
    }
  },
  mounted() {
    this.$axios
      .post('daily-scrum-report/list', {
        id: localStorage.getItem('team_id'),
        date: new Date().toISOString().substr(0, 10)
      })
      .then((response) => {
        this.reports = response.data.data
        console.log(response.data)
        this.loaded = true
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    chooseDate() {
      this.$axios
        .post('daily-scrum-report/list', {
          id: localStorage.getItem('team_id'),
          date: this.date
        })
        .then((response) => {
          this.reports = response.data.data
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
