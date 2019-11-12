function totalDigitRekursif(angka) {
    // you can only write your code here!
    var num1 = String(angka)
    var sliceNum = num1.slice(1)
    if (num1.length === 1) {
        return Number(num1)
    } else {
        return Number(num1[0]) + totalDigitRekursif(sliceNum)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5