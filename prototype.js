function Player(name='Unknown', score={first: 0}){
    this.name = name;
    this.score = score;
}

Player.prototype.scoreSum = function(){
    var sum = 0;
    for (var key in this.score){
        sum += this.score[key];
    };
    return sum;
}

var Player1 = new Player('Player1', {first: 30, second: 20, third: 60});
var Player2 = new Player('Player2', {first: 20, second: 50, third: 50});
var Player3 = new Player();

console.log(Player1.scoreSum());
console.log(Player2.scoreSum());
console.log(Player3.scoreSum());

Player.prototype.scoreSum = function(){
    var sum = 0;
    for (var key in this.score){
        sum += this.score[key];
    };
    return 'Sum of score: ' + sum;
}

console.log(Player1.scoreSum());
console.log(Player2.scoreSum());
console.log(Player3.scoreSum());