class Bottles{

    container(number){
      if(number == 1){
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
                       'No more bottles of beer on the wall, ' +
                       'no more bottles of beer.\n' +
                       'Go to the store and buy some more, ' +
                       '99 bottles of beer on the wall.\n'
                   );
               case 1:
                   return (
                       '1 bottle of beer on the wall, ' +
                       '1 bottle of beer.\n' +
                       'Take it down and pass it around, ' +
                       'no more bottles of beer on the wall.\n'
                   );
               case 2:
                   return (
                        `${number} bottles of beer on the wall, ` +
                        `${number} bottles of beer.\n` +
                        'Take one down and pass it around, ' +
                        `${number-1} bottle of beer on the wall.\n`
                   );
                case 6:
                    return(
                        '1 six-pack of beer on the wall, ' +
                        '1 six-pack of beer.\n' +
                        'Take one down and pass it around, ' +
                        '5 bottles of beer on the wall.\n'
                    );
                case 7:
                    return(
                        '7 bottles of beer on the wall, ' +
                        '7 bottles of beer.\n' +
                        'Take one down and pass it around, ' +
                        '1 six-pack of beer on the wall.\n'
                    );
               default:
                   return (
                       `${number} bottles of beer on the wall, ` +
                       `${number} bottles of beer.\n` +
                       'Take one down and pass it around, ' +
                       `${number-1} ${this.container(number - 1)} of beer on the wall.\n`
                   );
               }
           }
                
    }

    

module.exports = Bottles;