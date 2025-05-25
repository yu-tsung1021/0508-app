import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from './component/MySlider'
import MyPanel from './component/MyPanel'
import Calculator from './component/Calculator';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{color:"rgb(37,73,122 )"}}>5b1g0027呂祐宗</h1>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "80px" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Calculator />
        </div>
        <div>
          <h2 style={{marginBottom: "70px"}}>我的第一個元件：Slider</h2>
          <p>R:<MySlider /></p>
          <p>G:<MySlider /></p>
          <p>B:<MySlider /></p>
        </div>
        <div>
          <h2>第二個元件：RGB色彩面板</h2>
          <MyPanel />
          <div>
          </div>
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default App
