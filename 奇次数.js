function findOdd(A) {
    //  console.log(A.length);
        for(let i =0;i<A.length;i++){
            let num = A[i];
            let flag = false;
            for(let j =0;j<A.length;j++){
                if(num === A[j])
                {flag = !flag;}
            }
    //         console.log(flag);
            if(flag){
               return num;
            }
        }
        return 0;
    }
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))