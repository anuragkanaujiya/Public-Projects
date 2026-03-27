let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let newButton= document.querySelector(".new-game");
let msg=document.querySelector(".h1-msg")
let win=document.querySelector("#msg")

let trunO = true;
const winPattern = [
      [0, 1, 2]
    , [0, 3, 6]
    , [0, 4, 8]
    , [3, 4, 5]
    , [6, 7, 8]
    , [1, 4, 7]
    , [2, 5, 8]
    , [2, 4, 6]
];
const resetGame=()=>{
    trunO=true;
    enableBoxes();
    msg.classList.add("h1-msg");
    newButton.classList.add("new-game")
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            box.innerText = "O";
            trunO = false;
        }
        else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    })

}
);

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    };
};
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false; 
        box.innerText="";
    };
};
const showWinner=(winner)=>{
    msg.classList.remove("h1-msg");
    newButton.classList.remove("new-game")
    disableBoxes();
    win.innerText=`Congratulations , Winner is ${winner}`;

};
const checkWinner = () => {
    for (let patter of winPattern) {
        let pos1 = boxes[patter[0]].innerText;
        let pos2 = boxes[patter[1]].innerText;
        let pos3 = boxes[patter[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }

};

newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);