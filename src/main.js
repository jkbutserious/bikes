import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// in .env API_KEY and SECRET
let request = new XMLHttpRequest();

$(document).ready(function() {
  $("#bikeInfo").click(function() {
    const city = $("#location").val();
    const url = `https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response)
      }
    }
    request.open("GET", url, true);
    request.send();
    const getElements = function (response) {
      $("#stolenBikeCount").text(`Number of bikes stolen in your location: ${response.proximity}`);
    }
  });
});