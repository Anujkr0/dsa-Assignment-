const arr1 = [1, 2, 43, 5, 3, 7, 7,8, 4, 2];


const arr2 = [1, 1, 6, 6, 2, 78, 7, 2, 3, 7, 23, 5, 3];


const intersection = (arr1, arr2) => {
    const res = [];



    
    const { length: len1 } = arr1;
    
    
    const { length: len2 } = arr2;
    
    const smaller = (len1 < len2 ? arr1 : arr2).slice();
    
   const bigger = (len1 >= len2 ? arr1 : arr2).slice();

    
    for (let i = 0; i < smaller.length; i++)
    
    {
        if (bigger.indexOf(smaller[i]) !== -1)
        {
         res.push(smaller[i]);
         bigger.splice(bigger.indexOf(smaller[i]), 1, undefined);
     
     
        }
   };

    
   return res;
};


console.log(intersection(arr1 ,arr2));