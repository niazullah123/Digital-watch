/* var currentDate = new Date();
console.log(`This is overall date and time = ${currentDate}`);

var currentDate = new Date();
var year = currentDate.getFullYear();
console.log(`This is current year = ${year}`);

var currentDate = new Date();
var month = currentDate.getMonth();
console.log(`This is current month in javascript 0 equal to january = ${month}`); 

var currentDate = new Date();
var dayOfMonth = currentDate.getDate();
console.log(`This is current date  = ${dayOfMonth}`);

var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
console.log(`This is current day of week 2,. equal to tuesday = ${dayOfWeek}`); 

let nowDate = document.getElementsByClassName('div1');
nowDate
 */

function displayTime(){
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}
  
  setInterval(displayTime, 1000); //call set interval method
  