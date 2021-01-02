import './App.css';
import {useState} from 'react'



function App() {
    const [Number, setNumber] = useState(0);

const addOne =() => {
  return setNumber(Number+1)
}

const minusOne = () => {
  return setNumber(Number - 1);
};
 

  return (
    <div className="App">
      <header className="App-header">
        <span onClick={minusOne}> minus 1 </span>
        <span>{Number}</span>
        <span onClick={addOne}> add 1 </span>
      </header>
    </div>
  );
}

export default App;
