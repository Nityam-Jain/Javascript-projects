let boxes = document.querySelectorAll(".btn")
let msgcontainer = document.querySelector('.msg-container')
let newbtn = document.querySelector('#new-game-btn')
let resetbtn = document.querySelector(".Rebtn")
let msg = document.querySelector('#msg')

let winPattern = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [8,5,2],
    [3,4,5],
    [0,4,8],
    [2,4,6],
    [1,4,7],
]

const resetGame = ()=>{
    turnO = true
    enableBoxes()
    msgcontainer.classList.add('hide')
    
}
const disableBoxes  = ()=>{
    for (const box of boxes) {
        box.disabled = true
    }
}

const enableBoxes  = ()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
let turnO = true
boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(turnO){
        box.innerText="O"
        box.style.color = "red"
       turnO = false
    }
    else{
        box.innerText="X"
        box.style.color = "blue"
        turnO = true
    }
    box.disabled= true
    checkWinner()
  })
})
 let showWinner = (winner)=>{
   msg.innerText = `Congratulations! Winner is ${winner}`
   msgcontainer.classList.remove('hide')
   disableBoxes()
 }
let checkWinner = ()=>{
    for (const Pattern of winPattern) {
         let post1 = boxes[Pattern[0]].innerText;
         let post2 = boxes[Pattern[1]].innerText;
         let post3 = boxes[Pattern[2]].innerText;

         if(post1 !="" && post2 != "" && post3!= ""){
            if(post1 === post2 && post2 === post3){
               showWinner(post1)
            }
         }
       
    }
}
newbtn.addEventListener('click',resetGame)
resetbtn.addEventListener('click',resetGame)