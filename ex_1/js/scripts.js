const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`TODAY IS: ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)? "PM ":"AM ";
    hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand ===' PM ') {
    if (minute===0 && second ===0)
    {
        hour=12;
        prepand=' Noon ';
    }
    else {
        hour=12;
        prepand='PM ';
    }
}
if (hour===0 && prepand ===' AM ') {
    if (minute===0 && second===0) {
        hour=12;
        prepand=' Midnight';
    }
    else {
        hour=12;
        prepand='AM '
    }
}
console.log(`CURRENT TIME: ${hour}${prepand} : ${minute} : ${second}`);