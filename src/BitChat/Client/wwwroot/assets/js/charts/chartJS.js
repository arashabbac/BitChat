TransactionsCountLineChart = function (factors, withdrawWallets, chargeWallets, shares, labels) {
    var transactionsCountChartCanvas = $("#TransactionCountLineChart").get(0).getContext("2d");

    var gradientStrokeFill_1 = transactionsCountChartCanvas.createLinearGradient(0, 0, 0, 450);
    gradientStrokeFill_1.addColorStop(1, 'rgba(255,255,255, 0.0)');
    gradientStrokeFill_1.addColorStop(0, 'rgba(102,78,235, 0.2)');

    var gradientStrokeFill_2 = transactionsCountChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    gradientStrokeFill_2.addColorStop(0, '#ff6258');

    var gradientStrokeFill_3 = transactionsCountChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_3.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    gradientStrokeFill_3.addColorStop(0, '#2196f330');

    var gradientStrokeFill_4 = transactionsCountChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_4.addColorStop(1, 'rgba(255, 255, 255 , 0)');
    gradientStrokeFill_4.addColorStop(0, 'rgb(25, 216, 149,0.2)');

    //var data_1_1 = [60, 75, 65, 40, 130, 145, 110, 145, 155, 149, 170, 20];
    //var data_1_2 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
    //var data_1_3 = [10, 24, 10, 40, 60, 23, 49, 51, 70, 10, 20, 102];
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [
            {
                label: 'فاکتور',
                data: factors,
                borderColor: infoColor,
                backgroundColor: gradientStrokeFill_1,
                borderWidth: 2
            },
            {
                label: 'برداشت کیف پول',
                data: withdrawWallets,
                borderColor: dangerColor,
                backgroundColor: gradientStrokeFill_2,
                borderWidth: 2
            },
            {
                label: 'شارژ کیف پول',
                data: chargeWallets,
                borderColor: primaryColor,
                backgroundColor: gradientStrokeFill_3,
                borderWidth: 2
            },
            {
                label: 'تسهیم',
                data: shares,
                borderColor: successColor,
                backgroundColor: gradientStrokeFill_4,
                borderWidth: 2
            },

        ]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        elements: {
            point: {
                radius: 3,
                backgroundColor: "#fff"
            },
            line: {
                tension: 0
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + toFarsiNumber(tooltipItem.yLabel);
                },
            }
        },
        legend: false,
        legendCallback: function (chart) {
            var text = [];
            text.push('<div class="chartjs-legend"><ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
                //console.log(chart.data.datasets[i]); // see what's inside the obj.
                text.push('<li style="font-size:11px">');
                text.push('<span style="width:8px;height:8px;background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                text.push(chart.data.datasets[i].label);
                text.push('</li>');
            }
            text.push('</ul></div>');
            return text.join("");
        },

        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    //display: true,
                    //labelString: 'User by time',
                    //fontSize: 12,
                    //lineHeight: 2
                },
                ticks: {
                    fontColor: '#101010',
                    fontFamily: 'iransans',
                    stepSize: 50,
                    min: 0,
                    max: 200,
                    autoSkip: true,
                    autoSkipPadding: 15,
                    maxRotation: 0,
                    maxTicksLimit: 10
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                }
            }],
            yAxes: [{
                ticks: {
                    //max: Math.max(factors),
                    min: 0,
                    stepSize: Math.min(factors),
                    fontColor: "#101010",
                    fontFamily: 'iransans',
                    beginAtZero: false,
                    callback: function (value) {
                        return toFarsiNumber(numberWithCommas(value));
                    },
                },
                gridLines: {
                    color: '#e2e6ec',
                    display: true,
                    drawBorder: false
                }
            }]
        }
    }

    if (window.transactionsCountChart != undefined) {
        window.transactionsCountChart.destroy();
    }
    window.transactionsCountChart = new Chart(transactionsCountChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
    document.getElementById('TransactionCountLineChartLegend').innerHTML = transactionsCountChart.generateLegend();
}

