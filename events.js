// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
  three()
  four()

  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE
 function two() {
   var two = document.getElementById('two');
   two.addEventListener('mouseenter',makeGreen)
   two.addEventListener('mouseleave',makeWhite)
 }

 function three(){
   var three = document.getElementById('three');
   three.addEventListener('mouseenter',makeOrange)
   three.addEventListener('mouseleave',makeWhite)
 }
 function four(){
   var four = document.getElementById('four');
   four.addEventListener('click',makeYellow);
   four.addEventListener('mouseleave',makeWhite);
 }



// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
function makeGreen (evt) {
  evt.target.style.backgroundColor= 'green'
}
function makeOrange(evt){
  evt.target.style.backgroundColor='orange'
}
function makeYellow(evt){
  evt.target.style.backgroundColor = 'yellow';
}
