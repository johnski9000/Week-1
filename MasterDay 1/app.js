console.log(Math.floor(Math.random()*10));

let vert = "  |   |   ";
let hori = "----------"
for (let i = 0;   i < 11;   i++){
    if (i == 3){
        console.log(hori);
    }   else if(i == 7){
        console.log(hori);
    }   else {
        console.log(vert)
    }
}