const readline = require('readline');
const fs = require('fs');

let lines = []
let flash = []
let nbFlash = 0
let nbline = 0

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

  
lineReader.on('line', function (line) {
    lines.push(line.split('').map(e=>parseInt(e)))
    flash[nbline] = new Array(10)
    nbline++

})

const affect = (y,x) =>{
    if (lines[y][x] == 9){
        nbFlash++
        flash[y][x] = true
        lines[y][x] = 0
        for (let ybis = -1; ybis < 2; ybis++) {
            for (let xbis = -1; xbis < 2; xbis++) {
                if (lines[y+ybis] != undefined && lines[y+ybis][x+xbis] != undefined)
                    affect(y+ybis, x+xbis)
            }
        }
    }
    else if(lines[y][x] != 0 )
        lines[y][x]++
    else if(!flash[y][x]){
        lines[y][x]++
    }
}

lineReader.on('close', ()=>{

    for(let i=0; i<500; i++){  


        for(let iF = 0; iF< lines.length; iF++){
            for(let jF = 0; jF< lines.length; jF++){
            flash[iF][jF] = false
        }}


        lines.forEach((line,y)=>{
            line.map((e,x)=>{
                affect(y, x)
            })
        })  

        let sync = true
        for(let iSync = 0; iSync < 10; iSync++){
            if (flash[iSync].indexOf(false) !== -1){
                sync = false
            }
        }

        if(sync){
            console.log(i+1)
            break;
        }
    }

    

})