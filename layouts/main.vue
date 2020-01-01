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

    <v-app-bar clipped-left clipped-right fixed app dark color="#FFFFFF">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <div class="navbar-space hidden-lg-and-down"></div>
      <img src=/beeter-logo-dark.png class="mb-1" width="87px" height="25px"
      @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-medium" v-text="title" />
      <v-spacer />
      <v-btn icon to="/profileMain">
        <v-icon>mdi-dark mdi-account-circle</v-icon>
      </v-btn>
      <div class="navbar-space hidden-lg-and-down"></div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="rightDrawer"
      :mini-variant="false"
      :clipped="clipped"
      width="236"
      fixed
      app
      right
      light
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="/icon.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ currentTeam.room_name }}</v-list-item-title>
            <v-list-item-subtitle> Members : {{ total }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-title class="ml-3">MANAGER</v-list-item-title>
        <v-divider class="mx-5"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="ml-3">{{
              manager.name
            }}</v-list-item-title>
          </v-list-item-content>
          <!-- <div v-if="member.status" class="dotmember mr-5"></div>
          <div v-if="!member.status" class="dotoffline mr-5"></div> -->
        </v-list-item>
        <div v-if="counts.uiux != 0">
          <v-list-item-title class="ml-3">UI/UX</v-list-item-title>
          <v-divider class="mx-5"></v-divider>
          <v-list-item v-for="uiuxs in uiux" :key="uiuxs.name">
            <v-list-item-content>
              <v-list-item-title class="ml-3">{{
                uiuxs.name
              }}</v-list-item-title>
            </v-list-item-content>
            <!-- <div v-if="member.status" class="dotmember mr-5"></div>
          <div v-if="!member.status" class="dotoffline mr-5"></div> -->
          </v-list-item>
        </div>
        <div v-if="counts.backend != 0">
          <v-list-item-title class="ml-3">BACKEND</v-list-item-title>
          <v-divider class="mx-5"></v-divider>
          <v-list-item v-for="backends in backend" :key="backends.name">
            <v-list-item-content>
              <v-list-item-title class="ml-3">{{
                backends.name
              }}</v-list-item-title>
            </v-list-item-content>
            <!-- <div v-if="member.status" class="dotmember mr-5"></div>
          <div v-if="!member.status" class="dotoffline mr-5"></div> -->
          </v-list-item>
        </div>
        <div v-if="counts.frontend != 0">
          <v-list-item-title class="ml-3">FRONTEND</v-list-item-title>
          <v-divider class="mx-5"></v-divider>
          <v-list-item v-for="frontends in frontend" :key="frontends.name">
            <v-list-item-content>
              <v-list-item-title class="ml-3">{{
                frontends.name
              }}</v-list-item-title>
            </v-list-item-content>
            <!-- <div v-if="member.status" class="dotmember mr-5"></div>
          <div v-if="!member.status" class="dotoffline mr-5"></div> -->
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

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
                color="primary"
                label="Code"
                name="teamcode"
                prepend-icon="mdi-dark mdi-key"
                type="text"
                autofocus
                @keyup.enter="sheet = !sheet"
              ></v-text-field>
              <v-btn>
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
  /* eslint-disable */
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      sheet: false,
      manager: [],
      currentTeam: [],
      uiux: [],
      frontend: [],
      backend: [],
      counts: [],
      total: 0,
      members: [],
      items: [
        {
          icon: 'mdi-home',
          to: '/mainindex',
          title: 'Home'
        },
        {
          icon: 'mdi-account',
          to: '/profileMain',
          title: 'Profile'
        },
        {
          icon: 'mdi-clipboard-check',
          to: '/dailyreport',
          title: 'Daily Report'
        },
        {
          icon: 'mdi-timer',
          to: '/productivity',
          title: 'Productivity'
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: '',
          to: '',
          title: ''
        },
        {
          icon: 'mdi-exit-to-app',
          to: '/',
          title: 'Exit'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: true,
      userName: 'Username'
    }
  },
  beforeMount() {
    this.listMembers()
    this.getTeamInfo()
  },
  methods: {
    listMembers() {
      this.$axios
        .post('team/member', {
          id: localStorage.getItem('team_id')
        })
        .then((response) => {
          // this.$store.commit('SET_USER_TOKEN', response.data.success.token)
          this.manager = response.data.data.manager
          this.uiux = response.data.data.uiux
          this.backend = response.data.data.backend
          this.frontend = response.data.data.frontend
          this.counts = response.data.data.count
          this.sumMembers()
          console.log(response.data.data)
          // this.members = response.data.data
          // this.manager = this.members[0].user[0]
          // console.log(response.data)
          // this.usertoken = 'Bearer ' + this.$store.state.token
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getTeamInfo() {
      this.$axios
        .get('team' + '/' + localStorage.getItem('team_id'))
        .then((response) => {
          console.log(response.data.data)
          this.currentTeam = response.data.data
          // this.currentTeam = response.data.data
        })
    },
    sumMembers() {
      this.total += this.counts.frontend
      this.total += this.counts.uiux
      this.total += this.counts.backend
    }
  }
}
</script>

<style scoped>
.dotonline {
  height: 10px;
  width: 10px;
  background-color: #65c508;
  border-radius: 50%;
  display: inline-block;
}
.dotoffline {
  height: 10px;
  width: 10px;
  background-color: #707070;
  border-radius: 50%;
  display: inline-block;
}
</style>
