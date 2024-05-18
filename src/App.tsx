import {useState} from 'react'
import "./styles.css";
import Counter from './Counter'
import Header from './Header'

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  return (
    <div className="App">
      <Header message='React compiler POC' />
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
    </div>
  );
}
