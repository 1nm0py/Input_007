import React from 'react'

export default function inp_Home() {
    const handleClick = () =>{
        localStorage.clear();
        window.location.reload();
    }
  return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
    }
