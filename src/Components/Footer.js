import React, { useState } from 'react';
import rule from '../images/image-rules.svg'
import btn from '../images/icon-close.svg'

const Footer = () => {
  const [close, setclose] = useState(false);
  const closing=()=>{
    setclose(!close);
  }
  return (
    <>
      <div className="footer">
        <button onClick={closing}>Rules</button>
        {close && <div className="rules">
          <div className="close">
            <span>Rules</span>
            <img onClick={closing} src={btn} alt="closesing" />
          </div>
          <img className="img-rule" src={rule} alt="rules" />
        </div>}
      </div>
    </>
  );
};

export default Footer;
