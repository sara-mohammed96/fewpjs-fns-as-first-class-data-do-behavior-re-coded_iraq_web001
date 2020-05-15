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
    return `Good Morning`;
  }
  if(t[0]>=12 && t[0]<17){
    return `Good Afternoon`;
  }
  if(t[0]>=17){
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let x = document.getElementById('greeting');
  x.innerText = message;
  console.log(message);
}
