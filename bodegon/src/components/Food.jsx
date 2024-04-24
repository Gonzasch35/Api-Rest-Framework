import React from 'react'
import { useDispatch } from 'react-redux'

const Food = ({
    key,
    name,
    image,
    option_1,
    option_2,
    option_3}) => {
  return (
    <div>
        <div className='w-56 flex flex-col justify-center items-center' key={key}>
              <h3 className='font-bold capitalize'>{name}</h3>
              <img className='w-32' src={image} alt="" />
              <div>
                <h4>{option_1}</h4>
                <h4>{option_2}</h4>
                <h4>{option_3}</h4>
              </div>
            </div>
    </div>
  )
}

export default Food