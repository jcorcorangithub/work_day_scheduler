var timeDisplayEl = $('#time-display');


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);








  function pastOrPresent(currentTime, blockTime) {
    // if blocktime < currenttime
        // make grey
    // else if blocktime == currenttime
      // make yellow
    // else 
      // make green
  }