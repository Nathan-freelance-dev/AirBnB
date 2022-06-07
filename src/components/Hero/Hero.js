import React from 'react'
import { Container } from 'react-bootstrap'
import grid from '../../assets/images/gird.png'
import './hero.scss'

const Hero = () => {
     return (
          <Container className='hero  text-end pt-5'>
               <img src={grid} alt="airbnb grid" />
          </Container>
     )
}

export default Hero