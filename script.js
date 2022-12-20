

fetch("https://yh-finance.p.rapidapi.com/auto-complete").then(function (r) {
    return r.json()
}).then(function (data) {
    new Chart(document.getElementById("chart"), {
        type: "line",
        data: {
            labels: data.dates,
            datasets: [{
                label: "Stock Price",
                data: data.prices
            }]
        }
    })
});