let gameSeq = [];
let userSeq = [];
let colors = ["red","green","yellow","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function () {
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;

    // Choose a random button ...
    let flashBox = Math.floor(Math.random() * 4) + 1;
    let boxToFlash = document.querySelector(`.box${flashBox}`);
    let randColor = colors[flashBox-1];
    gameSeq.push(randColor);

    btnFlash(boxToFlash);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx])
        {
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp, 250);
            }
        }
    else
    {
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 100);
        h2.innerHTML = `Game Over! <b>Your Score Was : ${level} </b> <br>Press Any Key to Start`;
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }
        
}

let allBtns = document.querySelectorAll('.box');

for(btn of allBtns){
    btn.addEventListener("click",  btnPress);
}

