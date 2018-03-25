const expect = require("chai").expect;

function solution1(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 === 0 || i % 5 ===0){
        sum += i
      }
    }
    return sum;
  }

function solution2(number){
  
    function power (number, base) {
        var i = 1,res = 0;    
        while(base*i < number) {          
            res+= base*i
            i++;
        }
        return res;
    }

    return power(number,3) + power(number,5) - power(number, 15)


}


console.log(solution1(190000000) - solution2(190000000))

describe("solution", function () {
    it("should return sum of numbers that are below input number" +
    "and can be divided by either 3 or 5", function () {
        expect(solution2(1000000000)).to.equal(233333333208594180);
    });
})

