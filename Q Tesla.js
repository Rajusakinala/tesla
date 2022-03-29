//Tesla quastion

let str = "example";
let finalArr = [];
let z= 0;
let arr = str.split("").sort();
var newArr = arr.filter((item, index, arr) => arr.indexOf(item) == index);
for (let i = 0; i<newArr.length; i++){
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
    if(newArr[i]==arr[j]){count++}
    }
    console.log(newArr[i]+"="+count);
    function recurssive(count){
        if(finalArr.includes(count)){
            count--
            z++
            recurssive(count)

        }else if (count>0){
            finalArr.push(count)
        }

    }
    recurssive(count);
}
console.log(finalArr);
console.log(z);











