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
                    v-model="email"
                    color="primary"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-dark mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Password"
                    :type="show ? 'text' : 'password'"
                    name="password"
                    hint="At least 8 characters"
                    prepend-icon="mdi-dark mdi-lock"
                    @click:append="show = !show"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  class="align-self-center"
                  color="#2D9CDB"
                  style="width: 95%"
                  @click="formSubmit"
                >
                  Login
                </v-btn>
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
  data() {
    return {
      usertoken: '',
      drawer: null,
      value: true,
      // rules: {
      //   required: (value) =>
      //     value === !value || 'Email or Password did not match.',
      //   min: (v) => v.length >= 8 || 'Min 8 characters'
      // },
      show: false
    }
  },
  // computed: {
  //   getUserToken() {
  //     return this.$store.state.userToken
  //   }
  // },
  // methods: {
  //   addUserToken() {
  //     this.$store.commit('assign', 'a2n435b')
  //     this.$store.commit('assign', 'a56345fb')
  //     console.log(this.$store.state.userToken)
  //   }
  // },
  // props: {
  //   source: String
  // },
  layout: 'auth',
  methods: {
    formSubmit(e) {
      this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then((response) => {
          if (this.$auth.loggedIn) {
            this.$router.push('/')
          } else {
            this.rules.emailPasswordMatch(false)
          }
        })
      // e.preventDefault()
      // this.$axios
      //   .post('login', {
      //     email: this.email,
      //     password: this.password
      //   })
      //   .then((response) => {
      //     this.$store.commit('SET_USER_TOKEN', response.data.success.token)
      //     console.log(this.$store.state.token)
      //     this.usertoken = 'Bearer ' + this.$store.state.token
      //     console.log(this.usertoken)
      //   })
      //   .catch(function(error) {
      //     console.log(error)
      //   })
    },
    formCheck(e) {
      console.log(this.usertoken)
      e.preventDefault()
      this.$axios
        .post('details', [], {
          headers: {
            'Content-Type': 'application/json',
            // eslint-disable-next-line prettier/prettier
            'Authorization': this.usertoken
          }
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
