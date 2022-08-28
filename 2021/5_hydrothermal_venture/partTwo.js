const readline = require('readline');
const fs = require('fs');

let map = []
for(let i = 0; i<1000; i++){
    map[i] = new Array()
    for(let j = 0; j<1000; j++){
        map[i].push(0)
    }
}

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});
  
lineReader.on('line', function (line) {
    let input = line.replace(" -> ",",").split(',')
    let y1 = parseInt(input[0])
    let x1 = parseInt(input[1])
    let y2 = parseInt(input[2])
    let x2 = parseInt(input[3])


    if(x1 == x2){
        if(y1 <= y2){
            largerPosition = y2
            pointer = y1
        }
        else{
            largerPosition = y1
            pointer = y2
        }
        while(pointer <= largerPosition){
                map[x1][pointer] += 1
                pointer++
        }
    }

    else if(y1 == y2){
        if(x1 <= x2){
            largerPosition = x2
            pointer = x1
        }
        else{
            largerPosition = x1
            pointer = x2
        }
        while(pointer <= largerPosition){
                map[pointer][y1] += 1
            pointer++
        }
    }

    else{
        let pointx1 = x1
        let pointy1 = y1
        let signeX = x1 > x2 ? true : false;
        let signeY = y1 > y2 ? true : false;

        for(let i= 0; i <= Math.abs(x1-x2); i++){
            map[pointx1][pointy1] += 1

            if(signeX){
                pointx1--
            }else{
                pointx1++
            }
            if(signeY){
                pointy1--
            }else{
                pointy1++
            }
        }

    }
});

lineReader.on('close', ()=>{
    let resp = 0
    map.forEach(e=>{
        resp+= e.filter(x => x>=2).length
    })
    console.log(resp)

})