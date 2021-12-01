const readline = require('readline');
const fs = require('fs');

let previousValue = -1
let count = 0


var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
  });
  
  lineReader.on('line', function (line) {
    if (parseInt(line) > previousValue && previousValue != -1 ){
        count++;
    }
    previousValue = parseInt(line)
});

lineReader.on('close', ()=>{
    console.log(count)
})


