module.exports = function reverse(n) {
    let num = "" + n;
    let arr = num.split("");
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != "-") {
            arr1.push(arr[i]);
        }
    }
    return arr1.join("");
};
