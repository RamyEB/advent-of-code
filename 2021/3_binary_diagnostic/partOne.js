const readline = require('readline');
const fs = require('fs');

let numberOfLines = 0
let numberOfOneEachPosition = Array(12).fill(0)

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    line.split('').forEach((value,index) => {
        if(value==="1")
            numberOfOneEachPosition[index]=numberOfOneEachPosition[index]+1
    });
    numberOfLines++
});

lineReader.on('close', ()=>{
    let epsilon = []
    numberOfOneEachPosition.forEach((value, index)=>{
        let numberOfZero = numberOfLines-value
        if(numberOfZero < numberOfOneEachPosition[index] ){
            numberOfOneEachPosition[index]=1
            epsilon[index] = 0
        }
        else{
            numberOfOneEachPosition[index]=0
            epsilon[index] = 1
        }
    })
    let gamma = numberOfOneEachPosition.join("")
    epsilon = epsilon.join("")
    console.log(gamma)
    console.log(epsilon)
    console.log(parseInt(gamma, 2))
    console.log(parseInt(epsilon, 2))
    console.log(parseInt(gamma, 2)*parseInt(epsilon, 2))
})


