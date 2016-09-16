$.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-09-16&end_date=2016-09-17&api_key=gbTR2GZQqNa2MZFWDRpuPhsqrWWrnfjmXqJFuQgV", function(data, status){
  var min = 0;
  var max = 25;

  for (var i = 0; i < data.element_count; i++){
    var asteroid = $('<div></div>').addClass(i);
    asteroid.addClass('asteroid');
    asteroid.addClass('warning');
    asteroid.css({'top': (25 - (Math.random() * (max - min) + min)) + '%'});
    asteroid.css({'left': (25 - (Math.random() * (max - min) + min)) + '%'});

    $('body').append(asteroid);
  }
});
