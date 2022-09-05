
//Grab variables which would be affected from window resizing
var button = document.getElementsByClassName("links")[0];
var dropdownMenu = document.getElementById("grid-menu");
var cityBlock = document.getElementsByClassName("cityBlock");
var city = document.getElementsByClassName("city");
var cityName = document.getElementsByTagName("h2");

addEventListener('load', event => {
    var width = document.body.clientWidth;
    //If the window is smaller than 500px
      if(width < 965) {
          button.style.display = "none";
          dropdownMenu.style.display = "block";
  
          var index = 0;
          var length = document.getElementsByClassName("lines").length;
          for(index; index < length; index++) {
              document.getElementsByClassName("lines")[index].style.display = "block";
              cityBlock[index].style.display = "block";
              cityBlock[index].style.border = "solid";
              cityBlock[index].style.width = "auto";
              cityBlock[index].style.height = "auto";
              city[index].style.fontSize = "5vw";
              cityName[index].style.fontSize = "4vw";
          }
  
      document.getElementById("resized-dropdown").style.display = "block";
      }
      
      //If the window is greater than 500px
      else {
          button.style.display = "block";
          dropdownMenu.style.display = "grid";
          var index = 0;
          var length = document.getElementsByClassName("lines").length;
          for(index; index < length; index++) {
              document.getElementsByClassName("lines")[index].style.display = "none";
              cityBlock[index].style.display = "inline-block";
              cityBlock[index].style.width = "33%";
              cityBlock[index].style.height = "100vh";
              city[index].style.fontSize = "2vw";
              cityName[index].style.fontSize = "2vw";
              cityBlock[index].style.border = "none";
          }
  
      document.getElementById("resized-dropdown").style.display = "none";
  
      }
  
  });

/*Nav-bar for when the window becomes too small
to display the dropdown menu */
addEventListener('resize', event => {
    var width = document.body.clientWidth;
  //If the window is smaller than 500px
    if(width < 965) {
        button.style.display = "none";
        dropdownMenu.style.display = "block";

        var index = 0;
        var length = document.getElementsByClassName("lines").length;
        for(index; index < length; index++) {
            document.getElementsByClassName("lines")[index].style.display = "block";
            cityBlock[index].style.display = "block";
            cityBlock[index].style.border = "solid";
            cityBlock[index].style.width = "auto";
            cityBlock[index].style.height = "auto";
            city[index].style.fontSize = "5vw";
            cityName[index].style.fontSize = "4vw";
        }

    document.getElementById("resized-dropdown").style.display = "block";
    }
    
    //If the window is greater than 500px
    else {
        button.style.display = "block";
        dropdownMenu.style.display = "grid";
        var index = 0;
        var length = document.getElementsByClassName("lines").length;
        for(index; index < length; index++) {
            document.getElementsByClassName("lines")[index].style.display = "none";
            cityBlock[index].style.display = "inline-block";
            cityBlock[index].style.width = "33%";
            cityBlock[index].style.height = "100vh";
            city[index].style.fontSize = "2vw";
            cityName[index].style.fontSize = "2vw";
            cityBlock[index].style.border = "none";
        }

    document.getElementById("resized-dropdown").style.display = "none";

    }

});



