
import React from 'react'

type bannerProps = {
    text: string,
}


const Banner = ({text}:bannerProps) => {
  return (
    <div className='bg-orange-400 p-4 text-black text-center'>
        <p>{text}</p>
    </div>
  )
}

export default Banner