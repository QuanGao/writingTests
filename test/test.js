const expect = require("chai").expect;
const log = console.log
//-------------------------------------------------------------------------------------
const moves1 = [
    {p: 'R', x: 0, y: 0},
    {p: 'Y', x: 100, y: 100},
    {p: 'R', x: 1, y: 0},
    {p: 'Y', x: 99, y: 100},
    {p: 'R', x: 2, y: 0},
    {p: 'Y', x: 98, y: 100},
    {p: 'R', x: 3, y: 0},
    {p: 'Y', x: 96, y: 100}
  ];
  
  const moves2 = [
    {p: 'R', x: 15, y: 15},
    {p: 'Y', x: 10, y: 10},
    {p: 'Y', x: 10, y: 11},
    {p: 'Y', x: 10, y: 12},
    {p: 'Y', x: 10, y: 13},
    {p: 'R', x: 15, y: 16},
    {p: 'R', x: 16, y: 15},
    {p: 'R', x: 16, y: 16}
  ];
  
  const moves3 = [
    {p: 'G', x: 0, y: 0},
    {p: 'Y', x: 0, y: 1},
    {p: 'G', x: 1, y: 1},
    {p: 'Y', x: 1, y: 2},
    {p: 'G', x: 2, y: 2},
    {p: 'Y', x: 2, y: 3},
    {p: 'G', x: -1, y: -1},
    {p: 'Y', x: 3, y: 3}
  ];
  
  const moves4 = [
    {p: 'A', x: 50, y: -50},
    {p: 'B', x: 49, y: -50},
    {p: 'C', x: 48, y: -50},
    {p: 'D', x: 50, y: -49},
    {p: 'A', x: 51, y: -50},
    {p: 'B', x: 49, y: -49},
    {p: 'C', x: 48, y: -51},
    {p: 'D', x: 51, y: -49}
  ]
  
  const moves5 = [
    {p: 'P', x: 0, y: 1},
    {p: 'P', x: 0, y: -1},
    {p: 'P', x: 0, y: -2},
    {p: 'P', x: 0, y: -3},
    {p: 'E', x: 0, y: 0},
    {p: 'E', x: 1, y: -1},
    {p: 'E', x: 2, y: -2},
    {p: 'E', x: 3, y: -3}
  ]

const connectFour = moves => {
    M = new Set(moves.map(move => [move.x, move.y].join(move.p)));
    for (move of moves)
      for ([x, y] of [[0, 1], [1, 0], [1, 1], [1, -1]])
        if ([1, 2, 3].every(i => M.has([move.x+i*x, move.y+i*y].join(move.p))))
          return move.p;
    return null;
}
// const connectFour = moves => {

//     var players = moves.map(item=>item.p).reduce((a,b)=>{
//         a[b]? a[b]++:a[b]=1;
//         return a;
//     }, {})

//     var potentials = Object.keys(players).filter(item=>players[item]>=4);
    
//     if(potentials.length>0){
//         for(var i=0; i<potentials.length; i++){
//             var pmoves = moves.filter(item=>item.p === potentials[i]).sort((a,b)=>{
//                 return +a.x - +b.x === 0? +a.y - +b.y : +a.x - +b.x;
//             });
//             while(pmoves.length>3){   
//                 var xStrike = 1, yStrike = 1,dStrikePlus = 1,dStrikeMinus = 1;
//                 var records = pmoves.reduce(function(a,b){
//                     if(a.x+1===b.x && a.y+1 === b.y){
//                         dStrikePlus++;
//                         return b;
//                     } else if (a.x+1===b.x && a.y-1 === b.y){
//                         dStrikeMinus++;
//                         return b;
//                     }else if (a.x ===b.x && a.y+1 === b.y){
//                         yStrike++;
//                         return b;
//                     } else if (a.x+1===b.x && a.y === b.y){
//                         xStrike++;
//                         return b;
//                     } else {
//                         return a;
//                     }
//                 })

//                 if(xStrike>=4 || yStrike>=4 || dStrikePlus>=4 || dStrikeMinus>=4){
//                     return potentials[i]
//                 }
//                 pmoves.shift();           
//             }       
//         }
//         return null;
//     } else {
//         return null;
//     }
// }

// describe("Tests", function() {
//   it("4 in a row", function() {
//     expect(connectFour(moves1)).to.equals('R');
//   });
//   it("4 in a column", function(){
//     expect(connectFour(moves2)).to.equals('Y');
//   });
//   it("4 in diagonal", function(){
//     expect(connectFour(moves3)).to.equals('G');
//   });
//   it("no winner", function(){
//     expect(connectFour(moves4)).to.equals(null);
//   });
//   it("4 in diagonal", function(){
//     expect(connectFour(moves5)).to.equals('E');
//   });
// });

//-------------------------------------------------------------------------------------
// function toCamelCase(str){
//     return str.replace(/([-_]+)([a-zA-Z])/g, function(match, p1, p2, index, string){
//         console.log({match, p1, p2, index, string})
//         return p2.toUpperCase()
//     }) 
// }

// console.log(toCamelCase("the_-_-----stealth-____warrior"));

//-------------------------------------------------------------------------------------
// function EightQueens(strArr) { 
//     while (strArr.length > 0){       
//         const queen = strArr.shift();
//         for(var i=0; i<strArr.length; i++){
//             const item = strArr[i]
//             if(item[1] === queen[1] || item[3]===queen[3] || (item[3]-queen[3])/(item[1]-queen[1])===1){
//                 return queen
//             }
//         }           
//     }   
//     return true
// }

// var arr1 = ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] 
// var arr2 = ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]
// var arr3 = ["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]

// console.log(EightQueens(arr2))

//-------------------------------------------------------------------------------------
// function persistence(num) {
//     var counter = 0;
//     function count (num) {
//         if (num.toString().length > 1) {
//             counter++
//             var nextNum = num.toString().split("").reduce((a, b) => {
//                 return (+a) * (+b)
//             })
//             return count(nextNum)
//         } else {
//             return counter;
//         }
//     }
//     return count(num);
// }

// describe("persistence", function(){
//     it("should find the the number of operations need to reduce the number to single digits", function(){
//         expect(persistence(999)).to.equal(4);
//         expect(persistence(39)).to.equal(3);
//         expect(persistence(4)).to.equal(0);
//         expect(persistence(25)).to.equal(2)
//     })
// })


//-------------------------------------------------------------------------------------
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

//-------------------------------------------------------------------------------------
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