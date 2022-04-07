class Bottles{

    song(){
        return this.verses(99, 0);
    }

    verses(starting, ending){
        if (starting === 99 && ending == 98) {
            return this.verse(99) + '\n' +this.verse(98);
            } else if(starting ==2 ){
                return this.verse(2) + '\n' + this.verse(1) + '\n' +this.verse(0);
            }else{
                return 'ok';
            }
    }

    verse(number) {
        const bottleNumber = this.bottleNumberFor(number);
        const nextBottleNumber = this.bottleNumberFor(bottleNumber.successor());
        return (
            `${(bottleNumber)} of beer on the wall, ` +
            `${(bottleNumber)} of beer.\n` +
            `${bottleNumber.action()}, ` +
            `${(nextBottleNumber)} of beer on the wall.\n`
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

    bottleNumberFor(number){
        let bottleNumberClass;
        if(number == 0){
            bottleNumberClass = BottleNumber0;
        }else{
            bottleNumberClass = BottleNumber;
        }
        return new bottleNumberClass(number);
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
        if(this.number === 1){
            return 'bottle';
        }else{
            return 'bottles';
        }
    }

    action(){

        return `Take ${this.pronoun()} down and pass it around`

    }

    pronoun(){
        if(arguments.length != 0){
            throw new Error("wrong number of arguments");
        }
        if(this.number === 1){
            return 'it';
        }else{
            return 'one';
        }
    }

    successor(){
        return this.number - 1;
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
        return 99;
        
    }
}

class BottleNumber1 extends BottleNumber{
    
}

module.exports = Bottles;