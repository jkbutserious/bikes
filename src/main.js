import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// in .env API_KEY and SECRET
let request = new XMLHttpRequest();

$(document).ready(function() {
  $("#bikeInfo").click(function() {
    let city = $("#location").val();
    $("#location").val("");

    let promise = new Promise(function(resolve, reject) {
      const url = `https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#stolenBikeCount").text(`Number of bikes stolen in your location: ${body.proximity}`);
    }, function(error) {
      $("#stolenBikeCount").text(`There was an error processing your request: ${error}`);
    })
  });
});