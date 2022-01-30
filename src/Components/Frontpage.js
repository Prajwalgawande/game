import React from 'react';
import { Link } from 'react-router-dom';
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'

const Mainpage =(props)=> {
    const selection =(e) => {
       props.setchoice(e.target.dataset.id);
    };
  
  
  return(
    <>
    <div className='mainpage'> 
    <h3 className='select'>Select Any one to play</h3>
    <div className="box1">
     <Link to='/Result' ><img data-id='rock' className='option rock' onClick={selection} src={rock} alt="rock"/></Link>
     <Link to='/Result'>
      <img data-id='scissors' className='option scissior' onClick={selection} src={scissors}alt="scissor"/></Link>
      </div>
    <div className="box2">
      <Link to='Result'>
    <img data-id='paper' className='option' onClick={selection} src={paper} alt="paper"/></Link>
    </div>
    </div>
    </>
    

  );
};

export default Mainpage;

