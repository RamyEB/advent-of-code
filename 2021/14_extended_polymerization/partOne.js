const readline = require('readline');
const fs = require('fs');

let paths = []
let combinaison = []
let nbLines = 0

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

  
lineReader.on('line', function (line) {
    if(nbLines==0)
        combinaison = line.split('')
    else if (line != "")
        paths.push([line[0],line[1],line[6]])
    nbLines++
})

function count(arr){
    let letters = {}
    arr.forEach(element => {
        if(letters[element] == undefined)
            letters[element]=0
        else
        letters[element]++
    });
    return letters

}

lineReader.on('close', ()=>{

    for (let stepIndex = 0; stepIndex < 10; stepIndex++) {
        let lettersToAdd = []
        for (let index = 0; index < combinaison.length-1; index++) {
            let pair = combinaison[index]+combinaison[index+1]

            for (let pathIndex = 0; pathIndex < paths.length; pathIndex++) {
                if(paths[pathIndex][0]+paths[pathIndex][1] ==  pair)
                lettersToAdd.push(paths[pathIndex][2])
            }
        }


        for (let index = lettersToAdd.length-1; index > -1; index--) {
            combinaison.splice(index+1, 0, lettersToAdd[index]);
        }
    }





    let apparitions = count(combinaison);
    let arr = Object.values(apparitions);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    console.log( `Min value: ${min}, max value: ${max}` );
    console.log(max - min )
  

})