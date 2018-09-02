const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90; 
/* dividing by 60 = percentage and then multiplying it by 360 = degrees; 
the 90 is added to the end because the transform works from left to right
and has been purposefully offset to 'start at 12' */
secondHand.style.transform= `rotate(${secondsDegrees}deg)`;

const minutes = now.getMinutes();
const minDegrees = (minutes * 6) + 90;
minuteHand.style.transform= `rotate(${minDegrees}deg)`;

const hours = now.getHours();
const hourDegrees = ((hours/12)*360) + 90;
hourHand.style.transform=`rotate(${hourDegrees}deg)`;

/* as the code stands, it's the transition is going to do something weird as it
approaches 360 degrees which can be corrected through if statements for a smoother
transition */
}

setInterval(setDate, 1000);