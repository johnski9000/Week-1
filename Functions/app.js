let age = 17;

if (age <= 17){
    console.log("£8")
} else if (age >= 18 || age == 18){
    console.log("£10.95")
} else if (age >=60){
    console.log("£7.50")
}

const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();

let coffeeIsGrinding = true;

const pressGrindBeans2 = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grind")
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans2();

let accnumber = 50449921;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, accnumber);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);


const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));
