window.addEventListener('DOMContentLoaded',pageLoadUp,false);

function pageLoadUp() {
    document.getElementById('toggle').addEventListener('click',toggle,false)
    
}
        
var toggle = function() {
    var classes = document.getElementsByClassName('crossFran');
    for (var i=0; i < classes.length; i++){
        console.log('this element is cross-franchise')
        classes[i].classList.toggle("on")
    }
}      // JavaScript Document