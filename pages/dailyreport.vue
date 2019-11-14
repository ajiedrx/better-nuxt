<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">DAILY REPORT</h3>
    </v-row>
    <DatepickerComponent />
    <DailyrepComponent />
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'main',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    reports: [
      {
        avatar: '',
        name: 'Ajie DR',
        time: '23.09',
        done: 'Chat feature',
        plan: 'Fixing dashboard',
        obstacle: '-'
      },
      {
        avatar: '',
        name: 'Daegal P',
        time: '21.45',
        done: 'Fixed some apis',
        plan: 'Fixing another apis',
        obstacle: '-'
      }
    ]
  })
}
</script>
