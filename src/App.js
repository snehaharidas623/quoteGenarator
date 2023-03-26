import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const[quotes,setquotes]=useState('');
const getQuote=()=>{
  fetch('https://type.fit/api/quotes')
  .then(res=>res.json())
  .then(data=>{
    let randomnum=Math.floor(Math.random() * data.length)
    setquotes(data[randomnum])
  })
}
useEffect(()=>{
  getQuote()
},[])
  return (
    <div className="App">
    <div className='quote'>
      <h3>Quote OF the dAy</h3>
      <p style={{color:'purple'}}> "{quotes.text}"</p>
      <p style={{color:'orange'}}>-{quotes.author}-</p>

  
    <div className='btncontainer'>
    <button className='btn' onClick={getQuote}>Get quote</button>

    </div>
    </div>
    </div>
  );
}

export default App;
