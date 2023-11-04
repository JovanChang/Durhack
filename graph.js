// graph1 

var Canvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Inter";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Saving",
    data: [130, 169, 144, 124],
    lineTension: 0,
    fill: false,
    borderColor: '#769D93',
    backgroundColor: "#42887C80"
  };

var dataSecond = {
    label: "Expense",
    data: [100, 59, 64, 54],
    lineTension: 0,
    fill: false,
  borderColor: '#EF8A9A',
  backgroundColor: "#EF8A9A"
  };

var Data = {
  labels: ["Jan", "Feb", "March", "April"],
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
          }
      }],
      yAxes: [{
          gridLines: {
              display:false
          }   
      }]
  },
  responsive: true,
};

var lineChart = new Chart(Canvas, {
  type: 'bar',
  data: Data,
  options: chartOptions
});
 

// graph2