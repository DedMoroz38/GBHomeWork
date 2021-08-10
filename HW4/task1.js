let number = +prompt('Input number:');
let splited_number = number.toString().split('');

function number_parser(number_list, number) {
    let parse_pattern = {
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (number < 0 || number > 999) {
        console.log('Your number is out of range!')
        return {};

    }
    else if (isNaN(number)) {
        return 'Is not a number!'
    }
    else {
        while (number_list.length < 3) {
            number_list.unshift('0');
        }
        parse_pattern.units = +number_list[2];
        parse_pattern.tens = +number_list[1];
        parse_pattern.hundreds = +number_list[0];
        return parse_pattern;

    }
}
console.log(number_parser(splited_number, number));