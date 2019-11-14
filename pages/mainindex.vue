<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card light>
          <v-card-title class="justify-center">
            <span class="headline">Daily Report</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Done" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Plan"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
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
              @click="dialog = false"
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
          <v-card-text>Total reward</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card light hover flat style="border-radius: 10px">
          <v-card-title append-icon="mdi-gifts"
            >Productivity Ratio</v-card-title
          >
          <v-card-text class="text-center"><h1>96</h1></v-card-text>
          <v-card-text>In percentage</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card light hover flat style="border-radius: 10px">
          <v-card-title append-icon="mdi-gifts">Total Time</v-card-title>
          <v-card-text class="text-center">
            <h1>132</h1>
          </v-card-text>
          <v-card-text>Overall productive time (hours)</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <client-only>
      <v-row id="chart">
        <v-col cols="12">
          <v-card light flat style="border-radius: 10px">
            <v-card-title>Productivity Chart</v-card-title>
            <v-sparkline
              :labels="labels"
              :value="value"
              line-width="2"
              padding="16"
              auto-draw
            >
            </v-sparkline>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
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
  layout: 'main',
  data: () => ({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    value: [200, 675, 410, 390, 310],
    dialog: true
  })
}
</script>
