import React, { useState } from "react"
import "./App.css"
import { Button } from "semantic-ui-react";


function CounterApp() {

let btncolor;

if(count<5){
  clr = 'green';
}else if(count<10){
  clr = 'blue';
}else{
  clr= 'red';
}

const [count, setCount] = useState(0)
  return (
    <div className="main">
      <div className="btndiv">
        <h1 style={{clr: btncolor}}> value of count is: [ {count} ]</h1><br />
        <div className="sembtn">
          <button class="ui button" onClick={() => (count >=10 ? "" : setCount(count + 1))} >Increase</button>
          <button class="ui button" onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrease</button>
        </div><br />
        <h3>Done by:- shruti . 12012427</h3>
      </div>
    </div>
  );
}
export default CounterApp;