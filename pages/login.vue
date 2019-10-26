<template>
  <v-app style="background: #f2f2f2; height: 100%">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" light>
              <v-toolbar color="#2D9CDB">
                <v-toolbar-title class="align-center">Beetter</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    color="primary"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-dark mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-dark mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  class="align-self-center"
                  color="#2D9CDB"
                  style="width: 95%"
                  @click="addUserToken"
                  >{{ getUserToken }}</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    getUserToken() {
      return this.$store.state.userToken
    }
  },
  methods: {
    addUserToken() {
      this.$store.commit('assign', 'a2n435b ')
      this.$store.commit('assign', 'a56345fb')
      console.log(this.$store.state.userToken)
    }
  },
  // props: {
  //   source: String
  // },
  layout: 'auth'
  // methods: {
  //   formSubmit(e) {
  //     e.preventDefault()
  //     const currentObj = this
  //     let userToken = ''

  //     this.axios
  //       .post('http://192.168.0.103/api/login', {
  //         username: this.username,
  //         password: this.password
  //       })
  //       .then(function(response) {
  //         currentObj.output = response.data
  //         userToken = currentObj.output
  //       })
  //       .catch(function(error) {
  //         currentObj.output = error
  //       })
  //   }
  // }
}
</script>
