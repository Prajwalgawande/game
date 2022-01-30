import React from 'react';
import { useEffect } from "react";

const Score = (props) => {
    localStorage.setItem('score',props.score)
    useEffect(() => {
       
    }, [props.score]);

  return (
      <>
      <div className="topbar">
          <div className="heading">
              <p>Rock </p>
              <p>Paper</p>
              <p>Secissior</p>
          </div>
          <div className="score">
              <p>Score</p>
              <p>{localStorage.getItem('score')}</p>
          </div>
      </div>
      </>
  );
};

export default Score;
