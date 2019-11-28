<template>
  <v-container>
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
      <chartjs-doughnut
        class="mb-0"
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
        style="width: 800px; height: 400px"
      />
    </v-row>
    <v-row class="mt-5">
      <!-- <a @click="pm = true">BACK</a> -->
      <v-col cols="12">
        <v-card light flat>
          <v-row>
            <v-col align="center" justify="center">
              Productive Apps
              <v-card class="ma-5" color="#cbcbcb" flat>
                <v-row>
                  <v-col>
                    <v-card-text v-for="pro in pros" :key="pro.name">{{
                      pro.name
                    }}</v-card-text>
                  </v-col>
                  <v-col>
                    <v-card-text>42m</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col align="center" justify="center">
              Non-Productive Apps
              <v-card class="ma-5" color="#cbcbcb" flat>
                <v-row>
                  <v-col>
                    <v-card-text v-for="pro in pros" :key="pro.name">{{
                      pro.name
                    }}</v-card-text>
                  </v-col>
                  <v-col>
                    <v-card-text>42m</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col align="center" justify="center">
              Neutral Apps
              <v-card class="ma-5" color="#cbcbcb" flat>
                <v-row>
                  <v-col>
                    <v-card-text v-for="pro in pros" :key="pro.name">{{
                      pro.name
                    }}</v-card-text>
                  </v-col>
                  <v-col>
                    <v-card-text>42m</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'main',
  data() {
    return {
      datasets: [
        {
          data: [],
          backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
          hoverBackgroundColor: ['#fbd2cd', '#fef5c9', '#d1e3f7']
        }
      ],
      labels: ['Productive', 'Unproductive', 'Neutral'],
      option: { responsive: true },
      pros: [
        {
          name: 'Netbeans IDE'
        },
        {
          name: 'xampp'
        },
        {
          name: 'Visual Studio Code'
        },
        {
          name: 'Microsoft Excel'
        }
      ],
      nonpros: [
        {
          name: 'youtube.com'
        },
        {
          name: 'Steam'
        },
        {
          name: 'Origin'
        }
      ],
      neutrals: [
        {
          name: 'Spotify'
        },
        {
          name: 'Calculator'
        }
      ],
      date: new Date().toISOString().substr(0, 10),
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  mounted() {
    this.$axios
      .post('daily-tracking-report/overal-per-team', {
        id_team: localStorage.getItem('team_id')
      })
      .then((response) => {
        console.log(response.data.data.value)
        // this.datasets.data[0] = response.data.data.value.productive_value
        // this.datasets.data[1] = response.data.data.value.netral_value
        // this.datasets.data[2] = response.data.data.value.not_productive_value
        this.datasets.data = response.data.data.value
        console.log(this.datasets.data)
        // this.datasets.data = response.data.value
      })
      .catch((error) => {
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
