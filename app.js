let cleanString = (str) => {
    return str.toLocaleLowerCase();
}

let checkPalindrome = (stringInput) => {

    stringInput = cleanString(stringInput);

    return Array.from(stringInput).toString() === Array.from(stringInput).reverse().toString();

}



let generateFibbonacci = ()=> {
    let i;
    let fibArray = [];

    fibArray[0] = 0;
    fibArray[1] = 1;

    for(i = 2; i <= 10; i++){
        fibArray[i] = fibArray[i-2] + fibArray[i-1];

    }

    return fibArray;

}





console.log(checkPalindrome("racecar"));

console.log(generateFibbonacci());















