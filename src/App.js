import logo from './logo.svg';
import './App.css';
import UserCard from './componets/userCard';
import { useRef, useState } from 'react';

function App() {
  const[ inputvalue , setinputvalue ]=useState("")
  const inputTag =useRef()
  const inputhandale =(e)=>{
    e.preventDefault()
    console.log("hi")
    console.log("hi",inputTag.current.value)

    const searchvalue = inputTag.current.value;
    setinputvalue(searchvalue )
    
  }

  console.log(inputTag )
  return (
    <div className="App">
      <h1>
        User GitHUb
      </h1>
      <form onSubmit={inputhandale}>
        <input 
        // value={inputvalue}
        ref={inputTag} type="text" placeholder='Enter git hub Profile' 
        //  onChange={(e)=>setinputvalue(e.target.value)}  
        />
      </form>
      <UserCard inputvalue={inputvalue} />
    </div>
  );
}

export default App;
