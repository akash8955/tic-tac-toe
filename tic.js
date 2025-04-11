let boxes = document.querySelectorAll(".box");
let newG = document.querySelector(".btn1");
let resetG = document.querySelector(".btn2");
let msgContainer = document.querySelector(".winnermsg");
let msg = document.querySelector("#msg")

let turnO = true;
const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkwinner();
    })

})
const resetGame = () => {
    turnO = true;
    enabled();
    msgContainer.classList.add("hide");

}
const disabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const printwinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabled();

}

const checkwinner = () => {
    for (let pattern of winPattern) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                printwinner(posVal1);
            }
        }
    }
}
newG.addEventListener("click", resetGame);
resetG.addEventListener("click", resetGame);