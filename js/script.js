// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */





$("#search-button").click(function(){

$(".text-center").empty();


  $.ajax({
    
   
        url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            
             $(".text-center").append("<img src='" + response.data[0].images.original_still.url + "' </img>");
            console.log(response.data[0].images.original_still.url);

        }   
    }); 
  
});

