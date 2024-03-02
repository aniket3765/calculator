import { Fragment, useEffect } from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [Num, setNum] = useState('');
  const [operation, setOperation] = useState('');
  const [display, setDisplay] = useState('');
 const [firstNum, setFirstNum] = useState('');

  const doOperation = () => {
   switch (operation) {
    case '+': {
      setDisplay(+firstNum+(+Num));
      setFirstNum(+firstNum+(+Num));
    };
    break;
    case '-': {
      setDisplay(+firstNum-+Num);
      setFirstNum(+firstNum-+Num)
    };
    break;
    case '*': {
      setDisplay(+firstNum*+Num);
      setFirstNum(+firstNum*+Num);
    };
    break;
    case '/': {
      setDisplay(+firstNum/+Num);
      setFirstNum(+firstNum/+Num)
    };
      break;
   }
   
   setNum('')
   setOperation('');
  } 

  
  const handlClick = (e) =>{
    if(operation != ''){
      doOperation(operation);
    }
    setOperation(e.target.value )
    setFirstNum(+firstNum+(+Num));
    
    setNum('');
    setDisplay(display+Num+e.target.value)
    
  }

  const clear = ()=> {
    setNum('');
    setFirstNum('');
    setOperation('');
    setDisplay('')
  }

  
 
  return <div className="calculator">
    <h1>Calculator</h1>
    <input value={display} disabled/><br></br>
    <input type ='number' onChange={e=>setNum(e.target.value)} value={Num}/><br></br>
    
    <button value={'1'} onClick={e=>setNum(Num+e.target.value)}>1</button>
    <button value={'2'} onClick={e=>setNum(Num+e.target.value)}>2</button>
    <button value={'3'} onClick={e=>setNum(Num+e.target.value)}>3</button>
    <button value={'+'} onClick={handlClick} >+</button><br></br>
    <button value={'4'} onClick={e=>setNum(Num+e.target.value)}>4</button>
    <button value={'5'} onClick={e=>setNum(Num+e.target.value)}>5</button>
    <button value={'6'} onClick={e=>setNum(Num+e.target.value)}>6</button>
    <button value={'-'} onClick={handlClick}  >-</button><br></br>
    <button value={'7'} onClick={e=>setNum(Num+e.target.value)}>7</button>
    <button value={'8'} onClick={e=>setNum(Num+e.target.value)}>8</button>
    <button value={'9'} onClick={e=>setNum(Num+e.target.value)}>9</button>
    <button value={'*'} onClick={handlClick}  >*</button><br></br>
    <button onClick={clear}>AC</button>
    <button value={'0'} onClick={e=>setNum(Num+e.target.value)}>0</button>
    <button value={'/'} onClick={handlClick}  >/</button>
    <button value={'='} onClick={doOperation}  >=</button>
  </div>
}

export default App;
