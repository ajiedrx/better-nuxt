<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">PRODUCTIVITY</h3>
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
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Productive (%)', value: 'pro' },
      { text: 'Unproductive (%)', value: 'un' },
      { text: 'Neutral (%)', value: 'neu' }
    ],
    desserts: [
      {
        name: 'M Aliffiansyah',
        pro: 80,
        un: 15,
        neu: 5,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Daegal Prayoga',
        pro: 82,
        un: 8,
        neu: 10,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'M Aldiansyah Rizaldi',
        pro: 85,
        un: 5,
        neu: 10,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Daegal Prayoga Ribowo',
        pro: 90,
        un: 2,
        neu: 8,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ajie DR',
        pro: 90,
        un: 2,
        neu: 8,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Dimas Wicaksono',
        pro: 89,
        un: 11,
        neu: 0,
        protein: 4.0,
        iron: '1%'
      }
    ]
  })
}
</script>
