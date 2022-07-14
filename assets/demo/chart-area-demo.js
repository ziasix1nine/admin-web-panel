// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'SF Pro Display,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
    datasets: [{
      label: "Sales",
      lineTension: 0.3,
      backgroundColor: "rgba(0,172,101,0.58)",
      borderColor: "rgba(38,162,210,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(0,172,101,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "rgba(0,172,101,1)",
      pointHitRadius: 20,
      pointBorderWidth: 3,
      data: [2000, 3062, 2663, 1834, 1887, 2862, 3174, 3359, 2549, 2459, 3651, 3984, 3451,1002, 3062, 2663, 1834, 1887, 2862, 3174, 3359, 2549, 2459, 3651, 3984, 3451],
    }],
  },

  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 30
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 9000,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
