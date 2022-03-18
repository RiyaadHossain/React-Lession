import { useState } from 'react';
import './App.css';

function App() {

  const student = ['Roni', 'Abdullah', 'Kashem', 'Munshi']

  return (
    <div className="App">
      <h1>Hello React</h1>
      <People female="Saida Islam"></People>
      { student.map(man => <Pupils student={man}></Pupils>) }
    </div>
  );
}

function Pupils(props) {
  return (<div>
    <h5>{ props.student}</h5>
  </div>)
}

const People = (props) => {
  const [count, setCount] = useState(100)
  const plus = () => setCount(count - 1)

  return (
    <div>
      <h4>{ props.female}</h4>
      <p>I am a web Developer.</p>
      <h1>{ count }</h1>
      <button onClick={plus}>Plus➕</button>
    </div>
  )
}

export default App;
