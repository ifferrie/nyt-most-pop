import React from 'react'

const PeriodDropDown = ({onPeriodChange}) => {
  return (
    <div style={{marginRight: '1rem'}} className="col-8">
      Most Viewed by Time Period
      <select style={{marginLeft: '1rem'}} onChange={onPeriodChange}>
        <option value="1">1 day</option>
        <option value="7">7 days</option>
        <option value="30">30 days</option>
      </select>
    </div>
  )
}

export default PeriodDropDown
