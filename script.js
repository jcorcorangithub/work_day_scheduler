let timeDisplayEl = $('#time-display');
let currentTime = moment().format('H');




function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

setInterval(displayTime, 1000);

// this function sets the color of a time block as needed
function updateRowColor(a,b,c){
  if(c<b){
    a.css("background-color", "red");
    
  } else if (c==b){
    a.css("background-color", "yellow");
    
  } else {
    a.css("background-color", "blue");
    
  }
}
updateRowColor ($("#9"), currentTime, 9);
updateRowColor ($("#10"), currentTime, 10);
updateRowColor ($("#11"), currentTime, 11);
updateRowColor ($("#12"), currentTime, 12);
updateRowColor ($("#13"), currentTime, 13);
updateRowColor ($("#14"), currentTime, 14);
updateRowColor ($("#15"), currentTime, 14);
updateRowColor ($("#16"), currentTime, 15);
updateRowColor ($("#17"), currentTime, 16);



//this function saves input into local storage
$(document).on("click", "button", function(event) {
event.preventDefault();



})
