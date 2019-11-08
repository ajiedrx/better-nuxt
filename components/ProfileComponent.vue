<template>
  <v-container fluid>
    <div class="text-center mt-5 pl-5">
      <v-list-item-avatar size="120" justify-center>
        <v-hover v-slot:default="{ hover }">
          <v-img :src="image">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-out-fast-in grey darken-2 v-card--reveal display-3 white--text full text-center"
              >
                <v-btn
                  icon
                  text
                  color="white"
                  class="btn-update-profile"
                  @click="onPickImage"
                >
                  <v-icon>mdi-camera</v-icon>
                </v-btn>
              </div>
            </v-expand-transition></v-img
          >
        </v-hover>
      </v-list-item-avatar>
    </div>
    <h2 class="text-center" style="color: #2C3144">Buddy</h2>
    <p class=" text-center subheading" style="color: #2C3144">
      buddy@buddy.com
    </p>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="10">
          <v-form v-model="profile" class="mt-5">
            <v-card light>
              <v-row class="pl-5 pt-5 pr-5">
                <v-col>
                  <v-text-field
                    v-model="name"
                    label="Name"
                    append-icon="mdi-pencil"
                  ></v-text-field>
                  <v-text-field
                    v-model="username"
                    label="User name"
                    append-icon="mdi-pencil"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
                <v-divider class="mx-4" vertical></v-divider>
                <v-col>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Pick date"
                        append-icon="mdi-calendar"
                        readonly
                        light
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable light>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-dialog>
                  <v-select
                    v-model="gender"
                    :items="items"
                    label="Gender"
                  ></v-select>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    append-icon="mdi-pencil"
                    type="password"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="justify-end">
                <v-btn class="mr-2" color="#2D9CDB">SAVE</v-btn>
                <v-btn class="mr-5 mb-3 pr-3">DISCARD</v-btn>
                <v-btn class="mr-5 mb-3 pr-3" color="red" @click="logout"
                  >LOGOUT</v-btn
                >
              </v-row>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/icon.png'
    }
  },
  data: () => ({
    items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
    date: new Date().toISOString().substr(0, 10),
    modal: false
  }),
  methods: {
    onPickImage() {
      this.$refs.formUpdateProfile.click()
    },
    onImagePicked(event) {
      const file = event.target.files
      console.log(file)
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.full {
  height: 100%;
  width: 100%;
  text-align: center;
}
.btn-update-profile {
  margin: auto;
}
</style>
