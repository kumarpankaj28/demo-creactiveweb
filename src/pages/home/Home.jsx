 //eslint-disable-next-line
import React from 'react'
import Hero from './Hero'
import Newsletter from './Newsletter'
import Cards from './Cards'
import { Form } from './Form'
import AccordianMain from './AccordianMain'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Newsletter/>
      <Cards/>
      <Form/>
      <AccordianMain/>
    </div>
  )
}
