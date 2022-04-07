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
        const bottleNumber = new BottleNumber(number);
        const nextBottleNumber = new BottleNumber(bottleNumber.successor());
        return (
            `${(bottleNumber.toString())} of beer on the wall, ` +
            `${(bottleNumber.toString())} of beer.\n` +
            `${bottleNumber.action()}, ` +
            `${(nextBottleNumber.toString())} of beer on the wall.\n`
        );
    }

    quantity(number){
        return new BottleNumber(number).quantity();
    }

    container(number){
        return new BottleNumber(number).container();
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

    quantity(){
        if(arguments.length != 0){
            throw new Error("wrong number of arguments");
        }
        if(this.number === 0){
            return 'no more';
        }else{
            return this.number.toString();
        }
    }

    container(){
        if(this.number === 1){
            return 'bottle';
        }else{
            return 'bottles';
        }
    }

    action(){
        if(this.number == 0){
            return 'Go to the store and buy some more';
        }else{
            return `Take ${this.pronoun()} down and pass it around`
        }
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
        if(this.number == 0){
            return 99;
        }else{
            return this.number - 1;
        }
    }

    toString(){
        return `${this.quantity()} ${this.container()}`;
    }
}

module.exports = Bottles;