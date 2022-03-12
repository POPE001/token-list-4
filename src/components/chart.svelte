<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  export let active = 0;

 
const data = {
  labels: ['Active', 'Inactive',],
  datasets: [
    {
      label: 'Dataset 1',
      data: [active,5],
      backgroundColor: ["#482466","#6B81C0"]
    }
  ]
};
  const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Mining activties'
      }
    }
  },
};
  onMount (()=>{
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, config);

  })

  // function renderChart() {
  //   var ctx = document.getElementById("myChart").getContext("2d");
  //   var chart = new Chart(ctx, config);
  // }
console.log("active :",active);

</script>
<canvas class="myChart" id="myChart"></canvas>
<!-- <button on:click={renderChart}>Load</button> -->

<style>
  .myChart{
    max-width: 100%;
    max-height: 100%;
  }
</style>