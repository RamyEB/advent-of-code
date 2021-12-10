const readline = require('readline');
const fs = require('fs');

let score = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    let scoreLine = 0
    let stack = []
    let actualLine = line.split('')
    let illegal = undefined

    for (let e of actualLine) {
        switch(e){
            case "(":
            case "{":
            case "[":
            case "<":
                stack.push(e)
                break;
            ;

            case ")":
                if(e.charCodeAt(0) != stack[stack.length-1].charCodeAt(0)+1 ){
                    illegal = e
                }
                stack.pop()
                break;
            case "]":
            case "}":
            case ">":
                if(e.charCodeAt(0) != stack[stack.length-1].charCodeAt(0)+2 ){
                    illegal = e
                }
                stack.pop()
                break;
        }
        if(illegal )
            break;
    }    
    if(!illegal && stack.length != 0){
       for (let e of stack.reverse()) {
        switch(e){
            case "(":
                scoreLine= scoreLine*5+1
                break;
            case "{":
                scoreLine= scoreLine*5+3
                break;
            case "[":
                scoreLine= scoreLine*5+2
                break;
            case "<":
                scoreLine= scoreLine*5+4
                break;  
            ;
        }
       }
       score.push(scoreLine)
    }
    })

lineReader.on('close', ()=>{
    console.log(score.sort(function(a, b){return a - b})[(score.length-1)/2])
})