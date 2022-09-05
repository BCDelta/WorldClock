
//Grab variables which would be affected from window resizing
var button = document.getElementsByClassName("links")[0];
var dropdownMenu = document.getElementById("grid-menu");
var imageGIF = document.getElementsByClassName("earth");
var newAttribute = document.createAttribute("id");
var timeblock = document.getElementById("time-block");

addEventListener('load', event => {
    //Make resized earth gif unseen until resized
    imageGIF[1].style.display = "none";

    var width = document.body.clientWidth;

    //If the window is smaller than 500px
        if(width < 500) {
            button.style.display = "none";
            dropdownMenu.style.display = "block";

            var index = 0;
            var length = document.getElementsByClassName("lines").length;
            for(index; index < length; index++) {
                document.getElementsByClassName("lines")[index].style.display = "block";
            }

        newAttribute.value = "resized-time-block";
        timeblock.setAttributeNode(newAttribute);
        document.getElementById("resized-dropdown").style.display = "block";

        imageGIF[0].style.display = "none";
        imageGIF[1].style.display = "inline";
        }
        
        //If the window is greater than 500px
        if(width > 500) {
            button.style.display = "block";
            dropdownMenu.style.display = "grid";
            var index = 0;
            var length = document.getElementsByClassName("lines").length;
            for(index; index < length; index++) {
                document.getElementsByClassName("lines")[index].style.display = "none";
            }
        newAttribute.value = "time-block";
        timeblock.setAttributeNode(newAttribute);
        document.getElementById("resized-dropdown").style.display = "none";

        imageGIF[0].style.display = "inline";
        imageGIF[1].style.display = "none";
        }
});


/*Nav-bar for when the window becomes too small
to display the dropdown menu */
addEventListener('resize', event => {
    //Make resized earth gif unseen until resized
    imageGIF[1].style.display = "none";

    var width = document.body.clientWidth;

  //If the window is smaller than 500px
    if(width < 500) {
        button.style.display = "none";
        dropdownMenu.style.display = "block";

        var index = 0;
        var length = document.getElementsByClassName("lines").length;
        for(index; index < length; index++) {
            document.getElementsByClassName("lines")[index].style.display = "block";
        }

    newAttribute.value = "resized-time-block";
    timeblock.setAttributeNode(newAttribute);
    document.getElementById("resized-dropdown").style.display = "block";

    imageGIF[0].style.display = "none";
    imageGIF[1].style.display = "inline";
    }
    
    //If the window is greater than 500px
    if(width > 500) {
        button.style.display = "block";
        dropdownMenu.style.display = "grid";
        var index = 0;
        var length = document.getElementsByClassName("lines").length;
        for(index; index < length; index++) {
            document.getElementsByClassName("lines")[index].style.display = "none";
        }
    newAttribute.value = "time-block";
    timeblock.setAttributeNode(newAttribute);
    document.getElementById("resized-dropdown").style.display = "none";

    imageGIF[0].style.display = "inline";
    imageGIF[1].style.display = "none";
    }
});



