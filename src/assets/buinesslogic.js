export async function getBike(city) {
  try {
    let response = await fetch(`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
    } catch(error) {
      return false;
    }
}

export async function randomWords() {
  try{
    let phrase = await fetch(`https://random-word-api.herokuapp.com/word?number=10`);
    let randomResponse;
    if (phrase.ok && phrase.status == 200) {
      randomResponse = await phrase.json();
    } else {
      randomResponse = false;
    }
    return randomResponse;
  } catch(error) {
    return false;
  }
}

export async function dinoipsum() {
  try {
    let dinoText = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15`);
    let dinoTextResponse;
    if (dinoText.ok && dinoText.status == 200) {
    dinoTextResponse = await dinoText.json();
    } else {
      dinoTextResponse = false;
    } 
    return dinoTextResponse;
    } catch(error) {
      return false;
    }
} 


export async function ncovid() {
  try {
    let covidInfo = await fetch(`https://covid19-us-api.herokuapp.com/county`);
    let covidInfoResponse; 
    if (covidInfo.ok && covidInfo.status == 200)  {
    covidInfoResponse = await covidInfo.json();
    } else {
      covidInfoResponse = false;
    }
    return covidInfoResponse;
  } catch(error) {
      return false;
    }
}