CustomersCountSparkLineChart = function (datas, labels) {
    var ctx = document.getElementById('CustomersCountSparkLineChart').getContext('2d');
    var gradientStrokeFill_1 = ctx.createLinearGradient(0, 100, 200, 0);
    gradientStrokeFill_1.addColorStop(0, '#1B146422');
    gradientStrokeFill_1.addColorStop(1, '#0652DD12');
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [{
            label: 'تعداد',
            //data: [320, 280, 300, 280, 300, 270, 350,417,254,214,315,414],
            data: datas,
            backgroundColor: gradientStrokeFill_1,
            borderColor: '#0652DD',
            borderWidth: 0,
            pointBackgroundColor: "#0652DD",
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBorderColor: '#fff',
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#eaeaea",
            pointHoverBorderColor: "#0652DD",
            pointHoverBorderWidth: 2,
            pointHitRadius: 6,
        }]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label: function (tooltipItem, data) {
                    return "تعداد: " + toFarsiNumber(data['datasets'][0]['data'][tooltipItem['index']]);
                },
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }
    if (window.customersSparkLineChart != undefined) {
        window.customersSparkLineChart.destroy();
    }
    var customersSparkLineChart = new Chart(ctx, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
}

FactorsCountPieChart = function (datas, labels) {
    var ctx = document.getElementById("FactorsCountPieChart").getContext('2d');

    var gradient1 = ctx.createLinearGradient(0, 0, 0, 450);
    gradient1.addColorStop(0.0, '#575fcf');
    gradient1.addColorStop(1.0, '#3c40c6');


    var gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
    gradient2.addColorStop(0, '#ffd32a');
    gradient2.addColorStop(1, '#ffa801');

    var gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, '#EA2027');
    gradient3.addColorStop(1, '#575fcf');

    if (window.myChart != undefined) {
        window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: datas, // Specify the data values array

                borderColor: ['#eaeaea'], // Add custom color border 
                backgroundColor: [gradient1, gradient2, gradient3], // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
        },
        options: {
            legend: {
                position: 'right',
                labels: {
                    //boxWidth: 5,
                    //boxHeight: 5,
                    usePointStyle: true,
                    //fontFamily:'iransans',                   
                }
            },
            tooltips: {
                mode: 'label',
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: (item, data) => toFarsiNumber(data.datasets[item.datasetIndex].data[item.index]),
                }
            },
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height
        }
    });
}

FactorsAmountPieChart = function (datas, labels) {
    var ctx = document.getElementById("FactorsAmountPieChart").getContext('2d');

    var gradient1 = ctx.createLinearGradient(0, 0, 0, 450);
    gradient1.addColorStop(0.0, '#575fcf');
    gradient1.addColorStop(1.0, '#3c40c6');


    var gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
    gradient2.addColorStop(0, '#ffd32a');
    gradient2.addColorStop(1, '#ffa801');

    var gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, '#EA2027');
    gradient3.addColorStop(1, '#575fcf');

    if (window.factorsAmountPieChart != undefined) {
        window.factorsAmountPieChart.destroy();
    }
    window.factorsAmountPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: datas, // Specify the data values array

                borderColor: ['#eaeaea'], // Add custom color border 
                backgroundColor: [gradient1, gradient2, gradient3], // Add custom color background (Points and Fill)
                borderWidth: 1,// Specify bar border width,
            }]
        },
        options: {
            legend: {
                position: 'right',
                labels: {
                    //boxWidth: 5,
                    //boxHeight: 5,
                    usePointStyle: true,
                    //fontFamily:'iransans',                   
                },
            },
            tooltips: {
                mode: 'label',
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: (item, data) => toFarsiNumber(numberWithCommas(data.datasets[item.datasetIndex].data[item.index])) + " ریال",
                }
            },
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height
        }
    });
}

