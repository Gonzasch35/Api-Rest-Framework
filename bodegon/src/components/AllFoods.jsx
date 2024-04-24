import React from 'react'
import Food from './Food'
import { randomFood } from '../redux/actions'
import { useDispatch } from 'react-redux'

const AllFoods = ({food}) => {
    const dispatch = useDispatch()

  return (
    <div>
        <div className='flex'>
            {food?.map(foo => {
                return (
                    <Food 
                        key={foo.id}
                        name={foo.name}
                        image={foo.image}
                        option_1={foo.option_1}
                        option_2={foo.option_2}
                        option_3={foo.option_3}
                    />
                )
            })}
        </div>
        <button onClick={()=> dispatch(randomFood())}>Generar</button>
    </div>
  )
}

export default AllFoods