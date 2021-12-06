const readline = require('readline');
const fs = require('fs');

let numOfFishByDays = []

function add(accumulator, a) {
    return accumulator + a;
  }

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    for(let i=0; i<=8; i++){
        numOfFishByDays[i] = line.split(',').map(Number).filter(x => x == i).length
    }
})

lineReader.on('close', ()=>{

    for(let i=0; i<256; i++){
        let temp = numOfFishByDays[0]
        numOfFishByDays.forEach((e,index)=>{
            if(numOfFishByDays[index+1] != undefined)
            numOfFishByDays[index] = numOfFishByDays[index+1]
            else
            numOfFishByDays[8]=temp
        })
        numOfFishByDays[6]+=temp
    }
    console.log(numOfFishByDays.reduce(add, 0))

})