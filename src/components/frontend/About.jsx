import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import {default as AboutNew} from '../common/About'
import MemberImg from '../../assets/images/team1.jpg'
import Hero from '../common/Hero'
import ShowTestimonial from '../common/ShowTestimonial'
import Team from '../common/Team'
const About = () => {
  return (
    <>
        <Header/>
            <main>
                {/* Hero Section */}
                <Hero preHeading='Quality. Integrity. Value.'
                      heading='About Us'
                      text='We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise.'
                />
                
                {/* About Us */}
                <AboutNew/>

                {/* Our Team */}
                <Team/>

                {/* Testimonials */}
                <ShowTestimonial/>
                </main>
        <Footer/>
    </>
  )
}

export default About