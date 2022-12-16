function appendResults(array) {
  var mainContainer = document.getElementById("results");
  for (const key in array) {
    var div = document.createElement("div");
    div.innerHTML = `${key}:       ${array[key]}`;
    mainContainer.appendChild(div);
  }
  var div = document.createElement("div");
  div.innerHTML = `_______________________`;
  mainContainer.appendChild(div);
}

$(document).ready(function() {
  document.getElementById("countryInfoBtn").addEventListener("click", () => {
    $.ajax({
      url: "index.php",
      type: 'POST',
      dataType: 'json',
      data: {
        country: $('#country').val(),
        lang: $('#lang').val()
      },
      success: function(results) {
        appendResults(results[0]);
      },
      error: function(jqXhr, textStatus, errorMessage) {
        console.log(textStatus);
        if (errorMessage) {
          console.log(errorMessage);
        }
      }
    });
  });

  document.getElementById("timezoneBtn").addEventListener("click", () => {
    $.ajax('timezone.php', {
      type: 'POST',
      dataType: 'json',
      data: {
        lat: $('#lat').val(),
        long: $('#long').val()
        /*radius: $('#radius');
        language: $('#timeZoneLang');
        date: $('#date');*/
      },
      success: function(results) {
        appendResults(results);
      },
      error: function(jqXhr, textStatus, errorMessage) {
        console.log(textStatus);
        if (errorMessage) {
          console.log(errorMessage);
        }
      }
    });
  });

  document.getElementById("weather").addEventListener("click", () => {
    $.ajax('weather.php', {
      type: 'POST',
      dataType: 'json',
      data: {
        north: $('#north').val(),
        south: $('#south').val(),
        east: $('#east').val(),
        west: $('#west').val(),
        maxRows: $('#maxRows').val()
      },
      success: function(results) {
        const arr = results["weatherObservations"];
        for (var i = 0; i < arr.length; i++) {
          appendResults(arr[i]);
        }
      },
      error: function(jqXhr, textStatus, errorMessage) {
        console.log(textStatus);
        if (errorMessage) {
          console.log(errorMessage);
        }
      }
    });
  });
});