OnlinePaymentCountSparkLineChart = function (datas, labels) {
    var ctx = document.getElementById('OnlinePaymentCountSparkLineChart').getContext('2d');
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [{
            label: 'تعداد',
            //data: [320, 280, 300, 280, 300, 270, 350, 417, 254, 214, 315, 414],
            data: datas,
            backgroundColor: 'rgba(52, 73, 94, 0.3)',
            //backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(52, 73, 94, 0.8)',
            borderWidth: 1,
        }]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        elements: {
            point: {
                radius: 0
            }
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label: function (tooltipItem, data) {
                    return "تعداد: " + toFarsiNumber(data['datasets'][0]['data'][tooltipItem['index']]);
                },
            },
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }

    if (window.onlineSparkLineChart != undefined) {
        window.onlineSparkLineChart.destroy();
    }
    var onlineSparkLineChart = new Chart(ctx, {
        type: 'bar',
        data: areaData,
        options: areaOptions
    });
}

WalletPaymentCountSparkLineChart = function (datas, labels) {
    var ctx = document.getElementById('WalletPaymentCountSparkLineChart').getContext('2d');
    var gradientStrokeFill_1 = ctx.createLinearGradient(0, 100, 200, 0);
    gradientStrokeFill_1.addColorStop(0, '#1289A7');
    gradientStrokeFill_1.addColorStop(1, '#12CBC4');
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [{
            label: 'تعداد',
            //data: [320, 280, 300, 280, 300, 270, 350, 417, 254, 214, 315, 414],
            data: datas,
            backgroundColor: gradientStrokeFill_1,
            borderColor: '#1289A780',
            //borderColor: '#12CBC4',
            //borderWidth: 0,
            //pointBackgroundColor: "#12CBC4",
            //pointRadius: 6,
            //pointBorderWidth: 2,
            //pointBorderColor: '#fff',
            //pointHoverRadius: 6,
            //pointHoverBackgroundColor: "#eaeaea",
            //pointHoverBorderColor: "#12CBC4",
            //pointHoverBorderWidth: 2,
            //pointHitRadius: 6,
        }]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label: function (tooltipItem, data) {
                    return "تعداد: " + toFarsiNumber(data['datasets'][0]['data'][tooltipItem['index']]);
                },
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }

    if (window.walletSparkLineChart != undefined) {
        window.walletSparkLineChart.destroy();
    }
    var walletSparkLineChart = new Chart(ctx, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
}

OnSpotPaymentCountSparkLineChart = function (check, pose, cash, labels) {
    var ctx = document.getElementById('OnSpotPaymentCountSparkLineChart').getContext('2d');

    var gradientStrokeFill_1 = ctx.createLinearGradient(0, 0, 0, 450);
    gradientStrokeFill_1.addColorStop(1, 'rgba(255,255,255, 0.0)');
    gradientStrokeFill_1.addColorStop(0, 'rgba(102,78,235, 0.2)');

    var gradientStrokeFill_2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
    gradientStrokeFill_2.addColorStop(0, '#EA202702');

    var gradientStrokeFill_3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_3.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
    gradientStrokeFill_3.addColorStop(0, '#00943202');

    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [
            {
                label: 'چک',
                data: check,
                backgroundColor: gradientStrokeFill_1,
                borderColor: infoColor,
                borderWidth: 0,
                pointBackgroundColor: infoColor,
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#eaeaea",
                pointHoverBorderColor: infoColor,
                pointHoverBorderWidth: 2,
                pointHitRadius: 6,
            },
            {
                label: 'نقدی',
                data: cash,
                backgroundColor: gradientStrokeFill_1,
                borderColor: successColor,
                borderWidth: 0,
                pointBackgroundColor: successColor,
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#eaeaea",
                pointHoverBorderColor: successColor,
                pointHoverBorderWidth: 2,
                pointHitRadius: 6,
            },
            {
                label: 'پوز',
                data: pose,
                backgroundColor: gradientStrokeFill_1,
                borderColor: warningColor,
                borderWidth: 0,
                pointBackgroundColor: warningColor,
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#eaeaea",
                pointHoverBorderColor: warningColor,
                pointHoverBorderWidth: 2,
                pointHitRadius: 6,
            },
        ]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        elements: {
            point: {
                radius: 0
            }
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + toFarsiNumber(tooltipItem.yLabel);
                },
            }
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }

    if (window.onSpotSparkLineChart != undefined) {
        window.onSpotSparkLineChart.destroy();
    }
    var onSpotSparkLineChart = new Chart(ctx, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
}

