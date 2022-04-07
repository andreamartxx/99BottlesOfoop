class Bottles{
    verse(number){
        switch(number){
            case 0:
                return(
                    `No more bottles of beer on the wall, `+
                    `no more bottles of beer.\n`+
                    'Go to the store and buy some more, '+
                    `99 bottle${this.pluralize(number)} of beer on the wall.\n`     
                )
            case 1:
                return(
                    `1 bottle of beer on the wall, `+
                    `1 bottle of beer.\n`+
                    'Take it down and pass it around, '+
                    `no more bottle${this.pluralize(number)} of beer on the wall.\n`
                )
            case 98 || 99:
                return(
                    '99 bottles of beer on the wall, ' +
                    '99 bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    '98 bottles of beer on the wall.\n' +
                    '\n' +
                    '98 bottles of beer on the wall, ' +
                    '98 bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    '97 bottles of beer on the wall.\n'
                )
            default:
                return(
                    `${number} bottles of beer on the wall, `+
                    `${number} bottles of beer.\n`+
                    'Take one down and pass it around, '+
                    `${number-1} bottle${this.pluralize(number)} of beer on the wall.\n`
                );
        }
    }

    pluralize(number) {
        return number - 1 === 1 ? '' : 's';
    }
}

module.exports = Bottles;