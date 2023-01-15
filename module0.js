"use strict";
exports.__esModule = true;
exports.Size = exports.TestEnum = void 0;
function toUpperCase(text) {
    return text.toUpperCase();
}
var text = 'ASd';
// null
var nulVal = null;
// undefined
var undVal = undefined;
// Object
var objVal = {
    a: 'a',
    b: 123,
    c: true
};
// Array
var arrVal = ['a', 'b', 123];
// Turple
var turple = [1, 3, 'a', true, 5];
console.log(toUpperCase(text));
// Unknow
var unnknowVal = { a: '' };
// let unknowCustomVar: {a: string} = unnknowVal;
// unknowVal as {a: string}
// Void
var newFunc = function (a, b, c) {
    if (c === void 0) { c = 23; }
    console.log(a, b, c);
};
// NEVER
// LITERAL
var fontWeight = 600; //Конкретное значение
var stringCr = 'fixed';
// ENUM
var TestEnum;
(function (TestEnum) {
    TestEnum["A"] = "first";
    TestEnum["B"] = "second";
    TestEnum["C"] = "thirsd";
    TestEnum[TestEnum["D"] = 5] = "D";
})(TestEnum = exports.TestEnum || (exports.TestEnum = {}));
console.log(TestEnum.A);
console.log(TestEnum[5]);
var Size;
(function (Size) {
    Size["s"] = "s";
    Size["m"] = "m";
    Size["l"] = "l";
})(Size = exports.Size || (exports.Size = {}));
var enumVar;
enumVar = TestEnum.A;
Object.keys(TestEnum);
