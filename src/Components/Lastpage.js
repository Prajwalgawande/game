import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'

const Lastpage = (props) => {
  const [PlayerWin, setPlayerWin] = useState("");
  let roundfig = Math.floor(Math.random() * 3);
  let userselect="";
  if(props.choice==="rock"){
    userselect=rock;
  }
  else if(props.choice==="scissors"){
    userselect=scissors;
  }
  else{
    userselect=paper;
  }

  

let opponent;
let autoselect;

  if(roundfig===0){
    opponent=rock;
    autoselect="rock"
  }
  else if(roundfig===1){
    opponent=paper;
    autoselect="paper"
  }
  else{
    opponent=scissors;
    autoselect="scissors"
  }
  const Result = () => {
    if (props.choice === "rock" &&autoselect=== "scissors") {
      setPlayerWin("win");
      props.setscore(props.score + 1);
    } else if (props.choice === "rock" &&autoselect=== "paper") {
      setPlayerWin("lose");
      props.setscore(props.score - 1);
    } else if (props.choice === "scissors" &&autoselect=== "paper") {
      setPlayerWin("win");
      props.setscore(props.score + 1);
    } else if (props.choice === "scissors" &&autoselect=== "rock") {
      setPlayerWin("lose");
      props.setscore(props.score - 1);
    } else if (props.choice === "paper" &&autoselect=== "rock") {
      setPlayerWin("win");
      props.setscore(props.score + 1);
    } else if (props.choice === "paper" &&autoselect=== "scissors") {
      setPlayerWin("lose");
      props.setscore(props.score - 1);
    } else {
      setPlayerWin("draw");
    }
    localStorage.setItem('score',props.score)

  };

  

  return (
    <>
      <div className="declear">
        <p>{PlayerWin}</p>
      </div>
      <div className="lastpage">
        <div className="element">
          <p>You Picked</p>
          <img className='user' src={userselect} alt="user" />
        </div>

        <div className="element">
          <p>Opponent Selected</p>
          <img className='oppont' src={opponent} onLoad={Result} alt="auto selected" />
        </div>
      </div>
      <div className="element">
        <Link to='/'>
        <button className='playagain'>Play Again</button></Link>
      </div>
    </>

  );
};

export default Lastpage;
