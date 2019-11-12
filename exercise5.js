function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var num1 = String(angka)
    var awalNum = num1[0]
    if (num1.length === 1) {
        return Number(num1)
    } else {
        for (let i = 1; i < num1.length; i++) {
            awalNum *= num1[i]
        }
        return kaliTerusRekursif(awalNum)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6