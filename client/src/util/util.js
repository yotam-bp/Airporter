
export const utilService = {
    getTime,
    startClock
}

function getTime(time){
    let unix_timestamp = time
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

// startClock()
function startClock() {
    const today = 0
    let h = 0
    let m = 0
    let s = 0
    m = checkTime(m);
    s = checkTime(s);
     console.log(h + ":" + m + ":" + s); 
         setInterval(() => {
        startClock()
    }, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

