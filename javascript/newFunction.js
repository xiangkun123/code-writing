/**
 * 现阶段的知识层面
 */

// new Function / eval
var sumMiddle = function (operator) {
    return function (a, b) {
        
        // eval写法
        // var str = "";
        // str += a + operator + b;
        // return eval(str);

        // new Function 写法
        var str = "return ";
        str += a + operator + b;
        return new Function("a", "b", str)(a, b);
    }
} 

// +-*/
var sum = sumMiddle("*");
sum(3, 5);
