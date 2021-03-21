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
updateRowColor ($("#15"), currentTime, 15);
updateRowColor ($("#16"), currentTime, 16);
updateRowColor ($("#17"), currentTime, 17);



//this function saves input into local storage
 
function saveInput(a) {
  $(document).on("click", "button", function(event) {
 event.preventDefault();

 let userInput = $(a).val();
 localStorage.setItem("a", userInput);

 //$(a).val(localStorage.getItem(a));

 })

 

}



saveInput($("input-9"));
//$("input-9").val(localStorage.getItem("input-9"));
saveInput($("input-10"));
saveInput($("input-11"));
saveInput($("input-12"));
saveInput($("input-1"));
saveInput($("input-2"));
saveInput($("input-3"));
saveInput($("input-4"));
saveInput($("input-5"));



