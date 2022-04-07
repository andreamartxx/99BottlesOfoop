class Bottles{
    verse(number){
        return(
            `${number} bottles of beer on the wall, `+
            `${number} bottles of beer.\n`+
            'Take one down and pass it around, '+
            `${number-1} bottle${this.pluralize(number)} of beer on the wall.\n`
        );
    }

    pluralize(number) {
        return number - 1 === 1 ? '' : 's';
    }
}

module.exports = Bottles;