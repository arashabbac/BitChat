////FactorSparklineChart = function() {
////    var options = {
////        series: [{
////            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
////        }],
////        chart: {
////            type: 'line',
////            width: 100,
////            height: 40,
////            sparkline: {
////                enabled: true
////            }
////        },
////        tooltip: {
////            fixed: {
////                enabled: false
////            },
////            x: {
////                show: false
////            },
////            y: {
////                title: {
////                    formatter: function (seriesName) {
////                        return ''
////                    }
////                }
////            },
////            marker: {
////                show: false
////            }
////        }
////    };

////    var chart = new ApexCharts(document.querySelector("#factorSparklineChart"), options);
////    chart.render();
////}

//FactorsCountPieChart = function (series, labels) {
//    $(document).ready(function () {
//        var options = {
//            chart: {
//                type: "pie",
//                height: 340,
//                toolbar:
//                {
//                    show: true,
//                }
//            },
//            plotOptions: {
//                pie: {
//                    size: undefined,
//                    customScale: 1,
//                    offsetX: 0,
//                    offsetY: 0,
//                    expandOnClick: true,
//                    dataLabels: {
//                        offset: 0
//                    },
//                    pie: {
//                        background: "transparent",

//                        labels: {
//                            show: true,
//                            name: {
//                                show: true,
//                                fontSize: "20px",
//                                fontFamily: 'iransans',
//                                color: "transparent",
//                                offsetY: 10
//                            },
//                            value: {
//                                show: true,
//                                fontSize: "18px",
//                                fontFamily: 'iransans',
//                                color: undefined,
//                                offsetY: 16,
//                            },
//                            total: {
//                                show: true,
//                                label: "Total",
//                                color: "#373d3f",
//                            },

//                        }
//                    }
//                }
//            },
//            legend: {
//                fontFamily: 'iransans',
//                position: 'bottom',
//                markers: {
//                    radius: 15,
//                    strokeWidth: 1,
//                },
//            },
//            dataLabels: {
//                style: {
//                    fontFamily: 'iransans',
//                }
//            },
//            responsive: [
//                {
//                    breakpoint: 1000,
//                    options: {
//                        plotOptions: {
//                            bar: {
//                                horizontal: false
//                            }
//                        },
//                        legend: {
//                            position: "bottom"
//                        }
//                    }
//                }
//            ],
//            labels: labels,
//            colors: ["#273c75", "#fbc531", "#e84118", "#009432"],
//            series: series,
//            tooltip: {
//                style: {
//                    fontSize: '14px',
//                    fontFamily: 'iransans',
//                },
//            }



//        }
//        var chart = new ApexCharts(
//            document.querySelector("#FactorsCountPieChart"),
//            options
//        );
//        chart.render();
//    })
//}
