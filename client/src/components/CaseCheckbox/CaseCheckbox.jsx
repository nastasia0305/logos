import React from 'react';

function CaseCheckbox({ idx, value }) {
  return (
    <div className="supAnswer">
      <div className="supAnswerInp">
        <input className='allInp' type="checkbox" id={`example${idx}`} value={`${value}`} />
        <label htmlFor={`example${idx}`} >{value}</label>
      </div>
    </div >
  );
}

export default CaseCheckbox;
