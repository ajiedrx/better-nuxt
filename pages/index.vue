<template>
  <v-layout column justify-center align-center>
    <v-flex v-if="!team">
      <v-text>You don't have any team yet</v-text>
    </v-flex>
    <v-item-group v-else>
      <v-container class="pa-0">
        <v-row>
          <v-col v-for="card in cards" :key="card.title" cols="12" md="10">
            <v-item>
              <v-card height="200px" min-width="250px" hover light>
                <v-card-title
                  class="justify-center"
                  v-text="card.title"
                ></v-card-title>
                <div class="text-center">
                  <v-avatar color="primary"></v-avatar>
                </div>
                <v-card-text
                  class="text-center mx-0 pa-2"
                  v-text="card.subtitle"
                ></v-card-text>
                <v-divider class="mx-auto mb-3" width="150px"></v-divider>
                <div class="text-center">Project Manager</div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-layout>
</template>

<script>
export default {
  layout: 'default',
  team: false,
  data() {
    return {
      team: true,
      cards: [
        {
          title: 'Team name',
          subtitle: 'PM Name',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'
        }
      ]
    }
  }
}
</script>
