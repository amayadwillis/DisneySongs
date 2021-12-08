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
var rof = document.getElementsByClassName("rofngrams");
var aladdin = document.getElementsByClassName("aladdin");
var genie = document.getElementsByClassName("genie");
var jasmine = document.getElementsByClassName("jasmine");
var iago = document.getElementsByClassName("iago");
var jafar = document.getElementsByClassName("jafar");
var aljas = document.getElementsByClassName("aljas");
var iagjas = document.getElementsByClassName("iagjas");

switch (id) {
 case "ROFNGRAMtoggle": {
  var e;
  for (e=0; e < rof.length; e++)
  {rof[e].classList.toggle("on")}
   };
break;
  case "ALADDINtoggle": {
  var e;
  for (e=0; e < aladdin.length; e++)
  {aladdin[e].classList.toggle("on")}
   };
  break;
  case "GENIEtoggle": {
  var e;
  for (e=0; e < genie.length; e++)
  {genie[e].classList.toggle("on")}
   };
  break;
  case "JASMINEtoggle": {
  var e;
  for (e=0; e < jasmine.length; e++)
  {jasmine[e].classList.toggle("on")}
   };
  break;
  case "IAGOtoggle": {
  var e;
  for (e=0; e < iago.length; e++)
  {iago[e].classList.toggle("on")}
   };
  break;
  case "JAFARtoggle": {
  var e;
  for (e=0; e < jafar.length; e++)
  {jafar[e].classList.toggle("on")}
   };
  break;
  case "ALJAStoggle": {
  var e;
  for (e=0; e < aljas.length; e++)
  {aljas[e].classList.toggle("on")}
   };
  break;
  case "IAGJAStoggle": {
  var e;
  for (e=0; e < iagjas.length; e++)
  {iagjas[e].classList.toggle("on")}
   };
  break;
  }
}

window.onload = init;    