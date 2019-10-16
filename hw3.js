//f(n) = 3*f(n-1) + 2*f(n-2)
//f(0) = 0, f(1) = 1
/*
方式列表：
1.遞迴不查表 （慢）
2.遞迴要查表 （快）
3.不用遞迴 （快）
*/

function f1(n){
    if(n===0 || n===1)return n;
    return 3*f1(n-1)+2*f1(n-2);
}

console.log(f1(5));

var f2_arr = [0,1];

function f2(n){
    if(n<0)throw Error("輸入值不可<0");
    if(f2_arr[n] != null)return f2_arr[n]
    f2_arr[n] = 3*f2(n-1)+2*f2(n-2);
    return f2_arr[n];
}

console.log(f2(5));

var f = 0;
var num1 = 0 ,num2 = 1;

function f3(n){
    if(n===0 || n===1)return n;
    for(var i=1;i<n;i++){
        f = 3*num2 + 2*num1;
        num1 = num2;
        num2 = f;
    }
    return f;
}

console.log(f3(5));

