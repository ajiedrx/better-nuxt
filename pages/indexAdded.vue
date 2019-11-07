<template>
  <v-layout column justify-center align-center>
    <v-flex v-if="!team">
      <v-text>You don't have any team yet</v-text>
    </v-flex>

    <v-container v-else class="pa-0">
      <v-row>
        <!-- <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <v-item>
            <v-card height="200px" min-width="250px" hover light :to="card.to">
              <v-card-title
                class="justify-center"
                v-text="card.title"
              ></v-card-title>
              <div class="text-center">
                <v-avatar color="primary"></v-avatar>
              </div>
              <v-card-text
                class="text-center mx-0 pa-2"
                v-text="card.subtitle"
              ></v-card-text>
              <v-divider class="mx-auto mb-3" width="150px"></v-divider>
              <div class="text-center">Project Manager</div>
            </v-card>
          </v-item>
        </v-col> -->
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              height="200px"
              min-width="250px"
              hover
              light
              to="/mainindex"
            >
              <v-card-title class="justify-center">CendolDawet</v-card-title>
              <div class="text-center">
                <v-avatar color="primary"></v-avatar>
              </div>
              <v-card-text class="text-center mx-0 pa-2">Fulan A</v-card-text>
              <v-divider class="mx-auto mb-3" width="150px"></v-divider>
              <div class="text-center">Project Manager</div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              height="200px"
              min-width="250px"
              hover
              light
              to="/mainindexPM"
            >
              <v-card-title class="justify-center">SkuyTeam</v-card-title>
              <div class="text-center">
                <v-avatar color="primary"></v-avatar>
              </div>
              <v-card-text class="text-center mx-0 pa-2">Fulan B</v-card-text>
              <v-divider class="mx-auto mb-3" width="150px"></v-divider>
              <div class="text-center">Project Manager</div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              height="200px"
              min-width="250px"
              hover
              light
              to="/mainindexPM"
            >
              <v-card-title class="justify-center">AdaDimanaTeam</v-card-title>
              <div class="text-center">
                <v-avatar color="primary"></v-avatar>
              </div>
              <v-card-text class="text-center mx-0 pa-2">Fulan C</v-card-text>
              <v-divider class="mx-auto mb-3" width="150px"></v-divider>
              <div class="text-center">Project Manager</div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  layout: 'default',
  team: false,
  data() {
    return {
      team: true,
      cards: [
        {
          title: 'Cendol Dawet',
          subtitle: 'Edai',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          code: ''
        },
        {
          title: 'SkuyTeam',
          subtitle: 'Daegol',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',

          code: ''
        },
        {
          title: 'Axiom',
          subtitle: 'Putra',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          code: ''
        }
      ]
    }
  },
  methods: {
    save() {
      this.cards.push(this.defaultCard)
    },
    isPm() {
      this.$store.commit('setTeamState', false)
    }
  }
}
</script>
