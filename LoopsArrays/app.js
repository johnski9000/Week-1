let coffeeOrder =[
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's New"
]
console.log(coffeeOrder[1]);

console.log(coffeeOrder.length);

coffeeOrder.push("John - Vanilla Late");

console.log(coffeeOrder)

coffeeOrder.pop();

console.log(coffeeOrder)

let songList = [
    "something - something",
    "something - something",
    "something - something"
]

songList.push("something - something", "something - something")
console.log(songList)
songList.pop()
console.log(songList)

let filmList = [
    "something - something",
    "something - something1",
    "something - something2",
    "something - something3",
    "something - something4"
]

for(let i = 0;  i < filmList.length; i++){
    console.log(filmList[i])
}

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if(i % 2 == 0)
        multiplesTwo.push(i);
}
console.log(multiplesTwo);

let age = 15; 

while ( age < 18 ){
    console.log("You're a child!");
    age++;
}   
console.log("You're an adult!");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club"

while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard);

let filmList1 = [
    "something - something",
    "something - something1",
    "something - something2",
    "something - something3",
    "something - something4"
]

for (i = 0; i<filmList1.length; i++){
    console.log(filmList1[i])
}

let randomNum = [];

for (i = 0; i < 6; i++){
    randomNum.push(Math.floor(Math.random()*50))
    console.log(randomNum[i])
}

for (i = 9; i != -1; i--){
    console.log(i)
}

let filmList2 = [
    "something - something",
    "something - something1",
    "Die Hard",
    "something - something3"
]

for (i = 0; i < 4; i++){
    if (i == 2 && filmList2[i] == "Ghostbusters"){
        console.log("We have Ghostbusters!!")
    } else if (i == 2 && filmList2[i] != "Ghostbusters"){
        console.log("We want Ghostbusters!!")
    } else {
        console.log(filmList2[i])
    }
}

let numArray = [];
let number10 = 0;
for (i = 0; i < 6; i++){
    number10 = Math.floor(Math.random()*30)
        if (number10 % 7 == 0){
            numArray.push(number10)
        }
}

console.log(numArray)



let bobsFollowers = [
    "steve",
    "mary",
    "joe",
    "becky"
]

let hannahsFollowers = [
    "joe",
    "alan",
    "becky",
    "melissa"
]

for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j < hannahsFollowers.length; j++) {
        if(bobsFollowers[i] == hannahsFollowers[j]) {
            console.log(bobsFollowers[i])
        }
    }
}

