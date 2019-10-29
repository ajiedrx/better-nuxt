<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-pencil"
            label="Team Name"
            placeholder="Tim Skuy"
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-clock"
            label="Working Time"
            placeholder="8"
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-key"
            label="Team Code"
            placeholder="7UWVQ"
            readonly
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-tabs v-model="tab" light left icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Customize Apps Category
        </v-tab>

        <v-tab href="#tab-2">
          Customize Tasks
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-' + 1">
          <v-card light flat tile>
            <v-row
              v-for="app in apps"
              :key="app.name"
              class="mb-0 mt-0 pt-1"
              no-gutters
            >
              <v-col>
                <v-card-text class="mt-2 text-center">{{
                  app.name
                }}</v-card-text>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col max-width="50px">
                <v-select
                  :items="vselectitems"
                  label="Category"
                  class="px-5 mx-5"
                  hover
                ></v-select>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-' + 2">
          <v-card light flat tile>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: 'main',
  data() {
    return {
      tab: null,
      apps: [
        {
          name: 'youtube.com',
          value: ''
        },
        {
          name: 'Netbeans IDE',
          value: ''
        },
        {
          name: 'Php Storm',
          value: ''
        },
        {
          name: 'Adobe XD',
          value: ''
        }
      ],
      vselectitems: ['Productive', 'Unproductive', 'Neutral'],
      selectvalues: [true, false, null]
    }
  }
}
</script>
