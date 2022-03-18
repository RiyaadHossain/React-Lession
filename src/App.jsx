import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <People></People>
    </div>
  );
}


const People = () => {
  const [count, setCount] = useState(100)
  const plus = () => setCount(count - 1)
  return (
    <div>
      <h4>Riyad Hossain</h4>
      <p>I am a web Developer.</p>
      <h1>{ count }</h1>
      <button onClick={plus}>Plus➕</button>
    </div>
  )
}

export default App;
