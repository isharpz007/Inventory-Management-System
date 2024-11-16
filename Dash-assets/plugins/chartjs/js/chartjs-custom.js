$(function () {
  // chart1

  var ctx = document.getElementById("chart1").getContext("2d");

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke1.addColorStop(0, "#005bea");
  gradientStroke1.addColorStop(1, "#00c6fb");

  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke2.addColorStop(0, "#ff6a00");
  gradientStroke2.addColorStop(1, "#ee0979");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Th", "Fr", "Sa", "Su"],
      datasets: [
        {
          label: "Google",
          data: [10, 20, 35, 10, 27, 11, 20],
          backgroundColor: [gradientStroke1],
          lineTension: 0.4,
          pointRadius: "0",
          pointHoverRadius: "0",
          borderColor: [gradientStroke1],
          borderWidth: 4,
          fill: {
            target: "origin",
            above: "rgb(13 110 253 / 15%)", // Area will be red above the origin
            //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
          },
        },
        {
          label: "Facebook",
          data: [5, 30, 16, 23, 18, 14, 5],
          backgroundColor: [gradientStroke2],
          tension: 0.4,
          pointRadius: "0",
          pointHoverRadius: "0",
          borderColor: [gradientStroke2],
          borderWidth: 4,
          fill: {
            target: "origin",
            above: "rgb(252 24 90 / 15%)", // Area will be red above the origin
            //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
          },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // chart2
  var ctx = document.getElementById("chart2").getContext("2d");

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke1.addColorStop(0, "#005bea");
  gradientStroke1.addColorStop(1, "#00c6fb");

  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke2.addColorStop(0, "#ff6a00");
  gradientStroke2.addColorStop(1, "#ee0979");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [
        {
          label: "Sales",
          data: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
          tension: 0.4,
          backgroundColor: [gradientStroke1],
          borderColor: [gradientStroke1],
          borderWidth: 0,
        },
        {
          label: "Visits",
          data: [15, 30, 22, 55, 14, 35, 20, 35, 20, 15, 18, 5],
          tension: 0.4,
          backgroundColor: [gradientStroke2],
          borderColor: [gradientStroke2],
          borderWidth: 0,

          fill: {
            target: "origin",
            above: "rgb(238 9 121 / 5%)", // Area will be red above the origin
            below: "rgb(238 9 121 / 5%)", // And blue below the origin
          },
        },
      ],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    options: {
      borderRadius: 30,
      categoryPercentage: 0.3,
      maintainAspectRatio: false,
      //cutout: 130,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });

  // chart3
  var ctx = document.getElementById("chart3").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "#0d6efd",
            "#6f42c1",
            "#d63384",
            "#fd7e14",
            "#15ca20",
            "#0dcaf0",
          ],
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
    },
  });

  // chart4
  var ctx = document.getElementById("chart4").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "#0d6efd",
            "#6f42c1",
            "#d63384",
            "#fd7e14",
            "#15ca20",
            "#0dcaf0",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
    },
  });

  // chart6
  var ctx = document.getElementById("chart6").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Red", "Purple", "Yellow", "Grey", "Green"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "#0d6efd",
            "#6f42c1",
            "#d63384",
            "#fd7e14",
            "#15ca20",
            "#0dcaf0",
          ],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  });

  // chart7
  var ctx = document.getElementById("chart7").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      datasets: [
        {
          label: "Google",
          data: [18, 25, 14, 12, 17, 8, 10],
          backgroundColor: ["#fd3550"],
          lineTension: 0,
          borderColor: ["#fd3550"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      barPercentage: 0.5,
      categoryPercentage: 0.7,
      indexAxis: "y",
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // chart8
  var ctx = document.getElementById("chart8").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      datasets: [
        {
          type: "bar",
          label: "Google",
          data: [6, 20, 14, 12, 17, 8, 10],
          backgroundColor: ["#008cff"],
          lineTension: 0.4,
          borderColor: ["#008cff"],
          borderWidth: 1,
        },
        {
          type: "line",
          label: "Facebook",
          data: [5, 30, 16, 23, 8, 14, 11],
          backgroundColor: ["#fd3550"],
          tension: 0.4,
          borderColor: ["#fd3550"],
          borderWidth: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // chart9
  var ctx = document.getElementById("chart9").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      datasets: [
        {
          label: "Facebook",
          data: [5, 30, 16, 23, 8, 14, 2],
          backgroundColor: ["#15ca20"],
          fill: {
            target: "origin",
            above: "rgb(21 202 32 / 20%)", // Area will be red above the origin
            //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
          },
          tension: 0.4,
          borderColor: ["#15ca20"],
          borderWidth: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
