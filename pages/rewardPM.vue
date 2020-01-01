<template>
  <v-container>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div v-else>
      <v-row>
        <h3 style="color: #1592E6">REWARD</h3>
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
      <v-data-table
        :headers="headers"
        :items="dataTable"
        :items-per-page="5"
        class="elevation-1"
        light
      >
      </v-data-table>
      <!-- <v-row>
      <v-col cols="12">
        <v-card
          color="#2D9CDB"
          flat
          style="border-radius: 10px"
          class="fill-height"
          min-height="485"
          hover
        >
          <v-container fill-height text-center>
            <v-layout align-center>
              <v-flex class="display-1">REWARD</v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
    </v-row> -->
    </div>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      dataTable: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'user'
        },
        { text: 'Date', value: 'date' },
        { text: 'Total reward', value: 'reward' },
        { text: 'Current reward', value: 'current_reward' }
      ],
      loaded: false,
      date: new Date().toISOString().substr(0, 10)
    }
  },
  mounted() {
    this.loadTableData()
  },
  methods: {
    chooseDate() {
      this.$axios
        .post('daily-tracking-report/reward-table-per-team', {
          id_team: localStorage.getItem('team_id'),
          date: this.date
        })
        .then((response) => {
          this.dataTable = response.data.data
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.date = null
    },
    loadTableData() {
      this.$axios
        .post('daily-tracking-report/reward-table-per-team', {
          date: this.date,
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          console.log(response.data.data)
          this.dataTable = response.data.data
          this.loaded = true
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
