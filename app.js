$(document).ready(function(){
  console.log("app.js loaded with jquery")
  var enableButton = function() {
    document.getElementById("newquote").disabled = false;
  }

  var changeQuote = function(server_data) {
    // debugger;
    var es6Quote = `<div class="animated fadeIn text-primary"> ${server_data[0]["content"]}
     <br><h3 class="pull-right">${server_data[0]["title"]}</h3></div>`;
    document.getElementById("quote-container").innerHTML = es6Quote;
    setTimeout(enableButton, 100)
  }

  var getQuote = function() {
    document.getElementById("newquote").disabled = true;
    $('#quote-container').children().addClass("animated fadeOut");
    $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      type: 'GET',
      cache: false,
    }).done(function(server_data){
      console.log("success" + server_data);
      changeQuote(server_data);
      // debugger;
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log("fail" + errorThrown);
      return "There was an issue with your request please try again.";;
    });
  }

  getQuote();

  $('#newquote').on("click", function(e) {
    getQuote();
  })

});
