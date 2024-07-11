import './App.css'
import React, { useState } from 'react';

export default function App() {
  const [inputs, setInputs] = useState({
    x1: '',
    x2: '',
    x3: '',
    y1: '',
    y2: '',
    y3: ''
  });

  const [results, setResults] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    const { x1, x2, x3, y1, y2, y3 } = inputs;
    if (is_triangle(Number(x1), Number(x2), Number(x3), Number(y1), Number(y2), Number(y3))) {
      setResults([...results, { result: 'right angled triangle', inputs: inputs}]);
    } else {
      setResults([...results, { result: 'not a right angled triangle', inputs: inputs }]);
    }

    setInputs({
      x1: '',
      x2: '',
      x3: '',
      y1: '',
      y2: '',
      y3: ''
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div className="App">
      <h1>Triangle Checker</h1>
      <form onSubmit={handleClick}>
        <input type="number" name="x1" value={inputs.x1} onChange={handleInputChange} placeholder="X1" required />
        <input type="number" name="x2" value={inputs.x2} onChange={handleInputChange} placeholder="X2" required />
        <input type="number" name="x3" value={inputs.x3} onChange={handleInputChange} placeholder="X3" required />
        <br />
        <input type="number" name="y1" value={inputs.y1} onChange={handleInputChange} placeholder="Y1" required />
        <input type="number" name="y2" value={inputs.y2} onChange={handleInputChange} placeholder="Y2" required />
        <input type="number" name="y3" value={inputs.y3} onChange={handleInputChange} placeholder="Y3" required />
        <br />
        <button type="submit">Check Triangle</button>
      </form>

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.result}
            <ul>
              <li>
                {result.inputs.x1} {result.inputs.x2} {result.inputs.x3} {result.inputs.y1} {result.inputs.y2} {result.inputs.y3}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function is_triangle(x1, x2, x3, y1, y2, y3){
  let a = distance(x1, x2, y1, y2)**2
  let b = distance(x2, x3, y2, y3)**2
  let c = distance(x3, x1, y3, y1)**2
  return a+b==c || b+c==a || c+a==b
}
function distance(x1, x2, y1, y2) {
  return Math.sqrt((x1-x2)**2 + (y1- y2)**2);
}

