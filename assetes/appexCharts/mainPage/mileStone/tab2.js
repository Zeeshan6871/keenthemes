var option1 = {
    series: [{
        name: "Profit",
        data:  [35, 60, 35, 50, 45, 30]
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
            columnWidth: ["20%"],
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
                colors: "#838080",
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
                colors: "#838080",
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
    colors: ["#20d489"],
    grid: {
        borderColor: "#fff",
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: !0
            }
        }
    }
};

var tab1 = new ApexCharts(document.querySelector("#stats_widget_2_chart_2"), option1);
tab1.render();
