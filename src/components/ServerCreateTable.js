import React from 'react'

const ServerCreateTable = (colStart, colEnd, rowStart, rowEnd) => {

    var colCounter = 1;
    var rowCounter = 1;
    ++colCounter;
    
    var table = `<thead><tr>`;

    table += `<th className="row${rowCounter} col${colCounter}"></th>`;

    // Check whether to increment or decrement starting at $colStart value.
    if(colStart > colEnd){
        for(let i = colStart; i >= colEnd; --i){
            let num = i;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            table += `<th className="row${rowCounter} col${colCounter}">${num}</th>`;
            ++colCounter;
        } // end of for()
    } else {
        for(let i = colStart; i <= colEnd; ++i){ // idkJS()
            let num = i;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            table += `<th className="row${rowCounter} col${colCounter}">${num}</th>`;
            ++colCounter;
        } // end of for()
    }

    ++rowCounter;
    table += `</tr></thead>`;
    table += `<tbody">`;

    if(rowStart > rowEnd){
        for(let j = rowStart; j >= rowEnd; --j){
            colCounter = 1;
            table += `<tr">`;

            let num = j;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            table += `<th className="row${rowCounter} col${colCounter}">${num}</td>`;
            colCounter++;

            if(colStart > colEnd){
                for(let k = colStart; k >= colEnd; --k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    table += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            } else {
                for(let k = colStart; k <= colEnd; ++k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    table += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            }

            ++rowCounter;
            table += `</tr>`;
        } // end of for()
        table += `</tbody>`;
    } else {
        for(let j = rowStart; j <= rowEnd; ++j){ // idkJS()
            colCounter = 1;
            table += `<tr>`;

            let num = j;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            table += `<th className="row${rowCounter} col${colCounter}">${num}</td>`;
            colCounter++;

            if(colStart > colEnd){
                for(let k = colStart; k >= colEnd; --k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    table += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            } else {
                for(let k = colStart; k <= colEnd; ++k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    table += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            }

            ++rowCounter;
            table += `</tr>`;
        } // end of for()
        table += `</tbody>`; 
    }
    return table;
}

export {
    ServerCreateTable
}