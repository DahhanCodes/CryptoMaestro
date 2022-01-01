
const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${searchTerm}&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO`);
    const second = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=${searchTerm}&market=USD&apikey=98J29VO1JNI4HWKO`);
    const third = await axios.get(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${searchTerm}&market=USD&interval=1min&apikey=98J29VO1JNI4HWKO`);
    const monthlyData = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${searchTerm}&market=USD&apikey=98J29VO1JNI4HWKO`);
    console.log(res.data);
    console.log(res.data['Meta Data']);
    console.log(second.data);
    console.log(second.data['Meta Data']);
    console.log(third.data);
    console.log(third.data['Meta Data']);
    console.log(monthlyData.data);
    console.log(monthlyData.data['Meta Data']);
    
   
  
// Variables for Crypto Search Criteria
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getUTCDate());
    var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getUTCDate())+' '+(today.getUTCHours())+':'+(today.getMinutes())+':'+'00';
   
    console.log(date);
    console.log(time);
    var coinSearched = (res.data['Meta Data']['3. Digital Currency Name'])
    var currentPrice = (res.data['Time Series (Digital Currency Daily)'][date]["4a. close (USD)"]);
    var weeklyChange = ((second.data['Time Series (Digital Currency Weekly)'][date]["1a. open (USD)"])-(second.data['Time Series (Digital Currency Weekly)'][date]["4a. close (USD)"]));
    var marketCap = (res.data['Time Series (Digital Currency Daily)'][date]["6. market cap (USD)"])
    var dayChange = ((res.data['Time Series (Digital Currency Daily)'][date]["1a. open (USD)"])-(res.data['Time Series (Digital Currency Daily)'][date]["4a. close (USD)"]));
    
    console.log(dayChange);
    
    document.getElementById("coinname").innerHTML = coinSearched;
    document.getElementById("price").innerHTML = currentPrice;
    document.getElementById("marketCap").innerHTML = marketCap;
    document.getElementById("dayChange").innerHTML = dayChange;
    document.getElementById("weeklyChange").innerHTML = weeklyChange;

 
})
const secondForm = document.querySelector('#stockSearchForm')
secondForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    var today = new Date();
    var estDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
    console.log(estDate);
    var stockTerm = secondForm.elements.query.value;
    
    stockTerm = stockTerm.toUpperCase();
    
    const stock = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stockTerm}/prev?adjusted=true&apiKey=lHJ4GPGobT8l6AGkzz_iHfotJDNhUCeM`);
    const info = await axios.get(`https://api.polygon.io/v1/meta/symbols/${stockTerm}/company?apiKey=lHJ4GPGobT8l6AGkzz_iHfotJDNhUCeM`);
    console.log(stock.data);
    console.log(info.data);
    var price = (stock.data['results']['0']['c']);
    var name = (info.data['name']);
    var marketCap = (info.data['marketcap']);
    var high = (stock.data['results']['0']['h']);
    var low = (stock.data['results']['0']['l']);

    document.getElementById("stockPrice").innerHTML = price;
    document.getElementById("tickerName").innerHTML = name;
    document.getElementById("stockMarketCap").innerHTML = marketCap;
    document.getElementById("high").innerHTML = high;
    document.getElementById("low").innerHTML = low;
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