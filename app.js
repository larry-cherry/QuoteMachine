$(document).ready(function(){
  console.log("app.js loaded with jquery")
  $('#newquote').on("click", function(e) {
    document.getElementById("newquote").disabled = true;
    $('#quote-container').children().addClass("animated fadeOut");
    removeQuote = function() {
      $('#quote-container').children().remove();
      document.getElementById("quote-container").innerHTML += '<p class="animated fadeIn">Hello World!</p>'
      setTimeout(enableButton, 100)
    }
    setTimeout(removeQuote, 2000)
    enableButton = function() {
      document.getElementById("newquote").disabled = false;
    }
  })
});
