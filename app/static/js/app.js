$(document).ready(function() {

  $('#home_page').ready(function() {
    if (!($.cookie('visited_home'))) {
      $('#welcomeModal').modal({
        keyboard: true
      });
    }
    $.cookie("visited_home", true, { expires: 1 });
  });

});
