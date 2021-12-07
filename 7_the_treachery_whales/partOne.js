const readline = require('readline');
const fs = require('fs');

let positions = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    positions = line.split(',').map(Number)
    });

lineReader.on('close', ()=>{
    let median = 0
    positions.sort(function(a, b) {
        return a - b;
      });
    median = positions[Math.round(positions.length/2)]

    let fuelCost = 0;
    positions.forEach((e)=>{
        if (e>=median){
            fuelCost+= e-median
        }
        else{
            fuelCost+= median-e
        }
    })
    console.log(fuelCost)
})