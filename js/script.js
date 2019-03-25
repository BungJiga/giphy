// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */





$("#search-button").click(function(){

$(".text-center").empty();



var search_result = $("#search-term").val();

function appendImageToBody(url){
    
 $(".text-center").append("<img src='" + url + "' </img>");
    
}

var i = 0 ;

 $.ajax({
           url: "https://api.giphy.com/v1/stickers/search?q=" + search_result + "&api_key=9YREYmTHv7TEpu4y9F47gSIW5P3jROLi",
        method: "GET",
        success: function(response) {
            
            var url = response.data[i].images.original.url;
            
  
            appendImageToBody(url);
        }   
    }); 
    
   i = i++;
});





//   $.ajax({
    
   
//         url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
//         method: "GET",
//         success: function(response) {
            
//              $(".text-center").append("<img src='" + response.data[0].images.original_still.url + "' </img>");
//             console.log(response.data[0].images.original_still.url);

//         }   
//     }); 