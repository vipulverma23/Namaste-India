import React from "react";
import {useState} from 'react';

    

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [preferences, setPreferences] =useState('');
  const [days, setDays]=useState('')

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log('name 👉️', name);
    console.log('age 👉️', age);
    console.log('preferences 👉️', preferences);
    console.log('days 👉️', days);
    let state ={
        Name : name,
        Age : age,
        Preferences : preferences,
        Days : days

    }
    //console.log(state);
    console.log(JSON.stringify(state)); 

    // 👇️ clear all input values in the form
    setName('');
    setAge('');
    setPreferences('');
    setDays(''); 
  };
  
  return (
    
    <div>
    <h1>WELCOME</h1>
    <h3> Hii we are here  to make your holidays better let's make it interesting by giving us your Preferences</h3>
      <form action="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:  </label>                               
          <input type="text" name="name" onChange={event => setName(event.target.value)}
          value={name} />
        
        </div>
        <div>
          <label htmlFor="age">Age        :             </label>
          <input type="text" name="age" onChange={event => setAge(event.target.value)}
          value={age} />
        </div>
        <div>
          
          <label>Select your Preferences :  </label>
          <select name="selectList" id="selectList" onChange={event => setPreferences(event.target.value)}
          value={preferences}>
             <option value="mountains">Mountains</option>
             <option value="waterfalls">waterfalls</option>
             <option value="river">River</option>
             <option value="Pilgrimage">Pilgrimage</option>
             <option value="Educational site">Educational site</option>
             
            </select>
        </div>
        <div>
          <label htmlFor="days">Days   :  </label>
          <input type="number" name="days" onChange={event => setDays(event.target.value)}
          value={days}/>
        </div> 
        <div>
            <button title="lets Go" type="submit">Lets Go</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
