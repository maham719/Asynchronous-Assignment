// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function fetchedData() {
    return new Promise(function (resolve) {
        return setTimeout(function () {
            console.log("Fetch Data");
            resolve("Data Fetched");
        }, 1000);
    });
}
function processData() {
    return new Promise(function (resolve) {
        return setTimeout(function () {
            console.log("Processing data");
            resolve("Data Processed");
        }, 2000);
    });
}
function executeSequentially() {
    fetchedData().then(function (data) { return console.log(data); });
    processData().then(function (data) { return console.log(data); });
}
executeSequentially();
