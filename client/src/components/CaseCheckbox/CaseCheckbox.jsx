import React from 'react';

function CaseCheckbox({ idx, value, name }) {
  return (
    <div className="supAnswer">
      <div className="supAnswerInp">
        <input className='cb pristine' name={name.case} type="radio" value={`${value}`} />
        <label className='cb-label' htmlFor={`example${idx}`} > {value}</label>
      </div>
    </div >
  );
}

export default CaseCheckbox;

