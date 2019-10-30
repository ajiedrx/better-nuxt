<template>
  <v-container>
    <div class="card">
      <div class="card-img-bottom">
        <chartjs-doughnut
          :bind="true"
          :datasets="datasets"
          :labels="labels"
          :option="option"
        />
      </div>
    </div>
  </v-container>
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
      option: {}
    }
  }
}
</script>
