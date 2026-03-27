let choices=document.querySelectorAll(".choice");
let winner=document.querySelector(".winner");
let bg=document.querySelector(".div4");
let number1=document.querySelector(".number1");
let number2=document.querySelector(".number2");
let reset = document.querySelector(".reset");
let userScore=0;
let comScore=0;
let genComChoice = function(){
    const indx=["ROCK","PAPER","SCISSOR"];
    const random=Math.floor(Math.random()*3);
    // console.log(random);
    // console.log(indx[random]);
    return indx[random];

}
function checkWinner(comp,user){
    if(comp===user){
        winner.innerText="It's Draw.....!"
        return;

    }
    if(user==="ROCK"&& comp==="SCISSOR"){
        winner.innerText="You Win! Rock Breaks Scissor";
        bg.style.backgroundColor="green";
        userScore++;
        return;
    }
    if(user ==="ROCK"&&comp==="PAPER"){
        winner.innerText="Computer Wins! Paper Wraps Rocks";
        bg.style.backgroundColor="red";
        comScore++;
        return;
    }
    if (user ==="PAPER"&& comp==="ROCK"){
        winner.innerText="You Win! Paper Wraps Rocks";
        bg.style.backgroundColor="green";
        userScore++;
        return
    }
    if (user==="PAPER"&&comp==="SCISSOR"){
        winner.innerText="Computer Wins! Scissor Cuts Paper";
        bg.style.backgroundColor="red";
        comScore++;
        return;
    }
    if(user==="SCISSOR"&&comp==="ROCK"){
        winner.innerText="Computer Wins! Rock Break Scissor";
        bg.style.backgroundColor="red";
        comScore++;
        return;
    }
    if(user==="SCISSOR"&&comp==="PAPER"){
        winner.innerText="You Win! Scissor Cuts Paper";
        bg.style.backgroundColor="green";
        userScore++;

        return;
    }
    
}
reset.addEventListener("click",(comScore,userScore)=>{
    comScore=0;
    userScore=0;
    number1.innerText=userScore;
    number2.innerText=comScore;
    // location.reload();
    winner.innerText="Pick Your Move";
    bg.style.backgroundColor="cadetblue";
    console.clear();
})
function playGame(userChoice){
    // userChoice=userChoice.toUpperCase()
    let comChoice =genComChoice();
    console.log(userChoice);
    console.log(comChoice);
    // genComChoice();
    checkWinner(comChoice,userChoice)
    number1.innerText=userScore;
    number2.innerText=comScore;
}
choices.forEach((choice)=>{
    choice.addEventListener("click",(event)=>{
        let target=event.target.textContent.trim().toUpperCase();
        playGame(target);

    });
});