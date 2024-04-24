import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Home from './views/Home'
import { getFood, getCategory, randomFood } from './redux/actions'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

function App() {

  const food = useSelector(state=>state.randomFood)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    
      dispatch(getFood())
      dispatch(getCategory())
      
    }, [])
    

  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(randomFood())}>
          Generar
        </button>
      </div>
      <div className='w-2/3 flex m-auto'>
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
      </div> */}
      <Routes>
        <Route path='/' element={<Home 
            food={food}

        />} />
      </Routes>
    </>
  )
}

export default App
