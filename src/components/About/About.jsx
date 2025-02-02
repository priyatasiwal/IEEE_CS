import React from 'react'
import './About.css'
import iiitb from '../../assets/iiitb.png'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'

const About = () => {
  return (
    <div className='Abouts'>
        <div className='iiitb'>
            <img src={iiitb} alt=''/>
        </div>
        <div className='ieee'>
            <img src={logo} alt=''/>
        </div>
        <div className='cs'>
            <img src={logo1} alt=''/>
        </div>
    </div>
  )
}

export default About