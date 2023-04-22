import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
    <div className='history'>
        history is empty
    </div>
    )
  }
  return (
    <div className='history'>
      {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState({history: [], visibility: false})

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
    setAll({history: allClicks.history.concat('L'), visibility: allClicks.visibility})
  }

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAll({history: allClicks.history.concat('R'), visibility: allClicks.visibility})
  }

  const historyVisibility = () => {
    setAll({history: allClicks.history, visibility: !allClicks.visibility})
  }

  // setTimeout(
  //   () => {
  //   let i = Math.random();
  //   i >= .5 ? handleRightClick() : handleLeftClick()
  // }, 500)

  return (
    <div>
      <div className='default'>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clicks.right}
        <p>TOTAL: {allClicks.history.length}</p>
        {allClicks.visibility ? 
            <button onClick={historyVisibility}>hide history</button> :
            <button onClick={historyVisibility}>show history</button>}
        {allClicks.visibility && <History allClicks={allClicks.history} />}
      </div>
      <footer>хуй</footer>
    </div>
  )
}

export default App