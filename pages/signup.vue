<template>
  <v-app id="inspire" style="background: #f2f2f2; height: 100%">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" color="#343a40">
              <v-toolbar color="#2D9CDB">
                <v-toolbar-title>Trackey</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="name"
                    prepend-icon="mdi-dark mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-dark mdi-email"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Username"
                    name="username"
                    prepend-icon="mdi-dark mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
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
                  >Login</v-btn
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
  layout: 'auth',
  data: () => ({
    drawer: null
  })
}
</script>
