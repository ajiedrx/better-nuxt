<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">TIME CONSUME</h3>
    </v-row>
    <DatepickerComponent />

    <v-row>
      <!-- <a @click="pm = true">BACK</a> -->
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
    <!-- <v-data-table
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
    </v-data-table> -->
  </v-container>
</template>
<script>
export default {
  layout: 'main',
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
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'Actions', value: 'action', sortable: false }
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
