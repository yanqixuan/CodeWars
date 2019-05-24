function digital_root(n) {
    // ...
    let num1 =n;
    let ans;
    
    function sum(num1){
      let num=0
      let str = num1+'';
      for (let i=str.length;i>0;i--){
       let j = parseInt(num1/ Math.pow(10,(i-1))) ;
       num1 -= j * Math.pow(10,(i-1));
       num += j;
      }
      return num;
    }
    
    ans = sum(num1);
    while(ans>10){
      ans=sum(ans);
    }
    return ans;
  }

Test.assertEquals( digital_root(16), 7 )
Test.assertEquals( digital_root(456), 6 )