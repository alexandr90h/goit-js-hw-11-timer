const dateStart = new Date(2020, 9, 23);
const date2 = new Date();
const date3 = Date.now();
console.log(date2);
console.log(dateStart);
setInterval(() => {
    const time = dateStart.getTime() - Date.now()
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    console.log(`${days}:${hours}:${mins}:${secs}`);
},1000)