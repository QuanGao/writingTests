const expect = require("chai").expect;

var counter = 0;
function persistence(num) {
    if (num.toString().length > 1) {
        counter++
        var nextNum = num.toString().split("").reduce((a, b) => {
            return (+a) * (+b)
        })
        return persistence(nextNum)
    } else {
        return counter;
    }
}


describe("persistence", function(){
    it("should find the the number of operations need to reduce the number to single digits", function(){
        expect(persistence(999)).to.equal(4)
    })
})







// function findOdd(A) {
//     var obj = A.reduce(function (a, b) {
//         a[b] ? a[b]=a[b]*(-1): a[b] = -1
//             return a
//         }, {}
//     )

//     for(var i in obj){
//         if(obj[i] === -1){
//             return parseInt(i)
//         }
//     }
// }
// describe("findOdd", function(){
//     it("should find the integer that appears odd number of times from an array of integers", function(){
//         expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).to.equal(5)
//     })
// })



// function solution1(number){
//     var sum = 0;

//     for(var i = 1;i< number; i++){
//       if(i % 3 === 0 || i % 5 ===0){
//         sum += i
//       }
//     }
//     return sum;
//   }

// function solution2(number){

//     function power (number, base) {
//         var i = 1,res = 0;    
//         while(base*i < number) {          
//             res+= base*i
//             i++;
//         }
//         return res;
//     }

//     return power(number,3) + power(number,5) - power(number, 15)


// }


// console.log(solution1(190000000) - solution2(190000000))

// describe("solution", function () {
//     it("should return sum of numbers that are below input number" +
//     "and can be divided by either 3 or 5", function () {
//         expect(solution2(1000000000)).to.equal(233333333208594180);
//     });
// })