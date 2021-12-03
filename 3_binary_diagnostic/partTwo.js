const readline = require('readline');
const fs = require('fs');

let oxygen = []

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

lineReader.on('line', function (line) {
    oxygen.push(line)
});


const count = (tab, index) => {
    let numberOfOnes = 0
    tab.forEach((value)=>{
        if (value[index]=="1")
            numberOfOnes++
    })
    return numberOfOnes
}

const filterElementsOxygen = (tab) => {
    let index=0
    while(tab.length != 1){
        if (tab.length - count(tab, index) > count(tab, index)){
            tab = tab.filter(word => word[index] == "0")
        }
        else {
            tab = tab.filter(word => word[index] == "1")
        }
        index++
    }
    return tab;
}

const filterElementsnCo2 = (tab) => {
    let index=0
    while(tab.length != 1){
        if (tab.length - count(tab, index) > count(tab, index)){
            tab = tab.filter(word => word[index] == "1")
        }
        else {
            tab = tab.filter(word => word[index] == "0")
        }
        index++
    }
    return tab;
}

lineReader.on('close', ()=>{
    let co2 = oxygen
    oxygen = parseInt(filterElementsOxygen(oxygen)[0],2)
    co2 = parseInt(filterElementsnCo2(co2)[0],2)
    console.log(oxygen)
    console.log(co2)
    console.log(co2 * oxygen)
})


