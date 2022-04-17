// Find missing runner

function missing1(nums) {
    const n = nums.length + 1;
    for (let i = 1; i < n; i++) {
       let found = false;
       for (let j = 0; j < nums.length; j++) {
           if (i === nums[j]) found = true;
       }
       if (!found) return i;
    }
}


function missing2(nums) {
    const n = nums.length + 1;
    let fullSum = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++){
        fullSum += i;
    }

    for (let j = 0; j < nums.length; j++){
        sum += nums[j];
    }
    return fullSum - sum;
}


module.exports = { missing1, missing2 } 