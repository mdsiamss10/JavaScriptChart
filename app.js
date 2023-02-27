function createChart() {
  // Get input values
  const xAxisTitle = document.getElementById("xAxisTitle").value;
  const xAxisData = document.getElementById("xAxisData").value;
  const yAxisTitle = document.getElementById("yAxisTitle").value;
  const yAxisData = document.getElementById("yAxisData").value;
  const checkbox = document.getElementById("switch");

  if (
    xAxisTitle === "" ||
    xAxisData == "" ||
    yAxisData == "" ||
    yAxisTitle == ""
  ) {
    alert("Add datas correctly.");
    return;
  }

  // Split data into arrays
  const xAxisDataArray = xAxisData.split(" ");
  const yAxisDataArray = yAxisData.split(" ");

  // Create chart data object
  const chartData = {
    labels: xAxisDataArray,
    datasets: [
      {
        label: yAxisTitle,
        data: yAxisDataArray,
        borderWidth: 2,
        borderColor: "#00BFFF",
        backgroundColor: "transparent",
        pointRadius: 0,
        borderRadius: checkbox.checked ? 100 : 0,
        lineTension: checkbox.checked ? 0.5 : 0,
        pointBackgroundColor: "#00BFFF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHitRadius: 10,
        pointRadius: 0,
      },
    ],
  };

  // Create chart
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      animation: {
        duration: 1000,
        easing: "easeInOutCubic",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });

  // Add event listener to checkbox
  checkbox.addEventListener("change", function () {
    myChart.data.datasets[0].borderRadius = checkbox.checked ? 100 : 0;
    myChart.data.datasets[0].lineTension = checkbox.checked ? 0.5 : 0;
    myChart.update();
  });
}
