const X_CLASS = "X";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("#board");
const winningMessage = document.getElementById("winning-message");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById("restartbutton");

let circleturn;

StartGame();
restartButton.addEventListener("click",StartGame);

function StartGame()
{
    circleturn = false;
    cellElements.forEach((cell) => 
    {

        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick,{once:true});
    });
    
    setBoardHoverClass();
    winningMessage.classList.remove("show");

}


function handleClick(e)
{
    const cell = e.target;
    const currentClass = circleturn ? CIRCLE_CLASS : X_CLASS;
    
    placeMark(cell,currentClass);

    if(checkWin(currentClass))
    {
        endGame(false);
    }
    else if(isDraw())
    {
        endGame(true);
    }
    else
    {
        swapTurns();
        setBoardHoverClass();
    }
    
}

function swapTurns()
{
    circleturn = !circleturn;
}



function setBoardHoverClass()
{
   board.classList.remove(CIRCLE_CLASS);
   board.classList.remove(X_CLASS);
   if(circleturn)
   {
    board.classList.add(CIRCLE_CLASS);
   }
   else
   {
    board.classList.add(X_CLASS);
   }
}


function endGame(draw)
{
    if(draw)
    {
        winningMessageTextElement.innerHTML = "Draw!"
    }
    else
    {
        winningMessageTextElement.innerHTML = `${circleturn ? "O's" : "X's"} Wins`;
    }
    winningMessage.classList.add("show");
}


function isDraw()
{
    return [...cellElements].every((cell) => 
    {
        return(
            cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
        );
    });
}

function placeMark(cell,currentClass)
{
    cell.classList.add(currentClass);
}

function checkWin(currentClass)
{
    return WINNING_COMBINATIONS.some((combination) =>
        {
            return combination.every( (index) =>
            {
                return cellElements[index].classList.contains(currentClass);

            })
        })
}