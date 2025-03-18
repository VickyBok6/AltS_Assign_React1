// - named export
export const range = (start, end, step = 1) => {
  let output = [];

  //  implement a range function
  function starRate(start, end){
    if(end === undefined){
      end = start;
      start = 0;
      
    }
    return{start, end}
  }
  const {start: endStart, end: startEnd} = starRate(start, end)

  for(let i = endStart; i < startEnd; i += step){
    output.push(i)
  }

  return output;

};

range(10) //start-0 , end-10 [0,1,2,3,4,5,6,7,8,9]
console.log(range(10));
range(2, 10) //start-2, end-10

range(0, 10, 2) // start-0, end-10, step- 2 [0, 2, 4, 6, 8]
range(5) //[0, 1, 2, 3, 4]


