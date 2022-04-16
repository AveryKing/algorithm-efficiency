function sumIntegers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }

const N = 100; 
const start = process.hrtime.bigint();
const answer = sumIntegers(N); 
const end = process.hrtime.bigint(); 
console.log(`Summing ${N} numbers took ${end - start} nanoseconds`);