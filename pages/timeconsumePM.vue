<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">TIME CONSUME</h3>
    </v-row>
    <DatepickerComponent />

    <v-row v-if="!pm">
      <a @click="pm = true">BACK</a>
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
                <v-row v-for="appdatas in appdata.netral" :key="appdatas.name">
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
    <v-data-table
      v-else
      :headers="headers"
      :items="tableData"
      :items-per-page="5"
      class="elevation-1"
      light
    >
      <template v-slot:item.action="{ item }">
        <a @click="itemDetails(item)">DETAILS</a>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      pm: true,
      editedItem: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'user.name'
        },
        { text: 'Productive (%)', value: 'value.productive_value' },
        { text: 'Unproductive (%)', value: 'value.not_productive_value' },
        { text: 'Neutral (%)', value: 'value.netral_value' },
        { text: 'Duration', value: 'duration' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      appdata: [],
      tableData: []
    }
  },
  mounted() {
    this.loadTableData()
  },
  methods: {
    loadTableData() {
      this.$axios
        .post('daily-tracking-report/overal-per-member-team', {
          date: '2019-12-02',
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          this.tableData = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAppData(iduser) {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: '2019-12-02',
          id: iduser
        })
        .then((response) => {
          this.appdata = response.data.data.app
        })
        .catch((error) => {
          console.log(error)
        })
    },
    itemDetails(item) {
      this.editedItem = Object.assign({}, item)
      this.getAppData(this.editedItem.user.id)
      this.pm = false
    }
  }
}
</script>
