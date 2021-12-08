const readline = require('readline');
const fs = require('fs');

let uniqueSignals = []
let output = []
let accumulator = 0

const rep = [
    [6],
    [2],
    [5, 8, 4],
    [5, 7],
    [4],
    [5, 4, 1],
    [6, 8, 1],
    [3],
    [7],
    [6, 4],
]

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    let order = Array(10).fill(undefined)
    let temp =  line.split('|')
    uniqueSignals = temp[0].split(' ').filter((a) => a!= "")
    output = temp[1].split(' ').filter((a) => a!= "")

    order[1] = uniqueSignals.find(e => e.length == 2).split('')
    order[4] = uniqueSignals.find(e => e.length == 4).split('')
    order[7] = uniqueSignals.find(e => e.length == 3).split('')
    order[8] = uniqueSignals.find(e => e.length == 7).split('')

    uniqueSignals = uniqueSignals.filter(e => e != uniqueSignals.find(e => e.length == 2))
    uniqueSignals = uniqueSignals.filter(e => e != uniqueSignals.find(e => e.length == 4))
    uniqueSignals = uniqueSignals.filter(e => e != uniqueSignals.find(e => e.length == 3))
    uniqueSignals = uniqueSignals.filter(e => e != uniqueSignals.find(e => e.length == 7))


    order.forEach((e,index)=>{
        if(!e){
            uniqueSignals.forEach((element)=>{

                if( index != 0){
                   if( element.split('').length == rep[index][0] 
                    && ( !rep[index][1]
                        || (rep[index][2]==undefined && order[rep[index][1]].every( value => element.split('').includes(value)))
                        || (rep[index][2] !=undefined && order[rep[index][1]].filter(e=> !order[rep[index][2]].includes(e)).every( value => element.split('').includes(value)) ))        
                    ){
                        order[index] = element.split('')
                        uniqueSignals = uniqueSignals.filter(e => e != element)
                    }
                }
            })
        }
    })

    order[0] = uniqueSignals[0].split('')
    let resp = ""
    output.forEach((e)=>{
        order.forEach((element, index) => {
            if(e.split("").sort().join(',')=== element.sort().join(','))
            resp += index.toString()
        });
    })

    accumulator += parseInt(resp)
})

lineReader.on('close', ()=>{
    console.log(accumulator)
})