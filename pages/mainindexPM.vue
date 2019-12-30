<template>
  <v-container>
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
            <h1>132</h1>
          </v-card-text>
          <v-card-text>Overall employee productive time (hours)</v-card-text>
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
            show-labels="showLabels"
          >
          </v-sparkline>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="lastRow">
      <v-col>
        <v-card light flat style="border-radius: 10px">
          <v-row>
            <v-col>
              <v-card-text class="text-center" style="border-radius: 10px">
                <div>Saturday, 26/10/2019</div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mt-4" light flat style="border-radius: 10px">
          <v-card-text class="text-center">21:43</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="#2D9CDB"
          flat
          style="border-radius: 10px"
          min-height="148.3"
          class="fill-height"
          hover
        >
          <v-container fill-height text-center>
            <v-layout align-center>
              <v-flex>Daily Report</v-flex>
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
          class="fill-height"
          hover
        >
          <v-list-item two-line dense>
            <v-list-item-content>
              <v-list-item-title>Surabaya</v-list-item-title>
              <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-1 pt-1" cols="6">
                23&deg;C
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      value: [],
      productivityAvg: 0
    }
  },
  mounted() {
    this.loadProductivityChart()
  },
  methods: {
    loadProductivityChart() {
      this.$axios
        .post('daily-tracking-report/history-per-team', {
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          // for (let i = 0; i < response.data.data.length; i++) {
          //   this.value[i] = response.data.data[i]
          // }
          this.value = response.data.data
          this.productivityAvg = response.data.average
          console.log(this.value)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
