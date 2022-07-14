  Highcharts.chart('container', {

  chart: {
    style: {
      fontFamily: 'SF Pro Display',
      
      fontSize:'18',
      color: "#f00"
       }
  },

   title: {
      style: {
         color: '#F00',

         font: 'SF Pro Display'
      }
   },

  title: {
    text: 'Total Cumulative Sales'
   
  },

  subtitle: {
    text: 'Current Month Vs Previous Month'
  },



  yAxis: {
    title: {
      text: 'Sales',

    }
  },

  xAxis: {
      
      lineColor: '#000',
      tickColor: '#000',
      labels: {
         style: {
            
            font: '11px Trebuchet MS, Verdana, sans-serif'
         }
      },
      title: {
         style: {
            fontSize: '12px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'

         }            
      }
   },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    name: 'This Month',
    data: [3934, 2503, 7177, 9658, 7031, 1931, 3733, 4135]
  }, 

  {
    name: 'Last Month',
    data: [4916, 4064, 9742, 9851, 2490, 3282, 3121, 4434,2916, 2064, 2742, 2981, 3490, 3282, 3121, 4434,2916, 2064, 2742, 2951, 3240, 1282, 8121, 434, 9742, 9851, 2490, 1282, 8121, 1434,1434]
  }
  ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});