// frontend/src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import WorkshopDetails from '../components/WorkshopDetails'
import LearningOutcomes from '../components/LearningOutcomes'
import FAQ from '../components/FAQ'
import RegistrationForm from '../components/RegistrationForm'

const Home = () => {
  return (
    <>
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
    </>
  )
}

export default Home