const readline = require('readline');
const fs = require('fs');

let depth = 0
let horizontal = 0
let elements = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    elements = line.split(" ")
    elements[1] = parseInt(elements[1])
    if (elements[0] === "forward")
        horizontal+=elements[1]
    else if (elements[0] === "up"){
        depth-=elements[1]
    }
    else{
        depth+=elements[1]
    }
});

lineReader.on('close', ()=>{
    console.log(depth*horizontal)
})


