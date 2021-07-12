let player1 = window.prompt("Enter first player: ");
let player2 = window.prompt("enter second player: ");
turn = player1;
let port2;
let port3;
let container = document.getElementById("container");
let reset = document.getElementById("reset");
let port;
let counter = document.getElementById("counter");
let timer = document.getElementById("timer");
let time = window.prompt("Enter the timer: ",30);
time = parseInt(time);
let choice = document.getElementById("choice");
let audio = new Audio("tone.mp3");
if (innerWidth>=innerHeight){
port2 =innerWidth * 20/100;
port3 = innerHeight * 15/100;
}
else {

    port2 =innerWidth * 15/100;
    port3 = innerHeight *20/100;
}
choice.style = `width: ${port2}px;margin: auto;border-radius: 20%;border: 2px solid blue;height: ${port3}px;text-align: center;font-size: ${port2/8}px;font-family: sans-serif;`;
let ts = 0;
let t =0;
let counterWidth;
counterWidth = innerWidth/(time*10);
let supplement = counterWidth;
container.style = `width: ${innerWidth}px;
height: ${innerHeight * 3/100}px`;
if (innerWidth<=innerHeight){
    port = innerWidth * 10/100;
}
else {
    port = innerHeight * 10/100;
}
window.addEventListener("click",() => {
    if (turn==player1){
        turn = player2;
    }
    else {
        turn = player1;
    }
    t = 0;
    counterWidth = supplement;
});
counter.style = `width: ${port*2}px;height: ${port*2}px;font-size: ${port/2}px;text-align: center;`;
let finish = setInterval(() => {
    timer.style = `width: ${counterWidth}px;background-color: blue;`;
    counterWidth = counterWidth + supplement;
    counter.innerHTML = `${t}s`;
    t++;

    if (t==time*10){
        t = 0;
        timer.style = `width: ${0}px`;
        counterWidth = supplement;
        if (turn == player1){
            
            choice.innerHTML = `<h1> ${player2} win</h1>`;
            audio.play();
            clearInterval(finish);
            
        }
        else {
            
            choice.innerHTML = `<h1> ${player1} win</h1>`;
            audio.play();
            clearInterval(finish);
        
        }
    }


    
}, 100);