function mySplit(str, sep) {
    var array = []
    var strPenampung = ''
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            array.push(strPenampung)
            strPenampung = ''
        } else {
            strPenampung += str[i]
        }
    }
    return array
}
console.log(mySplit('gkhg hjkhl', ' '));