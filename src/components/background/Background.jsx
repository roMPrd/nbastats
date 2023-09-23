import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div className='absolute w-[100vw] h-[100vh] z-[-1]'>
      <Image src="/images/background-white.jpg" alt="background"
        layout='fill'
        // objectFit='fill'
        style={{opacity: '0.5'}}
      // width={0} height={0} size='100%' style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default Background
