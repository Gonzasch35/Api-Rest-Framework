import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [food, setFood] = useState([])

  useEffect(()=>{
    const getData = async () => {
      try {
        const {data} = await axios('http://127.0.0.1:8000/api/food/')
        if(!data){
          throw Error('No se encontraron los datos')
        }
        console.log(data);
        setFood(data)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='w-2/3'>
        {food?.map((foo)=>{
          return (
            <div className='w-56' key={foo.id}>
              <h1>{foo.name}</h1>
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
