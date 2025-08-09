let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;

let turnO = true ; //PlayerO 


let restGame = () =>{
    turnO = true;
    count = 0;
    enableBox ();
    msgContainer.classList.add("hide");
}




const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO === true){
            box.innerText = "O"
            box.classList.add("O-style");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("X-style");
            turnO = true; 
        };
        box.disabled = true;
        count++;
        checkWinner (); 
    });
});


const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratuations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox ()
}




const checkWinner =()=>{
    for(pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
  if(pos1Val != "" && pos2Val != ""  && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
        if(count === 9){
            showDraw();
        }
    }
  }
    }
}


newBtn.addEventListener("click" , restGame);
resetBtn.addEventListener("click" ,restGame);

const showDraw= () =>{
    msg.innerText = "It's A Draw !";
    msgContainer.classList.remove("hide");
    disableBox();
}
