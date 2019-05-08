/**
 * 现阶段的知识层面
 */

// setTimeout 传参
var fn = function(a, b, c) {
    console.log(a, b, c);
}
var params = ['a', 'b', 'c'];

// 三种写法：
setTimeout(fn, 1000, 'a', 'b', 'c');
setTimeout.apply(this, [fn, 1000].concat(params));
setTimeout(fn, 1000, ...params);


