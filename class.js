class Player{
    constructor(name='Unknown', score={first: 0}){
        this.name = name;
        this.score = score;
    } 
    scoreSum(){
        var sum = 0;
        for (var key in this.score){
            sum += this.score[key];
        };
        return sum;
    }
}

class Player_ extends Player{
    constructor(name='Unknown', score={first: 0}, property=0){
        super(name, score)
        this.property = property;
    } 

    scoreAvg(){
        var sum = 0;
        var length = 0;
        for (var key in this.score){
            sum += this.score[key];
            length ++
        };
        return sum / length;
    }
}

var Player1 = new Player('Player1', {first: 30, second: 20, third: 60});
var Player2 = new Player('Player2', {first: 20, second: 50, third: 50});
var Player3 = new Player();

console.log(Player1.scoreSum());
console.log(Player2.scoreSum());
console.log(Player3.scoreSum());

var Player1 = new Player_('Player1', {first: 30, second: 20, third: 60}, 'Player1');
var Player2 = new Player_('Player2', {first: 20, second: 50, third: 50});
var Player3 = new Player_();

console.log(Player1.scoreAvg(), Player1.property);
console.log(Player2.scoreAvg(), Player2.property);
console.log(Player3.scoreAvg(), Player3.property);
