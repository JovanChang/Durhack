// graph1 

var Canvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Inter";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Saving",
    data: [130, 169, 124, 124],
    lineTension: 0,
    fill: false,
    borderColor: '#769D93',
    backgroundColor: "#42887C80"
  };

var dataSecond = {
    label: "Expense",
    data: [127, 159, 114, 130],
    lineTension: 0,
    fill: false,
  borderColor: '#EF8A9A',
  backgroundColor: "#EF8A9A"
  };

var Data = {
  labels: ["Week1", "Week2", "Week3", "Week4"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      boxWidth: 80,
      fontColor: 'white'
    }
    },
    scales: {
      xAxes: [{
          gridLines: {
              display:false
          },
          position: "top"
      }],
      yAxes: [{
          gridLines: {
              display:false
          },
          ticks: {
            display: false
          }
      }]
  },
  responsive: true,
  plugins: {
    tooltip: {
        callbacks: {
            label: function (tooltipItem, data) {
                var label = myChart.data.labels[1.0];
                console.log("2");
                return 0;
            }
        }
    }
}
  
};

var lineChart = new Chart(Canvas, {
  type: 'bar',
  data: Data,
  options: chartOptions
});
 

// graph2