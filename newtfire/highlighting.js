// JavaScript Document

function init()
{

    var anchors = document.getElementsByClassName("anchor");
    for(var i = 0; i < anchors.length; i++)
    {
        anchors[i].onclick = show_footnote;
    }
    
     var fieldset = document.getElementsByTagName('input');
for (var i=0; i <fieldset.length; i++)
{fieldset[i].addEventListener('click', toggle, false);}

   
}

function toggle()
{

var id = this.id;
var interact = document.getElementsByClassName("interact");

switch (id) {
  case "Interact": {
  var e;
  for (e=0; e < kot.length; e++)
  {kot[e].classList.toggle("on")}
   };
  break;

window.onload = init; 