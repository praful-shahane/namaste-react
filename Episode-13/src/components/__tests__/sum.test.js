import {sum} from "../Sum"

test("Sum function should calculate the sum of two numbers",()=>{

      //write code here to test
      const result=  sum(3,4);
      //now test result is 7 or not.
      //Assertion
      expect(result).toBe(7);

});// first argument is String. 2nd argument  call back function.
//first argument give description of testcases.

