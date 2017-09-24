class GuessingGame {
    constructor() {
        this.maxIndex=-1;
        this.minIndex=-1;
        this.guessIndex=-1;
        this.range=[];
        this.length=0;
    }

    setRange(min, max) {
        this.length=max-min+1;
        this.range=new Array(this.length);
        for(var i=0;i<this.length;i++) {
            this.range[i]=min+i;
        }
        this.minIndex=0;
        this.maxIndex=this.length-1;
    }

    guess() {
        if((this.minIndex+this.maxIndex)%2===0)
            this.guessIndex=(this.minIndex+this.maxIndex)/2;
        else
            this.guessIndex=(this.minIndex+this.maxIndex+1)/2;
        return this.range[this.guessIndex];
    }

    lower() {
        this.maxIndex=this.guessIndex;
    }

    greater() {
        this.minIndex=this.guessIndex;
    }
}

module.exports = GuessingGame;
