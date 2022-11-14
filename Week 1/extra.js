// num = 3
// if (num & 1) {
//     console.log("I am odd.");
// } else {
//     console.log("I am even.");
// }

//it compares the unit mod 2 (end number) with that of the number 1, giving true if both end in 1. Called a mask/bitmask
if (11111 & 000001) {
    console.log("I am odd.");
} else {
    console.log("I am even.");
}
// 110010 & 010000

//terinary operator
// let x = false;
// //takes true -> "red" (first param)
// // false -> "blue" (second param)

// console.log(x ? "red" : "blue");