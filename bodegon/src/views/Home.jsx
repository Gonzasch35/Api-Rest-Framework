import React from 'react'
import AllFoods from '../components/AllFoods'

const Home = ({food}) => {
  return (
    <div>
        <AllFoods food={food} />
    </div>
  )
}

export default Home