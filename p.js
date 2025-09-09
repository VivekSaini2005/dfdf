const board = document.querySelector(".board");
let turn = 'O';
const ans = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
]

let board_array = new Array(10).fill("E");
function checkWinner(){
    for(let [val1,val2,val3] of ans){
        if(board_array[val1]!='E' && board_array[val1]===board_array[val2] && board_array[val2]===board_array[val3]){
            return 1;
        }
    }
    return 0;
}

let total_turn = 0;
const printer = (event)=>{
    let id = event.target.id;
    const c = document.getElementById(id);

    if(c.innerHTML != "") return;

    total_turn = total_turn+1;
    c.innerHTML = turn;
    board_array[id] = turn;
    if(checkWinner()){
        const win = document.querySelector('h2');
        win.innerHTML = `Winner is ${turn}`;
        board.removeEventListener('click',printer);
        return;
    }
    if(total_turn==9){
        const win = document.querySelector('h2');
        win.innerHTML = `Draw`;
        board.removeEventListener('click',printer);
        return;
    }
    turn = (turn === 'O'? 'X' : 'O');

}

board.addEventListener('click',printer);

const but = document.querySelector('button');
but.addEventListener('click',()=>{
    turn = "O";
    total_turn = 0;
    board_array = new Array(9).fill("E");
    const cell = document.getElementsByClassName("cell");
    for(let val of cell){
        val.innerHTML = "";
    }
    const win = document.querySelector('h2');
    win.innerHTML = "Winner";
    board.addEventListener('click',printer);
})