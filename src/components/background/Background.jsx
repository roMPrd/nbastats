import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div className="bg-image-wrapper">
      <Image
        src="/images/background-white.jpg" alt="background"
        layout='fill'
        style={{ opacity: '0.5' }}
      />
    </div>
  )
}

export default Background
