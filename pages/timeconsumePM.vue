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
                <v-card-text v-for="pro in pros" :key="pro.name">{{
                  pro.name
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col align="center" justify="center">
              Non-Productive Apps
              <v-card class="ma-5" color="#cbcbcb" flat>
                <v-card-text v-for="nonpro in nonpros" :key="nonpro.name">{{
                  nonpro.name
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col align="center" justify="center">
              Neutral Apps
              <v-card class="ma-5" color="#cbcbcb" flat>
                <v-card-text v-for="neutral in neutrals" :key="neutral.name">{{
                  neutral.name
                }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-data-table
      v-else
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
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      pm: true,
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
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Date', value: 'date' },
        { text: 'Duration', value: 'duration' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      desserts: [
        {
          name: 'Daegal P',
          date: '29/10/30',
          duration: '8 hours',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Aldi Izzaldi',
          date: '29/10/30',
          duration: '8 hours',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Sherly Maya',
          date: '29/10/30',
          duration: '8 hours',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Wifda Muna',
          date: '29/10/30',
          duration: '8 hours',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ajie DR',
          date: '29/10/30',
          duration: '8 hours',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        }
      ],
      itemDetails(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.pm = false
      }
    }
  }
}
</script>
