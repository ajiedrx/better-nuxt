<template>
  <v-row align="center" justify="center">
    <chartjs-doughnut
      class="mb-0"
      :bind="true"
      :datasets="datasets"
      :labels="labels"
      :option="option"
      style="width: 800px; height: 400px"
    />
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [70, 20, 10],
          backgroundColor: ['#f36e60', '#ffdb3b', '#185190'],
          hoverBackgroundColor: ['#fbd2cd', '#fef5c9', '#d1e3f7']
        }
      ],
      labels: ['Productive', 'Unproductive', 'Neutral'],
      option: { responsive: true }
    }
  }
}
</script>
