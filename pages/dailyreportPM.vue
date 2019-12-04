<template>
  <v-container>
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
    <v-card>
      <v-tabs v-model="tab" light left icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          LOG
        </v-tab>

        <v-tab href="#tab-2">
          COMPLETION STATUS
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-' + 1">
          <v-card light flat tile>
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
                    <div class="ml-5 pl-5">
                      {{ report.obstacle[0].content }}
                    </div>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-' + 2">
          <v-card light flat tile>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
              light
            >
              <template v-slot:item.action="{ item }">
                <a @click="itemDetails(item)">DETAILS</a>
              </template>
            </v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    tab: null,
    detail: true,
    reports: [],
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Date', value: 'date' },
      { text: 'Time', value: 'time' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    desserts: [
      {
        name: 'Wifda Muna',
        date: '26/10/19',
        time: '14.00',
        status: 'COMPLETED',
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Sherly Maya',
        date: '26/10/19',
        time: '12.00',
        status: 'COMPLETED',
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Daegal Prayoga',
        date: '26/10/19',
        time: '14.05',
        status: 'COMPLETED',
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Adli Izzaldi',
        date: '26/10/19',
        time: '13.00',
        status: 'COMPLETED',
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ajie DR',
        date: '26/10/19',
        time: '13.05',
        status: 'COMPLETED',
        protein: 4.0,
        iron: '1%'
      }
    ],
    itemDetails(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.detail = true
    }
  }),
  mounted() {
    this.$axios
      .post('daily-scrum-report/list', {
        id: localStorage.getItem('team_id'),
        date: new Date().toISOString().substr(0, 10)
      })
      .then((response) => {
        this.reports = response.data.data
        console.log(response.data)
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
