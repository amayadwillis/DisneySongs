// if hover -> display txt
function displayTxt(evt) {
    evt.currentTarget.parentNode.querySelector( '.innerText' ).classList.remove( 'hide' );
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.querySelector( '.innerText' ).classList.add( 'hide' );
}

/* mouseover and mouseout events to `.wrapper` element */
var $wrapper = document.querySelector( '.wrapper' );
$wrapper.addEventListener( 'mouseover', displayTxt );
$wrapper.addEventListener( 'mouseout', removeTxt );   