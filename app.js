$(document).ready(function(){
  console.log("app.js loaded with jquery")
  var getQuote = function() {
    document.getElementById("newquote").disabled = true;
    var quote = $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      type: 'GET',
      cache: false,
    }).done(function(server_data){
      console.log("success" + server_data);
      return server_data;
      // debugger;
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log("fail" + errorThrown);
      return "There was an issue with your request please try again.";;
    });
    $('#quote-container').children().addClass("animated fadeOut");
    removeQuote = function() {
      $('#quote-container').children().remove();
      // debugger;
      document.getElementById("quote-container").innerHTML += '<div class="animated fadeIn text-primary">' + quote["responseJSON"][0]["content"] + '<br>' + '<h3 class="pull-right">' + quote["responseJSON"][0]["title"] + '</h3></div>'
      setTimeout(enableButton, 100)
    }
    setTimeout(removeQuote, 2000)
    enableButton = function() {
      document.getElementById("newquote").disabled = false;
    }
  }
  getQuote();

  $('#newquote').on("click", function(e) {
    getQuote();
  })

});
