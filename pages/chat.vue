<template>
  <v-container>
    <v-row>
      <h3 style="color: #1592E6">{{ teamProps.teamName }}</h3>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row v-for="chat in chats" :key="chat.message">
          <v-card flat>
            <v-card-title>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar color="accent"></v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  {{ chat.name }}
                </v-list-item-content>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
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
          message: 'Badumtss',
          self: true
        },
        {
          avatar: '',
          name: 'Ega',
          message: 'Hiyahiyahiya',
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
