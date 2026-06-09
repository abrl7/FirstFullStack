
import React from 'react'

const Username = async ({params}) => {
    
  return (
    <div className=' text-white'>
       {(await params).username}
    </div>
  )
}

export default Username