const downTo = require("./helpers");

class Bottles{

    song(){
        return this.verses(99, 0);
    }

    verses(starting, ending) {
        return downTo(starting, ending)
          .map(i => this.verse(i))
          .join('\n');
      }

    verse(number) {
        const bottleNumber = BottleNumber.for(number);
        return (
            `${(bottleNumber)} of beer on the wall, ` +
            `${(bottleNumber)} of beer.\n` +
            `${bottleNumber.action()}, ` +
            `${(bottleNumber.successor())} of beer on the wall.\n`
        );
    }

    quantity(number){
        return new BottleNumber(number).quantity();
    }

    container(smarterNumber){
        return smarterNumber.container();
    }

    action(number){
        return new BottleNumber(number).action();
    }

    pronoun(number){
        return new BottleNumber(number).pronoun();
    }

    successor(number){
        return new BottleNumber(number).successor();
    }      
}

class BottleNumber{
    
    constructor(number){
        this.number = number;
    }

    toString(){
        return `${this.quantity()} ${this.container()}`;
    }

    quantity(){
        return this.number.toString();
    }

    container(){
        return 'bottles';
    }

    action(){

        return `Take ${this.pronoun()} down and pass it around`

    }

    pronoun(){
        return 'one';
    }

    successor(){
        return BottleNumber.for(this.number - 1);
    }

    static for(number){
        if(number instanceof BottleNumber){
            return number;
        }
        let bottleNumberClass;
        try{
            bottleNumberClass = eval(`BottleNumber${number}`);
        }catch(e){
            bottleNumberClass = BottleNumber;
        }
        return new bottleNumberClass(number);
    }
}

class BottleNumber0 extends BottleNumber{
    quantity(){
        return 'no more';
    }

    action(){
        return 'Go to the store and buy some more';
        
    }

    successor(){
        return BottleNumber.for(99);
        
    }
}

class BottleNumber1 extends BottleNumber{
    container(){
        return 'bottle';
    }

    pronoun(){
        return 'it';
    }
}

class BottleNumber6 extends BottleNumber{
    
    toString(){
        return '1 six-pack';
    }

}

module.exports = Bottles;