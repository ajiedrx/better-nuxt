<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4">
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
            prepend-icon="mdi-calendar"
            readonly
            light
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable light>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)"
            >OK</v-btn
          >
        </v-date-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    modal: false
  })
}
</script>
