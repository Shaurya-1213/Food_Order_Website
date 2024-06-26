import React from 'react'
import './FoodDisplay.css'

const FoodDisplay = () => {

  const {food_list} = useContext(StoreContext)

  return (
    <div>FoodDisplay
      <h1>main</h1>
    </div>

  )
}

export default FoodDisplay        