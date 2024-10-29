var options = {
    chart: {
        type: 'donut',
        height: '100%', 
    },
    series: [30, 40, 25],
    labels: ["Angular", "CSS", "HTML"], 
    fill: {
        opacity: 1
    },
    dataLabels: {
        enabled: false 
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function(value) {
                return value + 'k'; 
            }
        }
    },
    colors: ['#28a745', '#ffc107', '#007bff'],
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200 
            }
        }
    }]
};


(function() {
    var chartElement = document.querySelector("#stats_widget_1_chart");
    if (chartElement) {
        var salesShareChart = new ApexCharts(chartElement, options);
        salesShareChart.render();       
    }
})();
