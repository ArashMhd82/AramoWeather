import React from 'react'
import './HeadTitle'

const HeadTitle = ({title}) => {
  return (
    <div id='platformHeader'>
        <h1 className='barlow-semibold'>
          {title}
        </h1>
    </div>
  )
}

export default HeadTitle
