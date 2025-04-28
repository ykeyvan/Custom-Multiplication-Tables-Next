'use client'
import React from 'react'
import { submitForm } from './ServerFormAction.js';

export default function ServerFormHandle() {
  async function handleSubmit(formData) {
    let serverTableRes = document.getElementById('serverTableRes');
    while(serverTableRes.firstChild){
      serverTableRes.removeChild(serverTableRes.firstChild);
    }
    const result = await submitForm(formData)
    serverTableRes.innerHTML += result;
  }

    return (
        <>
        <form className="needs-validation" action={handleSubmit}>
            <fieldset>
              <legend>Server Side Calculation</legend>
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
