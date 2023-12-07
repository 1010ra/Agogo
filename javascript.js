const gotam = document.getElementsByClassName("premierBouton");
//  console.log(gotam);
const btn1 = document.getElementById('boat');
const timerElement = document.getElementById("timer")
timerElement.style.display = 'none';
console.log(timerElement);
let interval = null;


btn1.addEventListener('click', function (event) {
  timerElement.innerText = ""
  timerElement.style.display = 'block';
  beBack.style.display = 'block';

  const departMinutes = 20
  back(0.33)
  let temps = departMinutes
  if (interval != null) {
    clearInterval(interval)

  }
  interval = setInterval(() => {

    temps = temps < 0 ? 0 : temps - 1
    temps = temps < 10 ? "0" + temps : temps;
    console.log('temps: ', temps);
    timerElement.innerText = `00:00:${temps}`;
   
    if (temps == 0) {
      console.log(true);
      clearInterval(interval)
      timerElement.style.display = 'none';
      beBack.style.display = 'none';
    }
  }, 1000)
});

const btn2 = document.getElementById('bot');
const timerElements = document.getElementById("timer")

btn2.addEventListener('click', function (event) {
  timerElements.innerText = ""
  timerElement.style.display = 'block';
  beBack.style.display = 'block';

  const departMinutes = 5
  let temps = (departMinutes * 60) - 1
  back(5)

  if (interval != null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    console.log('temps: ', temps);
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    let heures = parseInt(temps / 3600, 10)
    heures = heures < 10 ? "0" + heures : heures
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    console.log('secondes: ', secondes);
    timerElement.innerText = `${heures}:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
   
    if (temps == 0) {
      console.log(true);
      clearInterval(interval)
      timerElement.style.display = 'none';
      beBack.style.display = 'none';
    }
  }, 1000)
});

const btn3 = document.getElementById('tom');
const timerElemente = document.getElementById("timer")

btn3.addEventListener('click', function (event) {
  timerElemente.innerText = ""
  timerElement.style.display = 'block';
  beBack.style.display = 'block';
  const departMinutes = 15
  let temps = (departMinutes * 60) - 1
  back(15)
  if (interval != null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    let heures = parseInt(temps / 3600, 10)
    heures = heures < 10 ? "0" + heures : heures
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${heures}:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1

    if (temps == 0) {
      console.log(true);
      clearInterval(interval)
      timerElement.style.display = 'none';
      beBack.style.display = 'none';
    }
  }, 1000)
});


const btn4 = document.getElementById('job');
const timerElementes = document.getElementById("timer")

btn4.addEventListener('click', function (event) {
  timerElementes.innerText = ""
  timerElement.style.display = 'block';
  beBack.style.display = 'block';

  const departMinutes = 20
  let temps = (departMinutes * 60) - 1
  back(20)
  if (interval != null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {

    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    let heures = parseInt(temps / 3600, 10)
    heures = heures < 10 ? "0" + heures : heures
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `${heures}:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1

    if (temps == 0) {
      console.log(true);
      clearInterval(interval)
      timerElement.style.display = 'none';
      beBack.style.display = 'none';
    }
  }, 1000)
});

const btn5 = document.getElementById('work');
const timerElementess = document.getElementById("timer")

btn5.addEventListener('click', function (event) {
  timerElementess.innerText = ""
  timerElement.style.display = 'block';
  beBack.style.display = 'block';

  const departMinutes = 30
  let temps = (departMinutes * 60) - 1
  back(30)
  if (interval != null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {

    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    let heures = parseInt(temps / 3600, 10)
    heures = heures < 10 ? "0" + heures : heures
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `${heures}:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1

    if (temps == 0) {
      console.log(true);
      clearInterval(interval)
      timerElement.style.display = 'none';
      beBack.style.display = 'none';
    }
  }, 1000)
});

const inputMinutes = document.getElementById('inputMinutes');
console.log(inputMinutes);

inputMinutes.addEventListener('keyup', function (event) {

  console.log('hello');
  timerElement.style.display = 'block';
  beBack.style.display = 'block';

  const departMinutes = inputMinutes.value;
  let temps = departMinutes * 60
  back(inputMinutes.value);

  if (interval != null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    let heures = parseInt(temps / 3600, 10)
    heures = heures < 10 ? "0" + heures : heures
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `${heures}:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    inputMinutes.value = "";
  }, 1000)
 
  if (temps == 0) {
    console.log(true);
    clearInterval(interval)
    timerElement.style.display = 'none';
    beBack.style.display = 'none';

  }
 
});



const beBack = document.getElementById('beBack');
console.log(beBack)
const heures = document.getElementsByClassName('heure hidden')
console.log(heures);



function back(t) {
  let debut = new Date();
 let temps =  (t* 60) - 1
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)
  let heures = parseInt(temps / 3600, 10)
   
 debut.setHours(debut.getHours()+heures);
 debut.setMinutes(debut.getMinutes()+minutes)
 debut.setSeconds(debut.getSeconds()+secondes)

  beBack.innerHTML = `Be Back At:${debut.getHours()}:${debut.getMinutes()}:${debut.getSeconds()}`;
 
}

