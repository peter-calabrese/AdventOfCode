const fs = require('fs')
fs.readFile('input.txt', 'utf-8', (err, data) =>{
    if (err) return console.error(err);
    const arr = data.split('\n');
    console.log(`Part 1 Answer: ${partOne(arr)}`) 
    console.log(`Part 2 Answer: ${partTwo(arr)}`) 

})

function partOne(data){
    const charArray=[]
    data.forEach(element=>{
        charArray.push(element.split('').filter(element => parseInt(element)==element))
    })
   return createSum(charArray);
}

function partTwo(data){
    const charArray = []
    const numMap = {
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
    }

    data.forEach(element=>{
        var temp ='';
        for(var i = 0; i < element.length; i++){
            for(var j = i; j <=5+i; j++){
                if(numMap[element.substring(i,j)]){
                   element = element.replace(element.substring(i,j), numMap[element.substring(i,j)] + element.substring(i,j).slice(-1))
                }
            }
        }
        charArray.push(element.split('').filter(element => parseInt(element)==element))
    })
    return createSum(charArray);    
}

function createSum(array){
    var sum = 0
    array.forEach(item =>{
        var num = item[0].toString() + item.pop().toString();
        sum+= parseInt(num);
     })
     return sum;
}