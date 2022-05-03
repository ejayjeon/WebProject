<template lang="">
  <div>
    <canvas id="staking-chart" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
export default {
  methods: {
    chart() {
      const ctx = document.querySelector("#staking-chart").getContext("2d");
      let delayed;
      const stakingChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["6Months", "9Months", "12Months"],
          datasets: [
            {
              label: "Line Chart",
              data: [3.2, 4.2, 6.2],
              borderWidth: 0.5,
              stacked: "combined",
              borderColor: "#999999",
              padding: "10px",
              fill: false,
              pointStyle: "circle",
              pointRadius: 5,
              backgroundColor: [
                "rgba(225, 122, 24, .8)",
                "rgba(225, 122, 24, .8)",
                "rgba(225, 122, 24, .8)",
              ],
              pointHoverRadius: 15,
              tension: 0.1,
              order: 0,
            },
            {
              label: "Bar Chart",
              data: [3, 4, 6],
              backgroundColor: [
                "rgba(225, 122, 24, .8)",
                "rgba(225, 122, 24, .8)",
                "rgba(225, 122, 24, .8)",
              ],
              borderWidth: 1,
              barThickness: 60,
              stacked: "combined",
              type: "bar",
            },
          ],
        }, // data
        options: {
          responsive: true,
          // animation: {
          //   duration: 3000,
          // },
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            x: { display: false, title: { display: false } },
            y: {
              beginAtZero: true,
              stacked: true,
              min: 0,
              max: 7,
            },
          },
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    },
  },
  mounted() {
    this.chart();
  },
  data() {
    return {
      stakingChart: null,
    };
  },
};
</script>
<style lang=""></style>
