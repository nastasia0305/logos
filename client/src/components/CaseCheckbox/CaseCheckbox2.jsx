import React from 'react';

function CaseCheckbox({ idx, value }) {
  return (
    <div className="supAnswer">
      <div className="supAnswerInp">
        <input className='cb pristine' name='service' type="radio" id={`example${idx}`} value={`${value}`} />
        <label className='cb-label' htmlFor={`example${idx}`} > {value}</label>
      </div>
    </div >
  );
}

export default CaseCheckbox;
