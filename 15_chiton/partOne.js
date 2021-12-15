const readline = require('readline');
const fs = require('fs');

let tab=[]
let nbLine = 0
let memo = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

  
lineReader.on('line', function (line) {
    tab[nbLine] = line.split('').map(x => x = parseInt(x))
    nbLine++       
})

const findMinPath = (tab, y, x) => {
    let right = Number.POSITIVE_INFINITY
    let bottom = Number.POSITIVE_INFINITY
    if(memo[y][x] != 0){
        return memo[y][x]
    }

    if (tab[y+1] == undefined && tab[y][x+1] == undefined ){
        memo[y][x] = tab[y][x]
        return tab[y][x]
    }
    if(tab[y][x+1] != undefined){
        right = findMinPath(tab, y, x+1)

    }
    if(tab[y+1] != undefined){
        bottom = findMinPath(tab, y+1, x)

    }
    
    if(bottom >= right){
        memo[y][x] = right+tab[y][x];
        return right+tab[y][x];
    }else{
        memo[y][x] = bottom+tab[y][x];
        return bottom+tab[y][x];
    }



}

lineReader.on('close', ()=>{
    memo = new Array(nbLine).fill()
    for (let index = 0; index < nbLine; index++) {
        memo[index] = new Array(tab[0].length).fill(0)
    }
    console.log(findMinPath(tab, 0, 0)-tab[0][0]-tab[tab.length-1][tab[0].length-1])
})