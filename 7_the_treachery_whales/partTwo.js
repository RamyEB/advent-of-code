const readline = require('readline');
const fs = require('fs');

let positions = []

function add(accumulator, a) {
    return accumulator + a;
  }

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

var calculCost = (tab,num)=>{
    let fuelCost = 0;
    tab.forEach((e)=>{
        if (e>=num){
            for(let i= 1; i<=e-num; i++)
                fuelCost+= i
            }
        else{
            for(let i= 1; i<=num-e; i++)
                fuelCost+= i
        }
    })

    return fuelCost
}
  
lineReader.on('line', function (line) {
    positions = line.split(',').map(Number)
    });

lineReader.on('close', ()=>{
    let average = positions.reduce(add, 0)/positions.length

    let round = calculCost(positions, Math.round(average))
    let floor = calculCost(positions, Math.floor(average))

    console.log(round > floor ? floor : round)
})