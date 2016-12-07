
var strings = ["Hi","it's not easy finding a freelancer, is it?", "referrals don't always come", "you need to know it'll get done", "I get it."];
var i = 0;

var hitElement = document.querySelector( '.storyline' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addHit();
  }
}

var addHit = function() {
  if ( i+2 <= strings.length) {
  i++
  renderStories();
  }
}

var renderStories = function() {
  hitElement.classList.remove('enter');
  hitElement.classList.add('fadedown');
  setTimeout(function() {
    hitElement.innerHTML = strings[i];
    hitElement.classList.remove('fadedown');
    hitElement.classList.add('enter');
  }, 250);
}


// Prevent spacebar from scrolling down the page using this SO solution: http://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
};
