<template>
  <v-app v-if="!team" style="background: #f2f2f2">
    <v-container class="fill-height" style="height: 90%">
      <v-row align="center" justify="center">
        <v-col>
          <v-card light flat style="border-radius: 5px">
            <v-row>
              <v-col align="center" justify="center">
                <div class="display-1">Getting started with your team</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="ml-5">
                <v-card
                  class="mx-auto my-auto"
                  width="200px"
                  style="padding-top: 50px; padding-bottom: 50px"
                  light
                  flat
                  ripple
                >
                  <div class="text-center">
                    By creating a team, you are declared as a tracker. (Project
                    Manager)
                  </div>
                  <v-card-actions class="justify-center mt-2">
                    <v-btn class="white--text" color="#2D9CDB" light
                      >CREATE TEAM</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <!-- <v-col cols="1" class="text-center pb-5"> -->
              <v-divider class="my-3" vertical></v-divider>
              <!-- </v-col> -->
              <v-col class="mr-5">
                <v-card
                  class="mx-auto my-auto"
                  style="padding-top: 50px; padding-bottom: 50px"
                  width="200px"
                  light
                  flat
                  ripple
                >
                  <div class="text-center">
                    By joining a team, you are declared as developer. (Developer
                    Team)
                  </div>
                  <v-card-actions class="justify-center mt-2">
                    <v-btn class="white--text" color="#2D9CDB" light
                      >JOIN TEAM</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <!-- <v-col align="center" justify="center" cols="5">
                <v-row>
                  <div>
                    By creating a team, you are declared as a tracker. (Project
                    Manager)
                  </div>
                </v-row>
                <v-row>
                  <v-btn color="#2D9CDB" light>CREATE TEAM</v-btn>
                </v-row>
              </v-col>
              <v-col cols="2">
                <v-divider vertical></v-divider>
              </v-col>
              <v-col cols="5" align="center" justify="center">
                <v-row>
                  <div>
                    By creating a team, you are declared as a tracker. (Project
                    Manager)
                  </div>
                </v-row>
                <v-row>
                  <v-btn color="#2D9CDB" light>JOIN TEAM</v-btn>
                </v-row>
              </v-col> -->
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <v-layout v-else column justify-center align-center>
    <v-container class="pa-0">
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
    this.listTeam()
  },
  methods: {
    save() {
      this.cards.push(this.defaultCard)
    },
    listTeam() {
      this.$axios
        .post('team/team-list')
        .then((response) => {
          // this.$store.commit('SET_USER_TOKEN', response.data.success.token)
          this.cards = response.data.dataTeam
          console.log(response.data)
          // this.team = !this.team
          // this.usertoken = 'Bearer ' + this.$store.state.token
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    isPm() {
      this.$store.commit('setTeamState', false)
    },
    enterTeam(id) {
      localStorage.clear()
      this.$store.commit('SET_ID_TEAM', id)
      if (process.browser) {
        localStorage.setItem('team_id', id)
      }
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
