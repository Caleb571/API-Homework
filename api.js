
//Global variables



var topics = ["football", "baseball", "hockey", "basketball", "soccer", "boxing"];



    







//Function to create buttons



function createButtons (){



//empty div



    $('#buttons').empty();



//loop through topics array 



for (var i = 0; i < topics.length; i++) {



//add DOM element



   var data1 = $('<button>');



//add class



   data1.addClass('topic');



//add attribute



   data1.attr('data-option', topics[i]);



//add variable as text



  data1.text(topics[i]);



//append and console log



  $("#buttons").append(data1);

 

}

}

createButtons();



// On click listener for topic buttons



    $(".topic").on("click",function(){

// empty div for gifs

    $("#gifTest").empty();

      var info = $(this).attr("data-option");

    console.log(info);



// Query URL & Api Key



var apiKey = "cwq6L3vAyRRolg2Ttlaxx6vl2w30YhQs"

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + info + "&api_key=" + apiKey;





//Ajax call to get data



$.ajax({

    url: queryURL,

    method: "GET"

  })

  

  .then(function(response) {

    console.log(response.data);

    console.log(queryURL);



//display results in variable

var results = response.data;

console.log(results)



//loop throught results



for (var i = 0; i < results.length; i++) {



//div to hold info



var gifDiv = $("<div>");



//P for text



var rating = $("<p>").text("Rating: " + results[i].rating);





//controlling movement



var animate = results[i].images.fixed_height.mp4;

//var stop = results[i].fixed_height_still.url;



//img tag for gif



var topicGif = $("<img>");



// src & movement attribute



// topicGif.attr("src",stop);

// topicGif.attr("data-stop",stop);

// topicGif.attr("data-move",animate);

// topicGif.attr("data-type", "stop");

// topicGif.addClass("image");



//Append tags to gifDiv



gifDiv.append(rating);

gifDiv.append(topicGif);



//add gifDiv to HTML



$("#gifTest").append(gifDiv);



}

  });



  });

// }

// displayGifs();



$(document).on("click","image",function(){

  var state = $(this).attr("data-type");

  if (state == "still"){

    $(this).attr('src',$(this).data('animate'));

    $(this).attr('data-type','animate');

  } else {

    $(this).attr('src',$(this).data('stop'));

    $(this).attr('data-type','stop');

  

  }

})

  

//on click event



$("#add-topic").on('click', function(event){

    event.preventDefault();



// //take value from input and place in variable



var newButton = $('#topic').val().trim();





// //add variable to array



 topics.push(newButton);





// //call functions and clear input



 createButtons();

 return false;



$("#topic").val("");

 });