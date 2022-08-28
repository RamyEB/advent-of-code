const readline = require('readline');
const fs = require('fs');

let uniqueSignals = []
let output = []
let nbDigits = 0

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    let temp =  line.split('|')
    uniqueSignals = temp[0].split(' ').filter((a) => a!= "")
    output = temp[1].split(' ').filter((a) => a!= "")
    .filter((a) => a!= "")
    output.forEach((e)=>{
        elem = e.length
        if((elem > 1 && elem < 5) || elem == 7)
            nbDigits++
    })
})

lineReader.on('close', ()=>{
  console.log(nbDigits)
})