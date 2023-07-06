let A=[1,1,1,1,2,2,2,2,2,1,1,1,1]

    let maxCount = 0;
   for(let i=0;i<A.length;i++){
       let Count =0;
       for(let j=i;j<A.length;j++){
         if (A[i]== A[j])  // Check if the element is odd
          Count++
          else 
          break;
       }
        if (Count > maxCount&&A[i]%2!==0) 
          maxCount=Count;
        }
    console.log(maxCount);
  
