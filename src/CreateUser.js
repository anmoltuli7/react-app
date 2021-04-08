import React from 'react';
import {} from 'react-bootstrap';
import { useState } from 'react';

function CreateUser(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
  function makeuser(){
      let data = {name,age,address};
      console.warn("called",data);
  }  
    return(
        <>
            <h1>Make a New User</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name}  />
            <br/>
            <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" value={age}  />
            <br/>
            <input type="text" onChange={(e)=>setAddress(e.target.value)} name="address" value={address}  />
            <br/>
            <button onClick={makeuser}>Create User</button>
        </>
    )
}

export default CreateUser;