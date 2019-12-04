<template>
  <v-app style="background: #F2F2F2">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="#0D3C67"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-text>Beetter</v-text>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="mx-5 mb-3"></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title dark v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app dark color="#FFFFFF">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <div class="navbar-space hidden-lg-and-down"></div>
      <!-- <v-avatar class="hidden-xs-only mr-3">
          <v-img src="/icon.png" />
        </v-avatar> -->
      <img src=/beeter-logo-dark.png class="mb-1" width="86px" height="25px"
      @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-medium" v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click="sheet = true">
        <v-icon>mdi-dark mdi-plus</v-icon>
      </v-btn> -->
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dark mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="sheet = true">Join Team</v-list-item>
          <v-list-item
            @click="
              dialog = true
              randomCode()
            "
            >Create Team</v-list-item
          >
        </v-list>
      </v-menu>
      <v-dialog v-model="dialog" max-width="290">
        <v-card light>
          <v-card-title class="justify-center">CREATE TEAM</v-card-title>
          <v-divider class="mx-5"></v-divider>
          <v-text-field
            v-model="room_name"
            class=" mb-0 mt-5 ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Team name"
            append-icon="mdi-group"
            autofocus
          ></v-text-field>
          <v-text-field
            v-model="business_hour_start"
            class="ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Working Time"
            append-icon="mdi-clock"
          ></v-text-field>
          <v-text-field
            class="ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Code"
            :value="room_code"
            append-icon="mdi-key"
            disabled
          ></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn
              @click="
                random = true
                createTeam()
              "
            >
              CREATE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <a color="primary"> {{ this.$auth.user.username }} </a>
      <v-btn icon to="/profile">
        <v-icon>mdi-dark mdi-account-circle</v-icon>
      </v-btn>
      <div class="navbar-space hidden-lg-and-down"></div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <div class="fill-height">
      <v-bottom-sheet v-model="sheet" inset>
        <v-sheet class="text-center" height="200px" light>
          <v-layout col justify-center>
            <v-flex pt-5 mt-5 md4>
              <v-text-field
                v-model="room_code"
                color="primary"
                label="Code"
                prepend-icon="mdi-dark mdi-key"
                type="text"
                autofocus
                @keyup.enter="sheet = !sheet"
              ></v-text-field>
              <v-btn
                @click="
                  sheet = !sheet
                  joinTeam()
                "
              >
                JOIN
              </v-btn>
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      business_hour_start: '08:00:00',
      business_hour_end: '20:00:00',
      role: 2,
      room_code: '',
      clipped: true,
      drawer: true,
      fixed: true,
      sheet: false,
      dialog: false,
      random: false,
      items: [
        {
          icon: 'mdi-account',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'mdi-group',
          title: 'Team',
          to: '/'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false
    }
  },
  // created() {
  //   this.randomCode()
  // },
  methods: {
    randomCode() {
      const characters =
        'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
      for (let i = 0; i < 10; i++) {
        this.room_code += characters.charAt(Math.floor(Math.random() * 52))
      }
      console.log(this.room_code)
      return this.room_code
    },
    createTeam() {
      this.$axios
        .post('team', {
          room_name: this.room_name,
          room_code: this.room_code,
          business_hour_start: this.business_hour_start,
          business_hour_end: this.business_hour_end
        })
        .then((response) => {
          console.log(this.room_code)
          console.log(this.room_name)
          console.log(response)
          this.dialog = false
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    joinTeam() {
      this.$axios
        .post('team/join', {
          room_code: this.room_code,
          role: this.role
        })
        .then((response) => {
          console.log(this.room_code)
          console.log(response)
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
