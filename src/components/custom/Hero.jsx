import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Crousel } from './Crousel'

function Hero() {
  return (
    <div className='h-screen w-full'>
      <Crousel/>
    </div>
  )
}

export default Hero