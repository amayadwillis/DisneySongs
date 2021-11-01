// JavaScript Document

//function myFunction() {
    //var input, filter, ul, li, a, i, txtValue;
    //input = document.getElementById("myInput");
    //filter = input.value.toUpperCase();
   // ul = document.getElementById("myUL");
    //li = ul.getElementsByTagName("li");
    //for (i = 0; i < li.length; i++) {
        //a = li[i].getElementsByTagName("a")[0];
        //txtValue = a.textContent || a.innerText;
        //if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //li[i].style.display = "";
        //} else {
            //li[i].style.display = "none";
        //}
    //}
//}

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