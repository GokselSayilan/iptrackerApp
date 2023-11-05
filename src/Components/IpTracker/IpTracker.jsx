import React from 'react'
import './ipTracker.css'

//components
import Header from '../Header/Header'
import IpInfo from '../IpInfo/IpInfo'
import Map from '../Map/Map'

function IpTracker() {
  return (
    <div className='ipTracker'>
      <Header/>
      <IpInfo/>
      <Map/>
    </div>
  )
}

export default IpTracker