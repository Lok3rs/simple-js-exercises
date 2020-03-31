function avg(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

console.log(avg([10, 20, 30, 70, 100, 10.25]))