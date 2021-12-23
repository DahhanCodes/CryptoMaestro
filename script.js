const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${searchTerm}&market=USD&interval=5min&apikey=98J29VO1JNI4HWKO`);
    console.log(res.data);
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
