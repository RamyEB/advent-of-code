const readline = require('readline');
const fs = require('fs');

let previousThree = []
let counterPreviousThree = 0
let count = 0

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
  });
  
  lineReader.on('line', function (line) {
      if(previousThree.length == 3){
          if( parseInt(line)+previousThree[1]+previousThree[2] > previousThree[0]+previousThree[1]+previousThree[2]){
              count++
          }
          previousThree[0] = previousThree[1]
          previousThree[1] = previousThree[2]
          previousThree[2] = parseInt(line)
      }else{
        previousThree[counterPreviousThree] = parseInt(line)
        counterPreviousThree++
      }
});

lineReader.on('close', ()=>{
    console.log(count)
})
