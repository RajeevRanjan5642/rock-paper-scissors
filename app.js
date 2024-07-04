let userScore=0;
let compScore=0;

const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScore1 = document.querySelector("#user-score");
const compScore1 = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn")

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msgContainer.classList.remove("hide");
    msg.style.backgroundColor="#f3a712"
    msg.innerText="It's a Draw!! Play Again!!";
}

const showWinner= (userWin,userChoice,compChoice)=>{
    if(userWin){
        msgContainer.classList.remove("hide");
        userScore++;
        userScore1.innerText=userScore;
        msg.innerText=`You Won!! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="#1ea896";
    }else{
        msgContainer.classList.remove("hide");
        compScore++;
        compScore1.innerText=compScore;
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}.`
        msg.style.backgroundColor="#ff715b"
    }
}

const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();
    
    console.log(userChoice);
    console.log(compChoice);
    if(userChoice===compChoice) drawGame();
    else{
        let userWin;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});

const resetScore=()=>{
    msgContainer.classList.add("hide");
    userScore=0;
    compScore=0;
    userScore1.innerText=userScore;
    compScore1.innerText=compScore;
}

resetBtn.addEventListener("click",()=>{
    resetScore();
})