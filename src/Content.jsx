import React from 'react'
import { useState } from 'react';

const Content = () => {
  const[name, setName]= useState("Dave")
  const handleChangeName = () => {
    const names = ["Bob", "Dave", "Martin"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  return (
    <div>
     <p>Hello, {name}</p>
     <button onClick={handleChangeName}>Change name</button>
    </div>
    
  )
}

export default Content
