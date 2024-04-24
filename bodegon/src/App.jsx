import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getFood, getCategory, randomFood } from './redux/actions'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

function App() {
  const [count, setCount] = useState(0)
  const food = useSelector(state=>state.randomFood)
  const dispatch = useDispatch()

  useEffect(()=>{
    
      dispatch(getFood())
      dispatch(getCategory())
      
    }, [])
    
    const handleRandomFood = (e) =>{
      e.preventDedault()
      dispatch(randomFood())
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(randomFood())}>
          Generar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='w-2/3 flex'>
        {food?.map((foo)=>{
          return (
            <div className='w-56' key={foo.id}>
              <h3>{foo.name}</h3>
              <img src={foo?.image} alt="" />
              <div>
                <h4>{foo.option_1.name}</h4>
                <h4>{foo.option_2.name}</h4>
                <h4>{foo.option_3.name}</h4>
              </div>
            </div>
        )
        })}
      </div>
    </>
  )
}

export default App
