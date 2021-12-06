const readline = require('readline');
const fs = require('fs');

let lanternfish = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    lanternfish = line.split(',').map(Number)
    });

lineReader.on('close', ()=>{
    for(let i=0; i<80; i++){
        lanternfish.forEach((element,index)=>{
            lanternfish[index]--
            if(lanternfish[index]==-1){
                lanternfish[index]=6;
                lanternfish.push(8)
            }
        })
    }
    console.log(lanternfish.length)
})