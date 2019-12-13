$(document).ready(function() {
  // click event listner to call functions
  $('#btn-searchCity').click(weatherToday);
  $('#btn-searchCity').click(forecastFiveDays);
  $('#searchedList').click(weatherToday);
  $('#searchedList').click(forecastFiveDays);
});
