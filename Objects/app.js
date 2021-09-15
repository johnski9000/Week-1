const person1 = {
    name: "John",
    age: 26,
    favSongs: [
        "something - something",
        "something1 - something1",
        "something2 - something2"
    ]
    
}
console.log(person1.name);
console.log(person1.favSongs[2])
let offer = "none";

let time = 1200;
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: True,
    drink: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],
    breakfastOffer: "Free Croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
    openCafe(){
        if (this.hasSpecialOffers){
            return "Time for a special offer!"
        } else {
            return "No offer today!"
        }
    }
};
console.log(cafe.openCafe());


let day = "Saturday";
let alarm = "";
const alarmClock =  {
    weekdayAlarm : "7am",
    weekendAlarm : "No alarm needed"
}

if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
    alarm = alarmClock.weekdayAlarm
    console.log(alarm)
} else {
    alarm = alarmClock.weekendAlarm
    console.log (alarmClock.weekendAlarm)
}


