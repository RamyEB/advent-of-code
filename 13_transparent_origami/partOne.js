const readline = require('readline');
const fs = require('fs');

let tab=[]
let surface = { x:1311, y:895}
let firstFold=true

for (let y = 0; y < surface.y; y++) 
    tab[y] = new Array(surface.x).fill('.')

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

  
lineReader.on('line', function (line) {
        line = line.split(",")
        if(line[0]== ""){
        }
        else if(line.length > 1){
            line = line.map(e=> parseInt(e))
            tab[line[1]][line[0]] = "#"
        }   
        else if( firstFold ){
            firstFold=false
            line = line[0].split('=')

            let oldx = surface.x-1
            let oldy = surface.y-1
            if(line[0].includes('x')){
                surface.x = parseInt(line[1])

                for (let y = 0; y < surface.y; y++) {
                    for (let x = surface.x; x < oldx+1; x++) {
                        if(tab[y][x]=="#"){
                            tab[y][oldx-x] = "#"
                        }
                        
                    }
                    
                }
                    
            }
            else               
               {
                surface.y = parseInt(line[1])

                for (let y = surface.y; y < oldy+1; y++) {
                    for (let x = 0; x < surface.x; x++) {
                        if(tab[y][x]=="#"){
                            tab[oldy-y][x] = "#"
                        }
                        
                    }
                    
                }
               }
        }   

})

lineReader.on('close', ()=>{
    let count = 0
    for (let y = 0; y < surface.y; y++) {
        for (let x = 0; x < surface.x; x++) {
            if(tab[y][x] === "#")
            count++
        }
    }
    console.log(count)

})