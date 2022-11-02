//intentionally i have written the wrong code, please correct and merge
function palindrome(str) {
    let bag = '';
    for (let i = 0; i <= str.length; i++){
        bag += str[i];
    }
    if (bag == str) {
        return 'Yes';
    }
    else {
        return 'No'
    }
}

console.log(palindrome('racecar'))