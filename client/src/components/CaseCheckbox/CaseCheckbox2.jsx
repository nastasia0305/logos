import React from 'react';

function CaseCheckbox({ idx, value }) {
  return (
    <div className="supAnswer">
      <div className="supAnswerInp">
        <input className='cb pristine' name='usluga' type="checkbox" id={`example${idx}`} value={`${value}`} />
        <label className='cb-label' htmlFor={`example${idx}`} > {value}</label>
      </div>
    </div >
  );
}

export default CaseCheckbox;
