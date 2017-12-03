$(document).ready(function(){
  $('#chevron .fa-chevron-circle-down').addClass('chevron_show');
});

var strings = [
  "Keep tappin' that spacebar!",
  "In 2012",
  "When had my first startup idea",
  "Something that many people valued,",
  "and scaled seamlessly on Facebook",
  "I set out to build an MVP",
  "But I didn't know how to code..",
  "|",
  "I was stuck for 6 months",
  "All I got was a £10k quote and a useless \"cto\"",
  "And then I met San (my first cofounder)",
  "Who offered to build it with me",
  "in half a day. (We did it!)",
  "|",
  "Since then, since 2012",
  "I've been helping people",
  "take the next step in their business.",
  "Simultaneously delivering tangible work",
  "Whilst teaching people to fish for themselves",
  "|",
  "Through starting an agency, a funded startup, and freelance,",
  "I've helped about a hundred people",
  "take the next step into leveraging software",
  "And I would love to help you on this journey.",
  "|",
  "I believe there's something to learn from everyone,",
  "includign you. So don't be shy",
  "You can book me on calendly, or drop me an email",
  "Let's do a discovery call :)"
];
var i = 0;
var rendering = false;
var spacecounter = 0;
var hitElement = document.querySelector( '.storyline' );
var isVisible = $('#storyline').css('display') == 'block';


// Prevent spacebar from scrolling down the page using this SO solution: http://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  }

document.body.onkeyup = function(e) {
  var isStoryActive = isVisible && !rendering;
  if( e.keyCode == 32 && isStoryActive) {
    addHit();
    if ( i-1 < strings.length) {
      renderStories();  
    } else if (i-1 == strings.length) {
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
  pxY = pxY - 42;
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

$(document).on('click', '#chevron a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
