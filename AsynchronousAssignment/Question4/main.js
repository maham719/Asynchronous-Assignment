// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.5) {
                resolve("Data Fetched Successfully again!");
            }
            else {
                reject("Data Fetch Failed");
            }
        }, 1000);
    });
}
fetchWithError().then(function (data) { return console.log(data); }).catch(function (error) { return console.log(error); });