FactorsTypeDoughnutChart = function (datas) {

    if (window.Doughnut) {
        while (Doughnut.data.datasets.length > 0) {
            Doughnut.data.datasets.pop();
        }
    }
    var ctx = document.getElementById("FactorsTypeDoughnutChart").getContext('2d');

    var gradient1 = ctx.createLinearGradient(0, 0, 0, 450);
    gradient1.addColorStop(0.0, '#3bd949');
    gradient1.addColorStop(1.0, '#19d895');


    var gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
    gradient2.addColorStop(0, '#252C46');
    gradient2.addColorStop(1, '#0652DD');

    var gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, '#ffd32a');
    gradient3.addColorStop(1, '#F79F1F');

    var gradient4 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient4.addColorStop(0, '#ff0017');
    gradient4.addColorStop(1, '#6D214F');

    //if (window.Doughnut != undefined) {
    //    window.Doughnut.destroy();
    //}
    window.Doughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['تائید شده', 'درحال انتظار', 'عدم تائید پرداخت', 'مرجوع'],
            datasets: [{
                data: datas,
                borderColor: ['#eaeaea'],
                backgroundColor: [gradient1, gradient2, gradient3, gradient4],
                borderWidth: 1
            }]
        },
        options: {
            //aspectRatio: 1.15,
            cutoutPercentage: 75,
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                }
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                }
            },
            responsive: true,
            maintainAspectRatio: true,
        }
    });
}

SharedPerShareholdersBarChart = function (datas, labels) {
    var sharedBarChartCanvas = $("#SharedPerShareholdersBarChart").get(0).getContext("2d");

    if (window.sharedBarChart) {
        while (sharedBarChart.data.datasets.length > 0) {
            sharedBarChart.data.datasets.pop();
        }
    }
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [{
            label: 'مبلغ',
            //data: [320, 280, 300, 280, 300, 270, 350, 417, 254, 214, 315, 414],
            data: datas,
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgb(18, 137, 167 , 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'],
            borderColor: ['rgba(255, 99, 132)',
                'rgb(18, 137, 167)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(54, 162, 235)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'],
            borderWidth: 1,
        }]
    };

    window.sharedBarChart = new Chart(sharedBarChartCanvas, {
        type: 'horizontalBar',
        data: areaData,
        options: {
            //animation: {
            //    easing: "easeOutQuart"
            //},
            responsive: true,
            maintainAspectRatio: true,
            legend: false,
            stacked: true,
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + toFarsiNumber(numberWithCommas(tooltipItem.xLabel)) + " ریال ";
                    },
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        //display: true,
                        //fontSize: 12,
                        //lineHeight: 0.2
                    },
                    ticks: {
                        fontColor: '#101010',
                        fontFamily: 'iransans',
                        stepSize: 50000000,
                        min: 0,
                        //max: 150,
                        autoSkip: true,
                        autoSkipPadding: 15,
                        textStrokeWidth: 0,
                        maxRotation: 0,
                        maxTicksLimit: 10,
                        callback: function (value) {
                            return toFarsiNumber(numberWithCommas(value));
                        },
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        //color: 'transparent',
                        zeroLineColor: '#eeeeee',
                        tickWidth: 5,
                    }
                }],
                yAxes: [{
                    display: true,
                    barPercentage: 0.5,
                    scaleLabel: {
                        display: true,
                        fontSize: 12,
                        lineHeight: 0.2
                    },
                    ticks: {
                        fontColor: '#101010',
                        stepSize: 50000000,
                        min: 0,
                        autoSkip: true,
                        autoSkipPadding: 15,
                        textStrokeWidth: 0,
                        maxRotation: 0,
                        padding: 0,
                        fontFamily: 'iransans',
                        callback: function (value) {
                            return toFarsiNumber(numberWithCommas(value));
                        },
                    },
                    gridLines: {
                        display: true,
                    }
                }]
            },
            legend: {
                display: false
            },
            //legendCallback: function (chart) {
            //    var text = [];
            //    text.push('<div class="chartjs-legend"><ul>');
            //    for (var i = 0; i < chart.data.datasets.length; i++) {
            //        console.log(chart.data.datasets[i]); // see what's inside the obj.
            //        text.push('<li style="font-size:11px">');
            //        text.push('<span style="width:8px;height:8px;background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
            //        text.push(chart.data.datasets[i].label);
            //        text.push('</li>');
            //    }
            //    text.push('</ul></div>');
            //    return text.join("");
            //},
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    //document.getElementById('SharedPerShareholdersBarChartLegend').innerHTML = sharedBarChart.generateLegend();
}

