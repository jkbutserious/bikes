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