var Obj_S = {value_S: 'S'};
var Obj_s = {value_s: 's'};

Obj_s.__proto__ = Obj_S;
console.log(Obj_s.value_s, Obj_s.value_S);