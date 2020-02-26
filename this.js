var Player = {
    name: 'Wang'
    , score: {
        first: 10,
        second: 20,
        third: 30
    }, scoreSum: function (){
        var sum = 0;
        console.log(this.score);
        for (var key in this.score){
            sum += this.score[key];
        };
        return sum;
    }
}
console.log(Player.scoreSum());