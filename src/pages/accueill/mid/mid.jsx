
import"./mid.css"
import Searshbar from './searchbar/searchbar'
import Box from './box/box'
import React, { useState } from 'react';



function Mid({ onSelectTrip }) {
  const [selectedTrip, setSelectedTrip] = useState(null);
  return (
    <div className='chat'>
     <Searshbar/>
     <br/>
    <br />
     <ul className='Li'>
     <li><Box onSelectTrip={onSelectTrip} /></li>
     </ul> 
    </div>
  )
}

export default Mid