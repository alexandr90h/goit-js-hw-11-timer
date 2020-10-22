class CountdownTimer {
    constructor(obj) {
        this.selector = obj.selector;
        this.targetDate = obj.targetDate;
    }
//     refs = {
//     daysValElem: document.querySelector(`${this.selector} [data-value="days"]`),
//     hoursValElem:document.querySelector(`${this.selector} [data-value="hours"]`),
//     minsValElem: document.querySelector(`${this.selector} [data-value="mins"]`),
//     secsValElem: document.querySelector(`${this.selector} [data-value="secs"]`),
// }

    StartCoutn() {
    daysValElem= document.querySelector(`${this.selector} [data-value="days"]`),
    hoursValElem=document.querySelector(`${this.selector} [data-value="hours"]`),
    minsValElem= document.querySelector(`${this.selector} [data-value="mins"]`),
    secsValElem= document.querySelector(`${this.selector} [data-value="secs"]`),

        setInterval(() => {
            const differenceTime = this.targetDate.getTime() - Date.now();
            const { days, hours, mins, secs } = this.getTimeComponents(differenceTime);
            daysValElem.textContent = days;
            hoursValElem.textContent = hours;
            minsValElem.textContent = mins;
            secsValElem.textContent = secs;
        }, 1000);
        
    }
    getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }
    pad(value) {
    return String(value).padStart(2, '0');
}
}

const getTime = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
getTime.StartCoutn();