CompanyIncomeSharedWageStackChart = function (company, share, wage, labels) {
    var stackedbarChartCanvas = $("#CompanyIncomeSharedWageStackChart").get(0).getContext("2d");

    var gradient1 = stackedbarChartCanvas.createLinearGradient(0, 0, 0, 450);
    gradient1.addColorStop(0.0, '#575fcf12');
    gradient1.addColorStop(1.0, '#3c40c6');


    var gradient2 = stackedbarChartCanvas.createLinearGradient(0, 0, 400, 400);
    gradient2.addColorStop(0, '#ffd32a12');
    gradient2.addColorStop(1, '#ffa801');

    var gradient3 = stackedbarChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, '#EA2027');
    gradient3.addColorStop(1, '#b71540');

    if (window.stackedbarChart != undefined) {
        window.stackedbarChart.destroy();
    }
    window.stackedbarChart = new Chart(stackedbarChartCanvas, {
        type: 'bar',
        data: {
            //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            labels: labels,
            datasets: [{
                label: "سهم شرکت",
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                //data: [55098457, 45345636, 44667897, 54000000, 38098950, 45950480, 53445670,36655432,43445533,54453452,13356642,42356633]
                data: company,
            },
            {
                label: "سهم طرف های حساب",
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                //data: [345454544, 20000000, 54989800, 34000076, 65000085, 40432321, 35232232 , 54442342,65442523,65645433,63332345,74654326]
                data: share
            },
            {
                label: "کارمزد",
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                //data: [30000000, 450000, 440000, 6500000, 1100000, 220000, 3400000,2100000,3200000,2300000,430000,5400000]
                data: wage,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: false,
            categoryPercentage: 0.5,
            stacked: true,
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ": " + toFarsiNumber(numberWithCommas(tooltipItem.yLabel)) + "ریال";
                    },
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        //display: true,
                        //labelString: 'User by time',
                        //fontSize: 12,
                        //lineHeight: 2
                    },
                    ticks: {
                        fontColor: '#101010',
                        fontFamily: 'iransans',
                        stepSize: 50,
                        min: 0,
                        max: 150,
                        autoSkip: true,
                        autoSkipPadding: 15,
                        maxRotation: 0,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: 'transparent',
                        zeroLineColor: '#eeeeee'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        //display: true,
                        //labelString: 'Number of users',
                        //fontSize: 12,
                        //lineHeight: 2
                    },
                    ticks: {
                        fontColor: '#101010',
                        //stepSize: 5000000,
                        min: 0,
                        //max: 150,
                        autoSkip: true,
                        autoSkipPadding: 15,
                        maxRotation: 0,
                        maxTicksLimit: 10,
                        fontFamily: 'iransans',
                        callback: function (value) {
                            return toFarsiNumber(numberWithCommas(value));
                        },
                    },
                    gridLines: {
                        drawBorder: false
                    }
                }]
            },
            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="chartjs-legend"><ul>');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    //console.log(chart.data.datasets[i]); // see what's inside the obj.
                    text.push('<li style="font-size:11px">');
                    text.push('<span style="width:8px;height:8px;background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                    text.push(chart.data.datasets[i].label);
                    text.push('</li>');
                }
                text.push('</ul></div>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });
    document.getElementById('CompanyIncomeSharedWageStackChartLegend').innerHTML = stackedbarChart.generateLegend();
}

