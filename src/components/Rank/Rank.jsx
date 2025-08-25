import React from 'react'

const Rank = ({name,entries}) => {
    return (
  <div>
      <div className='white f3 tc'>
        {`${name}, your current entry count is ${entries}`}
      </div>
      <div className='white f1'>
        
      </div>
    </div>
    )
}

export default Rank