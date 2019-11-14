<template>
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
</template>
<script>
export default {}
</script>
