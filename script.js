// var symbol = "BTC"

var urlETH = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO";
var urlBTC = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO";
var urlCardano ="https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ADA&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO";

// ETHER //
fetch(urlETH)
  .then(function (data) {
    return data.json();
  })
  .then(function (res) {
    console.log(res);
  });

// BITCOIN//
fetch(urlBTC)
  .then(function (data) {
    return data.json();
  })
  .then(function (res) {
    console.log(res);

  });

// CARDANO //
fetch(urlCardano)
  .then(function (data) {
    return data.json();
  })
  .then(function (res) {
    console.log(res);
  });


  
// <!-- API KEY -->
//  98J29VO1JNI4HWKO
