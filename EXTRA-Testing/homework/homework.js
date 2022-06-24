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

module.exports = {
    getSeat,
    checkSeatStatus,
    getRowNumber,
    book
}