let audioTurn = new Audio("Click.mp3");
let gameOver = new Audio("Winner.mp3");
let clear = new Audio("Clear.wav");

let isGameOver = false;
let turn = "X";

const changeTurn = ()=>{
    return turn === "X"?"O": "X";

}
// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2, 4, 5, 0],
        [3, 4, 5, 4, 15, 0],
        [6, 7, 8, 4, 25, 0],
        [0, 3, 6, -6, 15, 90],
        [1, 4, 7, 4, 15, 90],
        [2, 5, 8, 14, 15, 90],
        [0, 4, 8, 4, 15, 45],
        [2, 4, 6, 5, 14, 135],
    ]
    win.forEach(e => {
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true
            document.getElementsByClassName("celebration")[0].style.width = "14vw"
            gameOver.play()

            // ------------- For Line When win ---------------------
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "22vw"  
        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset Button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ''
    })
    turn = "X"
    isGameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("celebration")[0].style.width = "0px"
    clear.play()
    document.querySelector(".line").style.width = "0"

})