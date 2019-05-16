$(document).ready(function() {
    var cities = ["Rio de Janeiro", "Seattle", "Napa Valley", "San Diego", "Denver"]
    
  
    //function to create initial buttons
    function renderButtons() {
      $("#buttonsDiv").empty(); 
      
      //loop through array
      for (var i = 0; i < cities.length; i++) {
       
        //dynamically create buttons for all items in array
        var a = $("<button>");
       
        //add class
        a.addClass("giphys");
       
        //add attribute & value of array item at index i
        a.attr("data-search", cities[i]);
       
        //button's text
        a.text(cities[i]);
       
        //inserting buttons into HTML
        $("#buttonsDiv").append(a);
      }
    }
  
    
    $("#add-button").submit(function(event) {
    
      //   prevent default
      event.preventDefault();
  
    
      // getting HTML from input box
      var textBox = $("#input")
        .val()
        .trim();
      cities.push(textBox);
      renderButtons();
      console.log(cities);
    });
  
    renderButtons();
  
    
    $(document).on("click", ".giphys", function() {
    
      var x = $(this).data("search");

      var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0&limit=10";
      console.log(queryURL);
  
      $.ajax({ url: queryURL, 
        
        method: "GET" 
      
      }).done(function(response) {
        console.log(response);
  
        for (var i = 0; i < response.data.length; i++) {
          $("#gifsDiv").prepend(
            "<p>Rating: " + response.data[i].rating + "<p>"
          );
          $("#gifsDiv").prepend(
            "<img src='" + response.data[i].images.downsized.url + "'>"
          );
        }
      });
    });
  });

  $(document).ready(function() {
    
  
    //function to create initial buttons
    function renderButtons() {
      $("#buttons-go-here").empty(); //so there won't be repeat buttons
      
      //loop through array
      for (var i = 0; i < giphys.length; i++) {
       
        //dynamically create buttons for all items in array
        var a = $("<button>");
       
        //add class
        a.addClass("giphys");
       
        //add attribute & value of array item at index i
        a.attr("data-search", giphys[i]);
       
        //button's text
        a.text(giphys[i]);
       
        //inserting buttons into HTML
        $("#buttons-go-here").append(a);
      }
    }
  
    
    //adding new buttons
    
    $("#add-button").submit(function(event) {
    
      //   prevent default
      event.preventDefault();
  
    
      // getting HTML from input box
      var textBox = $("#input")
        .val()
        .trim();
      giphys.push(textBox);
      renderButtons();
      console.log(giphys);
    });
  
    renderButtons();
  
    
    //Gifs will generate when button is clicked
    
    $(document).on("click", ".giphys", function() {
    
      var x = $(this).data("search");
      console.log(x);
  
      var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        x +
        "&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0&limit=10";
      console.log(queryURL);
  
      $.ajax({ url: queryURL, 
        
        method: "GET" 
      
      }).done(function(response) {
        console.log(response);
  
        for (var i = 0; i < response.data.length; i++) {
          $("#gifs-go-here").prepend(
            "<p>Rating: " + response.data[i].rating + "<p>"
          );
          $("#gifs-go-here").prepend(
            "<img src='" + response.data[i].images.downsized.url + "'>"
          );
        }
      });
    });
  });
