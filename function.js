var var_ = {value: 'value'};

function func_call(){
    return this.value;
};
console.log(func_call.call(var_));

function func_bind(text){
    return `${this.value} ${text}`
}
var func_binded = func_bind.bind(var_);
console.log(func_binded('barfoo'));
var func_binded = func_bind.bind(var_, 'foobar');
console.log(func_binded());