const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function rowCheckerAndGetRowNumber(row) {
    if (typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if (row === '') throw new TypeError('First parameter must not be empty');
    if (row.length > 1) throw new TypeError('First parameter must be only one letter');
    if ((parseInt(row, 10)).toString() !== 'NaN') throw new TypeError('First parameter is not a letter');
    if (row !== 'A' && row !== 'B' && row !== 'C' && row !== 'D' && row !== 'E')  throw new TypeError('First parameter must be an uppercase letter between A and E (inclusive)');
    return row.charCodeAt(0) - 65;
}

function numberChecker(number) {
    if (typeof number !== 'number') throw new TypeError('Second parameter is not a number');
    if ((number).toString().length > 1) throw new TypeError('Second parameter must be only one positive number betweet 0 and 3 (inclusive)');
    if (number < 0 || number > 3 ) throw new TypeError('Second parameter must be a number betweet 0 and 3 (inclusive)');
    return number;
}

function book(row, number) {
    if (layout[rowCheckerAndGetRowNumber(row)][numberChecker(number)].booked) return `Seat in ${row}${number} is already booked`;
    layout[rowCheckerAndGetRowNumber(row)][numberChecker(number)].booked = true; 
    return `Seat in ${row}${number} successfully booked`;
}

function summary() {
    let totalSeat = 0;
    for (let i = 0 ; i < layout.length; i++) {
        totalSeat += layout[i].length;
    }
    let totalReserved = 0;
    let totalFree = 0;
    for (let i = 0 ; i < layout.length; i++) {
        for (let j = 0 ; j < layout[i].length; j++) {
            if (layout[i][j].booked === true) {
                ++totalReserved;
            } else {
                ++totalFree;
            }
        }
    }
    let cashInDrawer = 0;
    for (let i = 0 ; i < layout.length; i++) {
        for (let j = 0 ; j < layout[i].length; j++) {
            if (layout[i][j].booked === true && layout[i][j].type === 'VIP') {
                cashInDrawer += 600;
            }
            if (layout[i][j].booked === true && layout[i][j].type === 'NORMAL') {
                cashInDrawer += 450;
            }
            if (layout[i][j].booked === true && layout[i][j].type === 'ECONOMIC') {
                cashInDrawer += 300;
            }
        }
    }
    return 'Summary: Total seats: ' + totalSeat + ', Reserved seats: ' + totalReserved + ', Free seats: ' + totalFree + ', Cash in drawer: $' + cashInDrawer + '.';
}

console.log(rowCheckerAndGetRowNumber('A'))
console.log(numberChecker(1));
console.log(book('A', 1))
console.log(summary())

module.exports = {
    rowCheckerAndGetRowNumber,
    numberChecker,
    book,
}