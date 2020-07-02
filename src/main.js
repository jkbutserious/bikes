import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getBike } from './assests/buinesslogic.js';

// in .env API_KEY and SECRET
// let request = new XMLHttpRequest();

// function getElements(response) {
//   if (response.proximity) {
//     $("#stolenBikeCount").text(`Total Bikes: ${response.proximity}`);
//     $('.showErrors').text("");
//   } else {
//     $("#stolenBikeCount").text("");
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

async function getBikeTraits(city) {
  const jsonifiedResponse = await getBike(city);
  if (jsonifiedResponse === false) {
    $("#stolenBikeCount").text("I'm sorry, something went wrong with your request")
  } else {
    $("#stolenBikeCount").text(`Total Bikes: ${jsonifiedResponse.proximity}`);
  }
}

$(document).ready(function() {
  $("#bikeInfo").click(function() {
    let city = $("#location").val();
    $("#location").val("");

    getBikeTraits(city);

    // (async () => {
    //   try {
    //   let response = await fetch(`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`);
    //   let jsonifiedResponse;
    //   if (response.ok && response.status == 200) {
    //     jsonifiedResponse = await response.json();
    //   } else {
    //     jsonifiedResponse = false;
    //   }
    //   getElements(jsonifiedResponse);
    //   } catch(error) {
    //     getElements(false);
    //   }
    // })();

    // const getElements = function(response) {
    //   if (response) {
    //     $("#stolenBikeCount").text(`Total Bikes: ${response.proximity}`);
    //   }
    // }
    
    // fetch(`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`)
    // .then(function(response) {
    //   console.log(response)
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response.json();
    // })
    // .catch(function(error) {
    //   return error;
    // })
    // .then(function(jsonifiedResponse) {
    //   console.log(jsonifiedResponse);
    //   getElements(jsonifiedResponse);
    // });


    // let promise = new Promise(function(resolve, reject) {
    //   const url = `https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`;
    //   request.onload = function () {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     }
    //     else {
    //       reject(request.response);
    //     }
    //   }
    //   request.open("GET", url, true);
    //   request.send();
    // });

  //   promise.then(function(response) {
  //     const body = JSON.parse(response);
  //     $("#stolenBikeCount").text(`Number of bikes stolen in your location: ${body.proximity}`);
  //   }, function(error) {
  //     $("#stolenBikeCount").text(`There was an error processing your request: ${error}`);
  //   })
  });
});  
