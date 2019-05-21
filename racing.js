function race(v1, v2, g) {
    // your code
    if(v1>=v2)
    return null;
    let v = v2 - v1;
    let arr = [];
    let time = parseInt(g/v);
    let time1 = parseInt(g/v*60 - time*60);
    let time2 = parseInt(g/v*60*60 - time1*60-time*60*60);
    arr.push(time);
    arr.push(time1);
    arr.push(time2);
    console.log(time,time1,time2);
    console.log (g/v);
    console.log(arr);
}
race(80, 91, 37);