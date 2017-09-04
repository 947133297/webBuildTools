/**
 * Created by liwenjun on 2017/9/1.
 */

// @flow

angular.module("app")
    .directive("header",function(){
        return {
            templateUrl:"./outputs/components/header/header.html",
            link:function(scope){
                scope.headerName = "这是头的名字2";
            }
        }
    });

let x = (a:number)=>a * a;

console.log(x(1));

// console.log(x("123"));  //test flow

// test eslint
// let y = 11;
// console.log(y == 123);

//test proxy
$.get("/api",function(res){
    alert(res);
});