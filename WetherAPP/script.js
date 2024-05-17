const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=d588d3993ca3482a97d71334241605&aqi=no&q=";
async function check(url) {
  const response = await fetch(url);
  var data = await response.json();

  console.log(data);

  try {
    document.getElementById("city").innerHTML = data.location.name;
    document.getElementById("temp").innerHTML =
      Math.round(data.current.temp_c) + "°C";
  } catch (err) {
    alert("Pleace Enter Your City");
  }
}

function getTemp() {
  var city = document.querySelector("#cityName").value;
  let url = apiUrl + city;
  console.log(url);
  check(url);
}

const serchbox = document.getElementById("button1");

serchbox.addEventListener("click", () => {
  getTemp();
});
