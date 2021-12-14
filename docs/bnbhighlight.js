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
var belle = document.getElementsByClassName("belle");
var lum = document.getElementsByClassName("lumiere");
var cogs = document.getElementsByClassName("cogsworth");
var potts = document.getElementsByClassName("potts");
var chip = document.getElementsByClassName("chip");
var forte = document.getElementsByClassName("forte");
var ang = document.getElementsByClassName("angelique");
var fifi = document.getElementsByClassName("fifi");
var chorus = document.getElementsByClassName("chorus");
var gaston = document.getElementsByClassName("gaston");
var lefou = document.getElementsByClassName("lefou");
var beast = document.getElementsByClassName("beast");
var town = document.getElementsByClassName("townies");
var castle = document.getElementsByClassName("castleware");
var bimb = document.getElementsByClassName("bimbettes");
var ward = document.getElementsByClassName("wardrobe");

switch (id) {
          case "NGRAMtoggle": {
  var e;
  for (e=0; e < gram.length; e++)
  {gram[e].classList.toggle("on")}
   };
  break;
        case "BELLEtoggle": {
  var e;
  for (e=0; e < belle.length; e++)
  {belle[e].classList.toggle("on")}
   };
  break;
        case "LUMIEREtoggle": {
  var e;
  for (e=0; e < lum.length; e++)
  {lum[e].classList.toggle("on")}
   };
  break;
        case "COGSWORTHtoggle": {
  var e;
  for (e=0; e < cogs.length; e++)
  {cogs[e].classList.toggle("on")}
   };
  break;
        case "POTTStoggle": {
  var e;
  for (e=0; e < potts.length; e++)
  {potts[e].classList.toggle("on")}
   };
  break;
        case "CHIPtoggle": {
  var e;
  for (e=0; e < chip.length; e++)
  {chip[e].classList.toggle("on")}
   };
  break;
        case "FORTEtoggle": {
  var e;
  for (e=0; e < forte.length; e++)
  {forte[e].classList.toggle("on")}
   };
  break;
        case "ANGELIQUEtoggle": {
  var e;
  for (e=0; e < ang.length; e++)
  {ang[e].classList.toggle("on")}
   };
  break;
        case "FIFItoggle": {
  var e;
  for (e=0; e < fifi.length; e++)
  {fifi[e].classList.toggle("on")}
   };
  break;
        case "CHORUStoggle": {
  var e;
  for (e=0; e < chorus.length; e++)
  {chorus[e].classList.toggle("on")}
   };
  break;
          case "GASTONtoggle": {
  var e;
  for (e=0; e < gaston.length; e++)
  {gaston[e].classList.toggle("on")}
   };
  break;
          case "LEFOUtoggle": {
  var e;
  for (e=0; e < lefou.length; e++)
  {lefou[e].classList.toggle("on")}
   };
  break;
          case "BEASTtoggle": {
  var e;
  for (e=0; e < beast.length; e++)
  {beast[e].classList.toggle("on")}
   };
  break;
          case "TOWNIEStoggle": {
  var e;
  for (e=0; e < town.length; e++)
  {town[e].classList.toggle("on")}
   };
  break;
          case "CASTLEWAREtoggle": {
  var e;
  for (e=0; e < castle.length; e++)
  {castle[e].classList.toggle("on")}
   };
  break;
            case "BIMBETTEStoggle": {
  var e;
  for (e=0; e < bimb.length; e++)
  {bimb[e].classList.toggle("on")}
   };
  break;
              case "WARDROBEtoggle": {
  var e;
  for (e=0; e < ward.length; e++)
  {ward[e].classList.toggle("on")}
   };
  break;
  }
}

window.onload = init; 