
var strings = [
  "slow down a bit before pressing (space) again..",
  "it's ok, the world will keep revolving",
  "let's reflect on your recent work",
  "you've achieved some big things recently, haven't you",
  "it's important to celebrate the small wins ;)",
  "hmm, let's look at work from a fresh perspective..",
  "is there potential to think smarter?",
  "can we offload the more repetitive work?",
  "with more time, how could you get more creative?",
  "...",
  "can you feel that sense of excitement?",
  "there's an opportunity for you to grow here, isn't there?",
  "I really enjoy mentoring people to achieve",
  "I dream to transform Education one day, but that's another story",
  "I get a kick out of finding scalable solutions",
  "I'm a people person, who knows how to leverage technology",
  "yes, I coded this animation myself",
  "anyway... I think we should connect",
  "there's a lot for us to achieve",
  "and not much time left to achieve it",
  "you can arrange a skype if you scroll down a bit :)",
  "thanks for the chat, see you soon.",
  "technology | communication | business"
];
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
  $('.fadeup').addClass('go');
}


// Prevent spacebar from scrolling down the page using this SO solution: http://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
// Modified the code again to return to normal after you've gone through the story
var spacecounter = 0;
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body && spacecounter < strings.length-1 ) {
        e.preventDefault();
        spacecounter++;
        return false;
    }
};
