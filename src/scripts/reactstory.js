var strings = [
  "Breathe in for 5 seconds before pressing (space) again..",
  "let's reflect on your recent work",
  "think back and smile about your recent achievements",
  "hmm, let's look at work from a fresh perspective..",
  "perhaps you'd like a bit more time for new things",
  "Do you really need to do all the work you currently do?",
  "Imagine your creativity if you had more time",
  "(or scroll down instead). Press space when your imagination stops..",
  "there's an opportunity for you to grow here, isn't there?",
  "I really enjoy mentoring people to achieve",
  "I'm a people person, who knows how to leverage technology",
  "(Indeed, I designed and developed this website myself)",
  "anyway... I think we should connect",
  "there's a lot for us to achieve",
  "and not much time left to achieve it",
  "you can arrange a skype if you scroll down a bit :)",
  "thanks for the chat, see you soon."
];
var i = 0;
var rendering = false;
var spacecounter = 0;
var hitElement = document.querySelector( '.storyline' );

// Prevent spacebar from scrolling down the page using this SO solution: http://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  }

document.body.onkeyup = function(e) {
  if( e.keyCode == 32 && rendering == false) {
    addHit();
    if ( i+1 < strings.length) {
      renderStories();
    } else if (i+1 == strings.length) {
      leaveWorld();
    }
  }
  return false;
}

var addHit = function() {
  i++;
  spacecounter++;
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
  $('.storyline').removeClass('storyline_font');
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


// Breathe in for 5 seconds, before releasing the air and continuing to press space.
// Welcome to a new world. Come take a look around.
// This is a world of creativity. Of producticity. Of balance.
// A world for the intelligent, the dreamers, and of the team players.
// This is a world of where work doesn't expand to fill the time you give it.
// A world where work days end with satisfaction from a productive day, making you happy to retire into the evening.
// A world where every person can capture their potential.
// Every person can focus on doing what they enjoy most.
// Each and every one of us are surrounded by love.
// The path to this world is hard. Many people have spent a decade pursuing it.
// But this is my pursuit, and I'm open to taking passengers.
// Thanks for the chat. Scroll down to read more and arange an exploratory skype with me.

// Breathe in for 5 seconds, before releasing the air and continuing to press space.
