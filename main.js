const dateStart = new Date(2021, 01, 01);
const refs = {
    daysValElem: document.querySelector('[data-value="days"]'),
    hoursValElem:document.querySelector('[data-value="hours"]'),
    minsValElem:document.querySelector('[data-value="mins"]'),
    secsValElem: document.querySelector('[data-value="secs"]'),
}
console.log(dateStart);
setInterval(() => {
    const differenceTime = dateStart.getTime() - Date.now()
    const { days, hours, mins, secs } = getTimeComponents(differenceTime);
    refs.daysValElem.textContent = days;
    refs.hoursValElem.textContent = hours;
    refs.minsValElem.textContent = mins;
    refs.secsValElem.textContent = secs;
    // console.log(`${days}:${hours}:${mins}:${secs}`);
}, 1000);
function pad(value) {
    return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}