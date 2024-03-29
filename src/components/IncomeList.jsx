import React from 'react'
import IncomeItem from './IncomeItem';

const IncomeList = ({income, setIncome}) => {

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

  return (
    <div className='income-list'>
        {
            income.sort(sortByDate).map((value, index) => (
                <IncomeItem 
                    key={index}
                    income={value}
                />
            ))
        }
    </div>
  )
}

export default IncomeList