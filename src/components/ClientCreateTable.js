'use client';
import React from 'react'

const ClientCreateTable = (colStart, colEnd, rowStart, rowEnd, table) => {

    var colCounter = 1;
    var rowCounter = 1;
    ++colCounter;
    
    table.innerHTML += `<thead><tr id='tr'>`;

    var tr = document.getElementById("tr")
    tr.innerHTML += `<th className="row${rowCounter} col${colCounter}"></th>`;

    // Check whether to increment or decrement starting at $colStart value.
    if(colStart > colEnd){
        for(let i = colStart; i >= colEnd; --i){
            let num = i;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            tr.innerHTML += `<th className="row${rowCounter} col${colCounter}">${num}</th>`;
            ++colCounter;
        } // end of for()
    } else {
        for(let i = colStart; i <= colEnd; ++i){ // idkJS()
            let num = i;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            tr.innerHTML += `<th className="row${rowCounter} col${colCounter}">${num}</th>`;
            ++colCounter;
        } // end of for()
    }

    ++rowCounter;
    table.innerHTML += `</tr></thead>`;
    table.innerHTML += `<tbody id="tbody">`;

    var tbody = document.getElementById("tbody");

    if(rowStart > rowEnd){
        for(let j = rowStart; j >= rowEnd; --j){
            colCounter = 1;
            tbody.innerHTML += `<tr id="trCurrent">`;

            let trTemp = document.getElementById("trCurrent");

            let num = j;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            trTemp.innerHTML += `<th className="row${rowCounter} col${colCounter}">${num}</td>`;
            colCounter++;

            if(colStart > colEnd){
                for(let k = colStart; k >= colEnd; --k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    trTemp.innerHTML += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            } else {
                for(let k = colStart; k <= colEnd; ++k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    trTemp.innerHTML += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            }

            ++rowCounter;
            trTemp.innerHTML += `</tr>`;
            trTemp.removeAttribute("id");
        } // end of for()
        table.innerHTML += `</tbody>`;
    } else {
        for(let j = rowStart; j <= rowEnd; ++j){ // idkJS()
            colCounter = 1;
            tbody.innerHTML += `<tr id="trCurrent">`;

            let trTemp = document.getElementById("trCurrent");

            let num = j;
            if(num % 1 != 0){
                num = num.toFixed(1);
            }
            trTemp.innerHTML += `<th className="row${rowCounter} col${colCounter}">${num}</td>`;
            colCounter++;

            if(colStart > colEnd){
                for(let k = colStart; k >= colEnd; --k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    trTemp.innerHTML += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            } else {
                for(let k = colStart; k <= colEnd; ++k){
                    let num = j * k;
                    if(num % 1 != 0){
                        num = num.toFixed(1);
                    }
                    trTemp.innerHTML += `<td className="row${rowCounter} col${colCounter}">${num}</td>`;
                    ++colCounter
                } // end of for()
            }

            ++rowCounter;
            trTemp.innerHTML += `</tr>`;
            trTemp.removeAttribute("id");
        } // end of for()
        table.innerHTML += `</tbody>`; 
    }
    return table;

}

export {
    ClientCreateTable
}