var option1 = {
    series: [{
        name: "Profit",
        data: [40, 20, 50, 50, 55, 45]
    }],
    chart: {
        fontFamily: "inherit",
        type: "bar",
        height:["100%"],
        width:["100%"],
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: ["30%"],
            borderRadius: 4
        }
    },
    legend: {
        show: !1
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    xaxis: {
        crosshairs: {
            show: !1
        },
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            style: {
                colors: "#823FD9",
                fontSize: "12px"
            }
        }
    },
    yaxis: {
        crosshairs: {
            show: !1
        },
        labels: {
            style: {
                colors: "#823FD9",
                fontSize: "12px"
            }
        }
    },
    states: {
        normal: {
            filter: {
                type: "none",
                value: 0
            }
        },
        hover: {
            filter: {
                type: "none"
            }
        },
        active: {
            allowMultipleDataPointsSelection: !1,
            filter: {
                type: "none",
                value: 0
            }
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        style: {
            fontSize: "12px"
        },
        y: {
            formatter: function(e) {
                return "$" + e + "k"
            }
        }
    },
    colors: ["#661DC5"],
    grid: {
        borderColor: "#661DC5",
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: !0
            }
        }
    }
};

var TrevaChart = new ApexCharts(document.querySelector("#sidebar_tab_5_chart"), option1);
TrevaChart.render();