WalletTransactionsCountLineChart = function (withdrawWallets, chargeWallets, labels) {
    var walletTransactionsCountChartCanvas = $("#WalletTransactionsCountLineChart").get(0).getContext("2d");

    var gradientStrokeFill_2 = walletTransactionsCountChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    gradientStrokeFill_2.addColorStop(0, '#ff6258');

    var gradientStrokeFill_3 = walletTransactionsCountChartCanvas.createLinearGradient(0, 0, 0, 400);
    gradientStrokeFill_3.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    gradientStrokeFill_3.addColorStop(0, '#2196f330');

    //var data_1_1 = [60, 75, 65, 40, 130, 145, 110, 145, 155, 149, 170, 20];
    //var data_1_2 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
    //var data_1_3 = [10, 24, 10, 40, 60, 23, 49, 51, 70, 10, 20, 102];
    var areaData = {
        //labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        labels: labels,
        datasets: [
            {
                label: 'برداشت کیف پول',
                data: withdrawWallets,
                borderColor: dangerColor,
                backgroundColor: gradientStrokeFill_2,
                borderWidth: 2
            },
            {
                label: 'شارژ کیف پول',
                data: chargeWallets,
                borderColor: primaryColor,
                backgroundColor: gradientStrokeFill_3,
                borderWidth: 2
            },
        ]
    };
    var areaOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        elements: {
            point: {
                radius: 3,
                backgroundColor: "#fff"
            },
            line: {
                tension: 0
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + toFarsiNumber(numberWithCommas(tooltipItem.yLabel));
                },
            }
        },
        legend: false,
        legendCallback: function (chart) {
            var text = [];
            text.push('<div class="chartjs-legend"><ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
                //console.log(chart.data.datasets[i]); // see what's inside the obj.
                text.push('<li style="font-size:11px">');
                text.push('<span style="width:8px;height:8px;background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
                text.push(chart.data.datasets[i].label);
                text.push('</li>');
            }
            text.push('</ul></div>');
            return text.join("");
        },

        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    //display: true,
                    //labelString: 'User by time',
                    //fontSize: 12,
                    //lineHeight: 2
                },
                ticks: {
                    fontColor: '#101010',
                    fontFamily: 'iransans',
                    stepSize: 50,
                    min: 0,
                    max: 200,
                    autoSkip: true,
                    autoSkipPadding: 15,
                    maxRotation: 0,
                    maxTicksLimit: 10
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                }
            }],
            yAxes: [{
                ticks: {
                    //max: Math.max(factors),
                    min: 0,
                    stepSize: Math.min(chargeWallets),
                    fontColor: "#101010",
                    fontFamily: 'iransans',
                    beginAtZero: false,
                    callback: function (value) {
                        return toFarsiNumber(numberWithCommas(value));
                    },
                },
                gridLines: {
                    color: '#e2e6ec',
                    display: true,
                    drawBorder: false
                }
            }]
        }
    }

    if (window.walletTransactionsCountChart != undefined) {
        window.walletTransactionsCountChart.destroy();
    }
    window.walletTransactionsCountChart = new Chart(walletTransactionsCountChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
    document.getElementById('WalletTransactionsCountLineChartLegend').innerHTML = walletTransactionsCountChart.generateLegend();
}


function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}

// Return with commas in between
var numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//function ChangeActiveClass(isMonthly) {
//    var monthlyBtn = $(".sales-mini-tabs .nav-item .nav-link").first();
//    var dailyBtn = $(".sales-mini-tabs .nav-item .nav-link").last();

//    if (isMonthly) {
//        dailyBtn.removeClass("active");
//        monthlyBtn.addClass("active");
//    }
//    else if (!isMonthly) {
//        monthlyBtn.removeClass("active");
//        dailyBtn.addClass("active");
//    }
//}

function dynamicColor(index) {
    var graphColors = [];
    var graphOutlines = [];

    for (var i = 0; i <= index; i++) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        var graphBackground = "rgb("
            + randomR + ", "
            + randomG + ", "
            + randomB + "0.2)";
        graphColors.push(graphBackground);

        var graphOutline = "rgb("
            + (randomR) + ", "
            + (randomG) + ", "
            + (randomB) + ")";
        graphOutlines.push(graphOutline);
    }

    return graphColors, graphOutline;
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}