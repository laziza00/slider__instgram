let game = [
    {
        id : 1,
    },
    {
        id : 2,
    },
    {
        id : 3,
    },
    {
        id : 4,
    },
    {
        id : 5,
    },
    {
        id : 6,
    },
    {
        id : 7,
    },
    {
        id : 8,
    },
    {
        id : 9,
    }
]


let userChoice
let computerChoice
let result
let your__score
let comp__score

let game__List = document.querySelector('.game__list')

game.forEach(element => {

    let li = document.createElement('li')
    li.className = "game__item"
    li.innerHTML = `
    <button class="game__box-item"onclick ="startGame(${element.id})" >
      <i  class='bx bx-x' ></i>
      
    </button>
    `
    game__List.appendChild(li)
});


let items = document.querySelectorAll('.game__item')
let userChoiceOutput = document.querySelectorAll('.game__box-item')
let bx= document.querySelector('.bx-x')



let counts =0;
function startGame (elId) {
  console.log(elId);
    count++;
    for(let i=0; i<userChoiceOutput.length; i++) {
        if(i==elId) {
            if(counts==1) {
                userChoiceOutput[i-1].style.b
                // userChoiceOutput[i-1].textContent ="X";
                // userChoiceOutput[i-1].className ="icons2";

            }
        }
    }
}






// function generateComputerChoice() {

//     const randomNumber = Math.floor(Math.random() *9+1);

//     if(randomNumber ===1) {

//     }
    
// }

// let a = game.id.filter((item) => {
//     return item.id
// })
// console.log(a);