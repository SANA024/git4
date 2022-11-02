//intentionally i have written the wrong code, please correct and merge
function checkPrime(num) {
    let count = 0;
    for (let i = 0; i <= num; i++){
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        return true;
    }
    return false;
}
console.log(checkPrime(13))