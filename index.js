console.log("welcome to tic tac toe")
// let bgmusic=new Audio("")
let audioturn= new Audio("ting.mp3")
// let gameover=new Audio("gameover.wav")   
let turn="X"
let gameover=false;

// function to change the turn
const changeTurn=()=>{
    return turn==="X"? "0":"X"

}
//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');

    let wins=[
        [0,1,2,6,6,0],
        [3,4,5,6,19,0],
        [6,7,8,6,32,0],
        [0,3,6,-6,18,90],
        [1,4,7,6,19,90],
        [2,5,8,20,19,90],
        [0,4,8,6,19,45],
        [2,4,6,6,19,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"Won"
            gameover=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

            document.querySelector(".line").style.width="26vw";
        }
    })
}

// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin(); 
            if(!gameover){

                document.getElementsByClassName("info")[0].innerText="turn for "+turn;
            }

        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""

    })
    turn="X"
    gameover=false;
 

        document.getElementsByClassName("info")[0].innerText="turn for "+turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px"
        document.querySelector(".line").style.width="0vw";
    
})

