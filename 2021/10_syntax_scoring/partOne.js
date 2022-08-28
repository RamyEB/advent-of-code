const readline = require('readline');
const fs = require('fs');

let score = 0

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
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
                    score += 3
                }
                stack.pop()
                break;
            case "]":
                if(e.charCodeAt(0) != stack[stack.length-1].charCodeAt(0)+2 ){
                    illegal = e
                    score += 57
                }
                stack.pop()
                break;
            case "}":
                if(e.charCodeAt(0) != stack[stack.length-1].charCodeAt(0)+2 ){
                    illegal = e
                    score += 1197
                }
                stack.pop()
                break;
            case ">":
                if(e.charCodeAt(0) != stack[stack.length-1].charCodeAt(0)+2 ){
                    illegal = e
                    score += 25137
                }
                stack.pop()
                break;
        }
        if(illegal )
            break;
    }
    console.log(stack)

    })

lineReader.on('close', ()=>{
    console.log(score)

})