/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let t=time.split(":");
  if(t[0]<12){
    return `good morning`;
  }
  if(t[0]>=12 && time<5){
    return `good afternoon`;
  }
  if(t[0]>5){
    return `good evening`;
  }
}
/* Write your implementation of displayMessage() */
