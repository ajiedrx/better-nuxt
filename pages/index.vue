<template>
  <v-layout column justify-center align-center>
    <v-flex v-if="!team">
      <v-text>You don't have any team yet</v-text>
    </v-flex>

    <v-container v-else class="pa-0">
      <v-row>
        <v-col v-for="card in cards" :key="card.name" cols="12" md="4">
          <v-item>
            <v-card
              height="200px"
              min-width="250px"
              hover
              light
              @click="
                setIdManager(card.manager[0].id)
                enterTeam(card.details[0].id)
              "
            >
              <v-card-title class="justify-center">{{
                card.details[0].room_name
              }}</v-card-title>
              <div class="text-center">
                <v-avatar color="primary"></v-avatar>
              </div>
              <v-card-text class="text-center mx-0 pa-2">{{
                card.manager[0].name
              }}</v-card-text>
              <v-divider class="mx-auto mb-3" width="150px"></v-divider>
              <div class="text-center">Project Manager</div>
            </v-card>
          </v-item>
        </v-col>
        <!-- <v-col cols="12" md="4">
          <v-item>
            <v-card
              height="200px"
              min-width="250px"
              hover
              to="/mainindex"
              color="#2D9CDB"
            >
              <v-card-title class="justify-center">Cendol Dawet</v-card-title>
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
        </v-col> -->
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  middleware: ['auth'],
  layout: 'default',
  team: false,
  data() {
    return {
      team: true,
      cards: [
        // {
        //   title: 'Cendol Dawet',
        //   subtitle: 'Edai',
        //   src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        //   code: ''
        // },
        // {
        //   title: 'SkuyTeam',
        //   subtitle: 'Daegol',
        //   src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        //   code: ''
        // },
        // {
        //   title: 'Axiom',
        //   subtitle: 'Putra',
        //   src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        //   code: ''
        // }
      ]
    }
  },
  watch: {
    cards() {
      this.$axios
        .post('team/team-list')
        .then((response) => {
          // this.$store.commit('SET_USER_TOKEN', response.data.success.token)
          this.cards = response.data.dataTeam
          console.log(response.data)
          // this.usertoken = 'Bearer ' + this.$store.state.token
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.$axios
      .post('team/team-list')
      .then((response) => {
        // this.$store.commit('SET_USER_TOKEN', response.data.success.token)
        this.cards = response.data.dataTeam
        console.log(response.data)
        // this.usertoken = 'Bearer ' + this.$store.state.token
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    save() {
      this.cards.push(this.defaultCard)
    },
    isPm() {
      this.$store.commit('setTeamState', false)
    },
    enterTeam(id) {
      this.$store.commit('SET_ID_TEAM', id)
      if (this.$store.state.idManager !== this.$auth.user.id) {
        this.$router.push('/mainindex')
      } else {
        this.$router.push('/mainindexPM')
      }
    },
    setIdManager(id) {
      this.$store.commit('SET_ID_MANAGER', id)
    }
  }
}
</script>
