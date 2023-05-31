
function updateClock() {

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

   
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  let time = hours + ':' + minutes + ':' + seconds;
  let amPm = hours >= 12 ? 'PM' : 'AM';
  
  document.querySelector('.time-desktop').textContent = time;
  document.querySelector('.am-pm-desktop').textContent = amPm;

  //update if it's afternoon, evening, or morning
  const greetText = document.querySelector('.greet');
  const greets = ['Morning', 'Afternoon', 'Evening', 'Night'];

  greets.forEach( greet => {
    if(hours >= 18  && amPm === 'AM' && greet === 'Morning') {
      greetText.innerHTML = ' Morning'
    } else if(hours >= 12 && amPm === 'PM' && greet === 'Afternoon') {
      greetText.innerHTML = ' Afternoon'
    } else if (hours >= 18 && amPm === 'PM' && greet === 'Evening') {
      greetText.innerHTML = ' Evening'
    } else if(hours >= 00 && amPm === 'AM' && greet === 'Night') {
      greetText.innerHTML = 'Night' 
    }
  })

}

updateClock();
setInterval(updateClock, 1000);


//get current date
const currentDate = new Date();

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = dayOfWeek + ', ' + month + ' ' + day + ' ' + year;
document.querySelector('.live-date').textContent = formattedDate;


//text content editable
const editContent = document.querySelector('.content-editable');

editContent.addEventListener('click', () => {
  editContent.contentEditable = 'true'

})
editContent.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    editContent.contentEditable = 'false'
   }
})

