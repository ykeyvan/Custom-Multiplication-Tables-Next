'use client'
import React from 'react'
import { ClientCreateTable } from './ClientCreateTable.js';

const ClientFormHandle = () => {

    const CreateNumberType = (num) => {
      if(isNaN(Number(num))){
          return false;
      }
      return Number(num);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const clientTableRes = document.getElementById('clientTableRes');
        const formData = new FormData(e.currentTarget);
        const colStart = CreateNumberType(formData.get('colStart'));
        const colEnd = CreateNumberType(formData.get('colEnd'))
        const rowStart = CreateNumberType(formData.get('rowStart'));
        const rowEnd = CreateNumberType(formData.get('rowEnd'));

        while(clientTableRes.firstChild){
          clientTableRes.removeChild(clientTableRes.firstChild);
        }

        if(colStart && colEnd && rowStart && rowEnd) {
          ClientCreateTable(colStart, colEnd, rowStart, rowEnd, clientTableRes);
        } else {
          console.log('error')
        }

    }

    return (
        <>
        <form className="needs-validation" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Client Side Calculation</legend>
              <div className="mb-3">
                <label htmlFor="colStart" className="form-label">Column Start</label>
                <input type="text" className="form-control" id="colStart" name="colStart" defaultValue="1" required />
                <div className="valid-feedback">Test</div>
              </div>
              <div className="mb-3">
                <label htmlFor="colEnd" className="form-label">Column End</label>
                <input type="text" className="form-control" id="colEnd" name="colEnd" defaultValue="12" />
              </div>
              <div className="mb-3">
                <label htmlFor="rowStart" className="form-label">Row Start</label>
                <input type="text" className="form-control" id="rowStart" name="rowStart" defaultValue="1" />
              </div>
              <div className="mb-3">
                <label htmlFor="rowEnd" className="form-label">Row End</label>
                <input type="text" className="form-control" id="rowEnd" name="rowEnd" defaultValue="12" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
          </form>
        </>
    )
}

export default ClientFormHandle