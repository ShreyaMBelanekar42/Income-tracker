import React from 'react'

const IncomeForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" name="desc" id="desc" placeholder='Enter description' />
            <input type="number" name="price" id="price" placeholder='Enter price' />
            <input type="date" name="date" id="date" />
            <input type="submit" name="submit" value="Add Income" />
        </form>
    </div>
  )
}

export default IncomeForm