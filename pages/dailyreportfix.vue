<template>
  <v-container>
    <DatepickerComponent />
    <DailyrepComponent v-if="pm" />
    <DailyrepPMComponent v-else />
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      pm: false,
      layout: 'mainPM'
    }
  }
}
</script>
