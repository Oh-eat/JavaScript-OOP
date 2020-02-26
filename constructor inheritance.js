function Obj (value){
    this.value = value;
};

Obj.prototype.func = function(){
    return this.value + this.value
};

function Obj_ (value, value_){
    Obj.call(this, value);
    this.value_ = value_
};

Obj_.prototype = Object.create(Obj.prototype);
Obj_.prototype.constructor = Obj_;
Obj_.prototype.func_ = function(){
    return this.value_ + this.value_
};

var ins = new Obj('value');
var ins_ = new Obj_('value', 'value_');
console.log(ins, ins.constructor, ins.func());
console.log(ins_, ins_.constructor, ins_.func(), ins_.func_());