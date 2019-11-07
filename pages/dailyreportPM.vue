<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">DAILY REPORT</h3>
    </v-row>
    <DatepickerComponent />
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
              <v-col v-for="report in reports" :key="report.name" cols="12">
                <v-card class="pb-3 pl-2 mx-5" min-height="150" light>
                  <v-row class="ml-2" align="center" dense no-gutters>
                    <v-col>
                      <v-list class="pb-0">
                        <v-list-item>
                          <v-list-item-avatar class="mr-0">
                            <v-avatar color="primary"> </v-avatar>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-card-text>{{ report.name }}</v-card-text>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                    <v-col class="pt-0 mr-3" align="end">
                      <v-card-text class="pt-0">{{ report.time }}</v-card-text>
                    </v-col>
                  </v-row>
                  <v-container class="pt-0" dense>
                    <v-subheader light>Done :</v-subheader>
                    <div class="ml-5 pl-5">{{ report.done }}</div>
                    <v-subheader light>Plan :</v-subheader>
                    <div class="ml-5 pl-5">{{ report.plan }}</div>
                    <v-subheader light>Obstacle :</v-subheader>
                    <div class="ml-5 pl-5">{{ report.obstacle }}</div>
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
  layout: 'mainPM',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    tab: null,
    detail: true,
    reports: [
      {
        avatar: '',
        name: 'Ajie DR',
        time: '23.09',
        done: 'Im done with you',
        plan: 'Looking for the other',
        obstacle: 'Umm'
      },
      {
        avatar: '',
        name: 'Daegal P',
        time: '21.45',
        done: 'Hiyahiyahiyaa',
        plan: 'Wikwikwik',
        obstacle: 'Nganu'
      }
    ],
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
  })
}
</script>
