const fetch = require('node-fetch');
var inputs = process.argv;
var month = inputs[2];
var date = inputs[3];

var url = "https://history.muffinlabs.com/date/" + month + "/" + date;
console.log("URL is: " + url);

fetch(url)
    .then(res => res.text())
    .then(data => {
          var obj = JSON.parse(data);
          var events = obj.data.Events;
          events.forEach((item) => {
            console.log(item.year + ": " + item.text);
          });
          //document.getElementById('APIResp').innerText = data;
        });


    /*function displayEvents(data){
          var obj = JSON.parse(data);
          //alert(obj.data.Events[0].year);
          var events = obj.data.Events;
          events.forEach((item) => {
            console.log(item.year + ": " + item.text);
          });
          //document.getElementById('APIResp').innerText = data;
        }*/



