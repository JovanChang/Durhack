// graph1 

var Canvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Saving",
    data: [200, 169, 144, 124, 210, 160, 134, 150, 108, 180, 190, 210],
    lineTension: 0,
    fill: false,
    borderColor: '#769D93'
  };

var dataSecond = {
    label: "Expense",
    data: [100, 59, 64, 54, 28, 89, 54, 100, 88, 90, 80, 50],
    lineTension: 0,
    fill: false,
  borderColor: '#EF8A9A'
  };

var Data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'white'
    },
    scales: {
         x: {
           grid: {
             display: false
           }
         },
         y: {
           grid: {
             display: false
           }
         }
        }
    }
};

var lineChart = new Chart(Canvas, {
  type: 'line',
  data: Data,
  options: chartOptions
});
 

// graph2