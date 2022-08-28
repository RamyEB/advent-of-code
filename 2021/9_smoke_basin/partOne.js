const readline = require('readline');
const fs = require('fs');

let lines = []
let lowPoints = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

  
lineReader.on('line', function (line) {

    lines[2] = line.split('')
    lines[2].forEach((e,i)=> {
        lines[2][i] = parseInt(e)
    })

    lines[1] != undefined && lines[1].forEach((element, index)=>{
        let low = true;
        if( low && index != 0 && lines[1][index-1] <= element ){
            low = false;
        }
        if( low && index != lines[1].lenght-1 && lines[1][index+1] <= element ){
            low = false;
        }
        if( low && lines[0] != undefined && lines[0][index] <= element ){
            low = false;
        }
        if( low && lines[2] != undefined && lines[2][index] <= element ){
            low = false;
        }
        if(low){
            lowPoints.push(element);
        }
    })
    lines[0] = lines[1]
    lines[1] = lines[2]
})

lineReader.on('close', ()=>{
    lines[2] = undefined
    lines[1].forEach((element, index)=>{
        let low = true;
        if( low && index != 0 && lines[1][index-1] <= element ){
            low = false;
        }
        if( low && index != lines[1].lenght-1 && lines[1][index+1] <= element ){
            low = false;
        }
        if( low && lines[0] != undefined && lines[0][index] <= element ){
            low = false;
        }
        if( low && lines[2] != undefined && lines[2][index] <= element ){
            low = false;
        }
        if(low){
            lowPoints.push(element);
        }
    })
    let sum = 0
    lowPoints.forEach((e) => sum += e+1 )
    console.log(lowPoints)
    console.log(sum)

})