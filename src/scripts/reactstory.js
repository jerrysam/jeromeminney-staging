
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
  "thanks for the chat, see you soon."
];
var i = 0;
var rendering = false;

var hitElement = document.querySelector( '.storyline' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 && rendering == false) {
    addHit();
  }
}

var addHit = function() {
  if ( i+1 < strings.length) {
  i++
  renderStories();
  }
}

var pxY = -50; //Need to absolute position this and make it a % from the top so it's scalable as I change font sizes, etc
var renderStories = function() {
  if (i == 1) {
    enterWorld();
  }
  addLine();
}

var enterWorld = function() {
  hitElement.classList.add('newline');
  $('.fadeup').addClass('enterworld');
  $('#hero1').addClass('blur');
}

var addLine = function() {
  pxY = pxY - 40;
  $(".newline").css("transform", "translateY(" + pxY + "px)");
  rendering = true;
  setTimeout(function() {
    hitElement.innerHTML = hitElement.innerHTML + "<br/>" + strings[i-1];
    rendering = false;
  }, 250);
}

// Prevent spacebar from scrolling down the page using this SO solution: http://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
// Modified the code again to return to normal after you've gone through the story
var spacecounter = 0;
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body && spacecounter < strings.length-1 ) {
        e.preventDefault();
        spacecounter++;
        return false;
    } else if (e.keyCode == 32 && e.target == document.body && spacecounter == strings.length-1) {
        e.preventDefault();
        spacecounter++;
        leaveWorld();
        return false;
    }
};

var leaveWorld = function () {
  // Remove text
  pxY = pxY - 100;
  $(".newline").css("transform", "translateY(" + pxY + "px)");
  $(".newline").css("opacity", "0");
  // Slip in the new subtitle
  $('.header-content').append("<p class='new_subtitle'>Technology | Communication | Business</p>");
  // Return to normal
  setTimeout(function() {
    $('.fadeup').removeClass('enterworld');
    $('#hero1').removeClass('blur');
    $('.new_subtitle').addClass('visible');
  }, 500)
}
