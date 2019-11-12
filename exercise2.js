function changeVocals(str) {
    //code di sini
    var preRubah = 'aiueoAIUEO'
    var rubah = 'bjvfpBJVFP'
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'v') {
            result += str[i]
            break
        }
        var ketemu = false
        for (let j = 0; j < 10; j++) {
            if (str[i] === rubah[j]) {
                result += preRubah[j]
                ketemu = true
                break
            } else if (str[i] === preRubah[j]) {
                result += rubah[j]
                ketemu = true
                break
            }
        }
        if (!ketemu) {
            result += str[i]
        }
    }
    return result
}

function reverseWord(str) {
    //code di sini

    var result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

function setLowerUpperCase(str) {
    //code di sini
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (let i = 0; i < str.length; i++) {
        var ketemu = false
        for (let j = 0; j < 26; j++) {
            if (str[i] === kecil[j]) {
                result += cap[j]
                ketemu = true
                break
            } else if (str[i] === cap[j]) {
                result += kecil[j]
                ketemu = true
                break
            }
        }
        if (!ketemu) {
            result += str[i]
        }
    }
    return result
}

function removeSpaces(str) {
    //code di sini
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
    var changed = changeVocals(name)
    var reversed = reverseWord(changed)
    var balik = setLowerUpperCase(reversed)
    var noSpaces = removeSpaces(balik)
    return noSpaces

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'