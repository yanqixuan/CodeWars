function spinWords(str){
    //TODO Have fun :)
    let arr = str.split(' ');
    let str2 = '';
    // let result = arr;
    arr.forEach(element => {
        if(element.length >= 5){
            str2 = element.split('').reverse().join('');
            arr= arr.join(' ').replace(element,str2);
            arr = arr.split(' ');
        }
    });
    return arr.join(' ');
  }

console.log(spinWords("Welcome"));
console.log(spinWords('Hey fellow warriors'));