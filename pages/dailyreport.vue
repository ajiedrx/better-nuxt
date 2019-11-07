<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">DAILY REPORT</h3>
    </v-row>
    <DatepickerComponent />
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
  </v-container>
</template>
<script>
export default {
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
