// JavaScript Document

function searchBar() {
/* alert('hey! this function fired!');  */
let input = document.getElementById("input");
let filter = input.value.toUpperCase();
let searchAreas = document.getElementsByTagName("p");
for (var i = 0, length = searchAreas.length; i < length; i++) 
{
      if (searchAreas[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        searchAreas[i].style.display = "";
      } else {
        searchAreas[i].style.display = "none";
      }
    }
}


