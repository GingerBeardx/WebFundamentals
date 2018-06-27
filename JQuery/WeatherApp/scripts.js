$(document).ready(function () {
  $("form").submit(function () {
    // your code here (build up your url)
    event.preventDefault();
    let city = $("input#city").val();

    //declare a variable that just has the key stored
    let url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const key = "&appid=264f130b6b9bc6bc72dc00a88be397fe";

    //add the search to the key store variable
    url += city + key;

    // make the API call with the variable
    $.get(url, function (resp) {
      // your code here
      // store the information that is needed
      let infoString = ""
      infoString += `
        <h1>${resp.name}:</h1>
        <h3>Current Temperature (F): ${Math.floor(1.8 * (resp.main.temp - 273) + 32)} degrees</h3>
      `
      //display the info in the info-display div
      $('.info-display').html(infoString);
    },
      "json"
    );
    // don't forget to return false so the page doesn't refresh
    return false;
  });
});
