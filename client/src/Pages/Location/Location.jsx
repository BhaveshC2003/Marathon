import React, { useEffect, useState } from 'react'

function Location() {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(()=>{
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error)=>{
          console.error(error);
        }
      )
    }else{
      console.error('Geolocation not suppoted');
    }
  }, [])

  return (
    <div>
      Latitude : {latitude}
      Longitude : {longitude}
    </div>
  )
}

export default Location