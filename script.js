let btc = document.getElementById("bitcoin")
let cn = document.getElementById("coin")
let tt = document.getElementById("tether")
let etc = document.getElementById("ethereum")

let settings ={
    "async": true,
    "scrossdomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccoin%2Cethereum%2Ctether&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
      btc.innerHTML = response.Bitcoin.usd;  
      cn.innerHTML = response.Coin.usd;  
      tt.innerHTML = response.Tether.usd;  
      etc.innerHTML = response.Ethereum.usd;  
});