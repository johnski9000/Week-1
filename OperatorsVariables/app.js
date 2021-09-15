let i = 10;
i = i + 2;
// i = 12
i = i *= 3;
// i = 36;
console.log(i)
i = i - 36;
console.log(i)
let favouritedrink = "coffee";
console.log(`Hello my name is John, my favourite drink is ${favouritedrink}`)
let name1 = 'John Wozniak';
let age = 26;
let favcolor = "blue";
console.log(`Hi my ${name1} and I'm ${age} years old. My favourite color is ${favcolor}.`)
let breakfast = 'eggs on toast';
let lunch = '12 inch subway italian bmt';
let dinner = 'steak and sweet potato mash';
console.log(`Hi, for breakfast I will eat ${breakfast}, for lunch I will then have ${lunch} and for dinner I will have ${dinner}.`)
breakfast = 'sausage and eggs';
lunch = 'cheese toasty';
dinner = 'sunday roast';
console.log(`Hi, for tomorrows breakfast I will eat ${breakfast}, for lunch I will then have a ${lunch} and for dinner I will have a ${dinner}.`)


let birthday = new Date('January 25, 1995, 23:15:30 GMT+11:00')

let elapsedDays = Math.floor( (Date.now() - Date.parse(birthday)  ) / 86400000)   

console.log(`It has been ${elapsedDays} days since I was born.`)

let space1 = 'x';
let space2 = 'o';
let space3 = '';
let space4 = 'x';
let space5 = 'x';
let space6 = '';
let space7 = 'o';
let space8 = '';
let space9 = '';
let grid = [`   |   |   `,
            ` ${space1} | ${space2} |  ${space3} `,
            `   |   |   `,
            `-----------`,
            `   |   |   `,
            ` ${space4} | ${space5} |  ${space6} `,
            `   |   |   `,
            `-----------`,
            `   |   |   `,
            ` ${space7} |  ${space8} |  ${space9} `,
            `   |   |   `]
grid.forEach(function(item) {
    console.log(item)
})
            

let num = 15;

if (num % 3 == 0 && num % 5 == 0){
    console.log("fizz")
} else {
    console.log("buzz")
}

let age1 = 17;
let country = "UK";

if (age1 >= 17 && country == "UK"){
    console.log("Yes, what would you like to drink?")
} else {
    console.log("You aren't old enough")
}

let topping = "beef"

switch (true){
    case topping == "Pulled Pork":
        console.log("This is an important ingredient to my pizza")
        break;
    case topping == "Pepperoni":
        console.log(`I don't mind having ${topping} on my pizza`)
        break;
    default:
        console.log(`${topping} should not be on my pizza`)
        break;
}

let password = "passworda"

if (password.length <= 8){
    console.log("Password is too short")
} else {
    console.log(`Your password is ${password}`)
}

let num1 = 16;

switch (true) {
    case num1 % 3 == 0 && num1 % 5 != 0:
        console.log("fizz")
        break;
    case num1 % 5 == 0 && num1 % 3 != 0:
        console.log("buzz")
        break;
    case num1 % 3 == 0 && num1 % 5 == 0:
        console.log("fizzbuzz")
        break;
    default:
        console.log(`${num1}`)
}

let num2 = 123321;
let b = num2;
let a, temp = 0;
while (num2 > 0) {
    a = num2 % 10;
    num2 = parseInt(num2 / 10);
    temp = temp * 10 + a;
}
if (temp == b) {
    console.log(`Yes, ${b} is a palindrome.`);
} else {
    console.log(`No, ${b} is not a palindrome.`);
}


let placeOfWork = "CodeNation";
let townOfHome = "Manchester";
let time5 = 8;

if (time5 == 7){
    console.log(`You are currently at home in ${townOfHome}`)
} else if (time5 == 8){
    console.log(`You are currently commuting to work`)
} else if (time5 == 9){
    console.log(`You are currently in work at ${placeOfWork}`)
}

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghdjwsh";
let spl = str.split("");
let leng = spl.length;
let temp2 = 0;

for (let i = 0; i < leng; i++){
    switch(spl[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            temp2 = i;
    }
}
console.log(temp2)


let word = "bababa";
let wcheck = word.slice(-1);

if (word == wcheck){
    console.log("True")
} else {
    console.log("False")
}


let num3 = 6;
let num4 = 5;
let num5 = num3 += num4;
let num6 = num3 *= num4;

if (num5 % 2 == 0){
    console.log(num5)
} else {
    console.log(num6)
}

