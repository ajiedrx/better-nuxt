<template>
  <v-container>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div v-if="loaded">
      <v-row>
        <h3 style="color: #1592E6">TIME CONSUME</h3>
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
    </div>
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
      loaded: false,
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
        { text: 'Duration (hour)', value: 'time_consumed' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      appdata: [],
      tableData: [],
      date: new Date().toISOString().substr(0, 10),
      idUser: 0
    }
  },
  mounted() {
    this.loadTableData()
  },
  methods: {
    chooseDate() {
      this.$axios
        .post('daily-tracking-report/overal-per-member-team', {
          date: this.date,
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          this.tableData = response.data.data
          this.loaded = true
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: this.idUser
        })
        .then((response) => {
          this.appdata = response.data.data.app
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadTableData() {
      this.$axios
        .post('daily-tracking-report/overal-per-member-team', {
          date: this.date,
          id_team: localStorage.getItem('team_id')
        })
        .then((response) => {
          this.tableData = response.data.data
          this.loaded = true
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAppData(idUser) {
      this.$axios
        .post('daily-tracking-report/overal-per-user', {
          date: this.date,
          id: idUser
        })
        .then((response) => {
          this.appdata = response.data.data.app
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    itemDetails(item) {
      this.editedItem = Object.assign({}, item)
      this.getAppData(this.editedItem.user.id)
      this.idUser = this.editedItem.user.id
      this.pm = false
      this.editedItem = null
    }
    // watch() {
    //   return {
    //     editedItem() {
    //       this.getAppData(this.editedItem.user.id)
    //     }
    //   }
    // }
  }
}
</script>
