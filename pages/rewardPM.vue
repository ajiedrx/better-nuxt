<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">REWARD</h3>
    </v-row>
    <DatepickerComponent />
    <v-data-table
      :headers="headers"
      :items="desserts"
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
  </v-container>
</template>
<script>
export default {
  layout: 'mainPM',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Date', value: 'date' },
      { text: 'Reward', value: 'reward' },
      { text: 'Current Reward', value: 'curreward' }
    ],
    desserts: [
      {
        name: 'Aldiansyah Izzaldi',
        date: '27/10/30',
        reward: 78,
        curreward: 245,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Daegal Prayoga',
        date: '27/10/30',
        reward: 75,
        curreward: 250,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ajie DR',
        date: '27/10/30',
        reward: 78,
        curreward: 249,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'M Aliffiansyah',
        date: '27/10/30',
        reward: 86,
        curreward: 288,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Astin IC',
        date: '27/10/30',
        reward: 67,
        curreward: 251,
        protein: 4.0,
        iron: '1%'
      }
    ]
  })
}
</script>
