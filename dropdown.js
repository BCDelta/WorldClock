/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
// If dropdown button was clicked
let isDropdownButton = event.target.matches('.links');
// If the body outside the dropdown menu was clicked 

let dropdownOpened = event.target.closest('#nav-bar');

if(!isDropdownButton && !dropdownOpened) {
  
  //Close all other dropdown menus when the above check happens
  var dropdowns = document.getElementsByClassName("dropdown-menu");
  let i = 0;
    for(i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // If opened, close menu
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
}
if(dropdownOpened) {
  document.getElementsByClassName("links")[0].blur();
}
}