const readline = require('readline');
const fs = require('fs');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
let nbLines = 0
let arrayOfNumbers = undefined

let countRow = 0
let countBoard= 0
let tabOfBoards = [[]]

lineReader.on('line', function (line) {
    nbLines++
        if(nbLines<2)
            arrayOfNumbers = line.split(',')
        else{
            if(!(line == "")){
                if (countRow==5){
                    countRow=0
                    countBoard++
                    tabOfBoards[countBoard] = new Array()
                }
                    tabOfBoards[countBoard].push(line.split(' ').filter((elt)=>elt != ""))
                    countRow++
            }
         }
});

const checker = (tab) =>{
    for(let i = 0; i<5; i++){
        if(tab[i].filter( e=> e=='-1').length == 5){
            return true
        }
    }
    
    let inversed = inverseTab(tab) 

    for(let i = 0; i<5; i++){
        if(inversed[i].filter( e=> e=='-1').length == 5){
           return true
        }
    }

    return false
}

const inverseTab = (tab) => {
    let resp = [];

    tab.map((e, x ) => {
        e.map((e, y)=>{
            if(!resp[y])
            resp[y] = new Array()
            if(!resp[y][x])
            resp[y][x] = new Array()
            resp[y][x] = e
        })
    })

    return resp
} 

lineReader.on('close', ()=>{
    let winer = false
    let score = 0
    arrayOfNumbers.forEach(num => {
        tabOfBoards.forEach((board, index) => {
            if(!winer){
                for(let i = 0; i<5; i++){
                    board[i] = board[i].map(e => e == num ? '-1' : e)
                }
                winer = checker(board)
                if(winer){
                    board.flat().map(e => e == '-1' ? '' : score+=parseInt(e))
                    console.log("The score is : " + score*num)
                }
            }
        })
    })

})
