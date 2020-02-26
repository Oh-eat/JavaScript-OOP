var Arr = [1, 2, 3];
var Obj = {first: 1, second: 2, third: 3};
for (var key in Obj){
    console.log(key, Obj[key]);
    delete Obj[key];
};
console.log(Obj);