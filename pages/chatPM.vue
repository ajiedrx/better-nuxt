<template>
  <v-container>
    <!-- <v-row>
      <h3 style="color: #1592E6">{{ teamProps.teamName }}</h3>
    </v-row>
    <v-row>
      <v-col>
        <v-row v-for="chat in chats" :key="chat.message">
          <v-card color="#F2F2F2" class="pa-0" flat light>
            <v-row dense>
              <v-col>
                <v-row>
                  <v-card-avatar>
                    <v-avatar color="primary"></v-avatar>
                  </v-card-avatar>
                  <p class="ml-5 mt-3">{{ chat.name }}</p>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="pb-1" dense no-gutters>
              <v-col>
                <v-card width="45"></v-card>
              </v-col>
              <v-col class="mt-0">
                <v-card-text>{{ chat.message }}</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row> -->
    <v-card dense light flat>
      <v-card-text> Fitur chat masih dalam pengembangan. </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: 'mainPM',
  data() {
    return {
      teamProps: [
        {
          teamName: 'Team Name'
        }
      ],
      chats: [
        {
          avatar: '',
          name: 'Ajie',
          message: 'Badumdzf',
          self: true
        },
        {
          avatar: '',
          name: 'Ega',
          message: 'Hiyahiyahi',
          self: false
        },
        {
          avatar: '',
          name: 'Ega',
          message: 'Duarnmek',
          self: false
        },
        {
          avatar: '',
          name: 'Aldi',
          message: 'Opo rek',
          self: false
        }
      ]
    }
  }
}
</script>
