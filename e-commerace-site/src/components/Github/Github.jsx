import React, { useEffect } from 'react'
import { useState } from 'react'

const Github = () => {
         const [ data ,setData] = useState([])
         useEffect(() => {
  fetch('https://api.github/users/hiteshchoudhary')
  .then(response => response.json())
  .then(data =>{
         setData(data)
  } )


         } , [])
  return (
    <div>

Github- Followers {data.followers}


    </div>
  )
}

export default Github