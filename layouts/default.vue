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
          <v-list-item @click="dialog = true">Create Team</v-list-item>
        </v-list>
      </v-menu>
      <v-dialog v-model="dialog" max-width="290">
        <v-card light>
          <v-card-title class="justify-center">CREATE TEAM</v-card-title>
          <v-divider class="mx-5"></v-divider>
          <v-text-field
            class=" mb-0 mt-5 ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Team name"
            append-icon="mdi-group"
            autofocus
          ></v-text-field>
          <v-text-field
            class="ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Working Time"
            append-icon="mdi-clock"
          ></v-text-field>
          <v-text-field
            class="ml-5 mr-5 pt-5 pr-5 pl-5"
            label="Code"
            append-icon="mdi-key"
            readonly
          ></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn @click="random = true">
              CREATE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <a color="primary"> Fulan </a>
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
                color="primary"
                label="Code"
                name="teamcode"
                prepend-icon="mdi-dark mdi-key"
                type="text"
                autofocus
                @keyup.enter="sheet = !sheet"
              ></v-text-field>
              <v-btn @click="sheet = !sheet">
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
  }
}
</script>
