const layout = [ // LETTER/ROW v // NUMBER >
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65; // A --> 0
}

function getSeat(letter, number) {
    const numberRow = getRowNumber(letter); // A1 // A --> 0 
    const layoutRows = layout[numberRow]; // layout[0]
    const seat = layoutRows[number]; // layout[0][1] 
    return seat; // true
} 

function checkSeatStatus(row, number) { // A1 // ROW === LETTER
    if (typeof row !== 'string') {
        throw new TypeError('First parameter is not a string');
    }    
    if (typeof number !== 'number') {
        throw new TypeError('Second parameter is not a number');
    }
    const seat = getSeat(row, number); // A1
    return seat.booked; // TRUE // layout[0][1].booked
}

function book(row, number) { // A1 // E3
    if (checkSeatStatus(row,number)) { // A1(TRUE)
        return `Seat in ${row}${number} is already booked`;
    }    
    const seat = getSeat(row, number); // E3 --> 4[3] (false)
    seat.booked = true; // layout[4][3] = true; (false --> true)
    return `Seat in ${row}${number} successfully booked`; // assigned
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
    return 'Total seats: ' + totalSeat + ',' + ' Reserved seats: ' + totalReserved + ',' + ' Free seats: ' + totalFree + ', ' + 'Cash in drawer: $' + cashInDrawer + '.';
}
console.log(summary())

module.exports = {
    getSeat,
    checkSeatStatus,
    getRowNumber,
    book
}