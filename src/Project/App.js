import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    };

  return (
   
    <body align="center">
        <h1><u><b><i>Every Click Counts</i></b></u></h1>
        <button onclick="{increment}">Click here</button>
        <div id="animation">Made by Radhika S. Purohit</div>
        <div class="myDiv"><p id="output"><u>The counts will appear here</u></p></div>   
    </body>

    );
    }
    
export default App;
