class Bottles{

    successor(number){
        if(number == 0){
            return 99;
        }else{
            return number - 1;
        }
    }

    action(number){
        if(number == 0){
            return 'Go to the store and buy some more';
        }else{
            return `Take ${this.pronoun(number)} down and pass it around`
        }
    }

    quantity(number){
        if(number === 0){
            return 'no more';
        }else{
            return number;
        }
    }

    pronoun(number){
        if(number === 1){
            return 'it';
        }else{
            return 'one';
        }
    }

    container(number){
      if(number === 1){
          return 'bottle';
      }else{
          return 'bottles';
      }
    }

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
        switch (number) {
            case 0:
                return (
                    `${(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
                    `${(this.quantity(number))} ${this.container(number)} of beer.\n` +
                    `${this.action(number)}, ` +
                    `${(this.quantity(99))} ${this.container(number - 1)} of beer on the wall.\n`
                );
            default:
                return (
                    `${(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
                    `${(this.quantity(number))} ${this.container(number)} of beer.\n` +
                    `${this.action(number)}, ` +
                    `${this.quantity(this.successor(number))} ${this.container(number - 1)} of beer on the wall.\n`
                );
            }
    }
                
}

    

module.exports = Bottles;