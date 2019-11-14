<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-pencil"
            label="Team Name"
            placeholder="Tim Skuy"
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-clock"
            label="Working Time"
            placeholder="8"
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5 pt-3" light flat>
          <v-text-field
            append-icon="mdi-key"
            label="Team Code"
            placeholder="7UWVQ"
            readonly
            light
          >
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-tabs v-model="tab" light left icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Customize Apps Category
        </v-tab>

        <v-tab href="#tab-2">
          Customize Tasks
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-' + 1">
          <v-card light flat tile>
            <v-row
              v-for="app in apps"
              :key="app.name"
              class="mb-0 mt-0 pt-1"
              no-gutters
            >
              <v-col>
                <v-card-text class="mt-2 text-center">{{
                  app.name
                }}</v-card-text>
              </v-col>
              <v-divider class="mr-5" vertical></v-divider>
              <v-col cols="3">
                <v-card flat light>
                  <v-select
                    :items="vselectitems"
                    label="Category"
                    class="px-5 mx-5"
                    hover
                  ></v-select>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-' + 2">
          <v-card light flat tile>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-toolbar-title>My CRUD</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark class="mb-2" v-on="on"
                        >New TASK</v-btn
                      >
                    </template>
                    <v-card light>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.name"
                                label="Member"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.calories"
                                label="Task"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.fat"
                                label="Deadline"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.carbs"
                                label="Note"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close"
                          >Cancel</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="save"
                          >Save</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  edit
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                  delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'mainPM',
  data() {
    return {
      tab: null,
      apps: [
        {
          name: 'youtube.com',
          value: ''
        },
        {
          name: 'Netbeans IDE',
          value: ''
        },
        {
          name: 'Php Storm',
          value: ''
        },
        {
          name: 'Adobe XD',
          value: ''
        }
      ],
      vselectitems: ['Productive', 'Unproductive', 'Neutral'],
      selectvalues: [true, false, null],
      dialog: false,
      headers: [
        {
          text: 'Member',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Task', value: 'calories' },
        { text: 'Deadline', value: 'fat' },
        { text: 'Note', value: 'carbs' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'Ajie DR',
          calories: 'Fix dashboard',
          fat: '29/10/30',
          carbs: 'semangat',
          protein: 4.0
        },
        {
          name: 'Ajie DR',
          calories: 'Form daily scrum',
          fat: '29/10/30',
          carbs: 'semangat',
          protein: 4.0
        },
        {
          name: 'Daegal Prayoga',
          calories: 'Fix login api',
          fat: '29/10/30',
          carbs: 'semangat',
          protein: 4.0
        },
        {
          name: 'Aldi Izzaldi',
          calories: 'Prototype',
          fat: '29/10/30',
          carbs: 'semangat',
          protein: 4.0
        },
        {
          name: 'Astin IC',
          calories: 'Class diagram',
          fat: '29/10/30',
          carbs: 'semangat',
          protein: 4.0
        }
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.desserts.splice(index, 1)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
