import { useState } from 'react'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React <span className="gradient-text">YRHacks</span> Workshop</h1>
      <button onClick={() => {setCount(prev => prev+1)}}>Click Me! <b className="gradient-text">Current Count: {count}</b></button>
      <div className="divider" />
      <button onClick={() => {}}>Fetch Ishaan's GitHub Info</button>
      <div className="github">
        <div className="github-avatar"></div>
        <h2 className="github-name">Ishaan Dey</h2>
        <div className="github-handle">@ishaan1013</div>
        <div className="github-follow">
          <div>1 Follower</div>
            -
          <div>1 Following</div>
        </div>
        <a href="https://www.github.com/ishaan1013" className="gradient-text github-link">Go To Account</a>
      </div>
    </div>
  )
}

export default App
