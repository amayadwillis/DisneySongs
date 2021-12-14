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
var gram = document.getElementsByClassName("ngram");
var aladdin = document.getElementsByClassName("aladdin");
var genie = document.getElementsByClassName("genie");
var jasmine = document.getElementsByClassName("jasmine");
var iago = document.getElementsByClassName("iago");
var jafar = document.getElementsByClassName("jafar");
var aljas = document.getElementsByClassName("aljas");
var iagjas = document.getElementsByClassName("iagjas");
var cassim = document.getElementsByClassName("cassim");
var saluk = document.getElementsByClassName("saluk");
var thieves = document.getElementsByClassName("thieves");
var sultan = document.getElementsByClassName("sultan");
var chorus = document.getElementsByClassName("chorus");
var peddler = document.getElementsByClassName("peddler");

switch (id) {
      case "NGRAMtoggle": {
  var e;
  for (e=0; e < gram.length; e++)
  {gram[e].classList.toggle("on")}
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
  case "CASSIMtoggle": {
  var e;
  for (e=0; e < cassim.length; e++)
  {cassim[e].classList.toggle("on")}
   };
  break;
    case "SALUKtoggle": {
  var e;
  for (e=0; e < saluk.length; e++)
  {saluk[e].classList.toggle("on")}
   };
  break;
      case "THIEVEStoggle": {
  var e;
  for (e=0; e < thieves.length; e++)
  {thieves[e].classList.toggle("on")}
   };
  break;
      case "SULTANtoggle": {
  var e;
  for (e=0; e < sultan.length; e++)
  {sultan[e].classList.toggle("on")}
   };
  break;
        case "CROWDtoggle": {
  var e;
  for (e=0; e < chorus.length; e++)
  {chorus[e].classList.toggle("on")}
   };
  break;
        case "PEDDLERtoggle": {
  var e;
  for (e=0; e < peddler.length; e++)
  {peddler[e].classList.toggle("on")}
   };
  break;
  }
}

window.onload = init; 