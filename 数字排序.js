function order(words){
    let arr = words.split(' ').sort((a,b)=>a.replace(/[^0-9]/g,'') - b.replace(/[^0-9]/g,'')).join(" ");
      return arr;
  }
order("is2 Thi1s T4est 3a");