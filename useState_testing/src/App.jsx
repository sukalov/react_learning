import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [ tf, setTF] = useState(true);
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  const toggleTF = () => setTF(!tf)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreaseByOne} text='minus'/> 
      <Button handleClick={setToZero} text='zero!'/>
      <div>{String(tf)}</div>
      <Button handleClick={toggleTF} text='toggle'/>
    </div>
  )
}

export default App