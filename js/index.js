const hr = document.querySelector(".hour-indicator");
const mn = document.querySelector(".minute-indicator");
const sc = document.querySelector(".second-indicator");

const deg = 6;

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg`;

}, 1000);


const numberHoursDiv = document.querySelector('.number-hours');
const barSecond = document.querySelector('.bar');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(`<span style='--index:${i}'><p>${i}</p></span>`)
}

numberHoursDiv.insertAdjacentHTML('afterbegin', numberElement.join(''));


// for (let i = 0; i <= 60; i++) {
//     barElement.push(`<span style='--index:${i}'><p></p></span>`)
// }
// barSecond.insertAdjacentHTML('afterbegin', barElement.join(''));