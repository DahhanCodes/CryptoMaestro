const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${searchTerm}&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO`);
    console.log(res.data);
    console.log(res.data['Meta Data']);
   
  
// Variables for Crypto Search Criteria

    var coinSearched = (res.data['Meta Data']['3. Digital Currency Name'])
    var dailyHigh = (res.data['Time Series (Digital Currency Daily)']["2021-12-27"]["2a. high (USD)"])
    var dailyClose = (res.data['Time Series (Digital Currency Daily)']["2021-12-27"]["4a. close (USD)"])
    var marketCap = (res.data['Time Series (Digital Currency Daily)']["2021-12-27"]["6. market cap (USD)"])

    document.getElementById("coinname").innerHTML = coinSearched;
    document.getElementById("dailyhigh").innerHTML = dailyHigh;
    document.getElementById("closeprice").innerHTML = dailyClose;
    document.getElementById("marketcap").innerHTML = marketCap;

    
// Object.values(res.data['Meta Data']).forEach(element => {
//     console.log(element)
// });
    
    
    
    
    
    
    
    // var info = [res.data]
    // console.log(info)
})




// // ETHER //
// fetch(urlETH)
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (res) {
//     console.log(res);
//   });

// // BITCOIN//
// fetch(urlBTC)
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (res) {
//     console.log(res);

//   });

// // CARDANO //
// fetch(urlCardano)
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (res) {
//     console.log(res);
//   });



// <!-- API KEY -->
//  98J29VO1JNI4HWKO
