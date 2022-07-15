import React from 'react'
import Navbar from '../components/Navbar'
import { InfoSection, Pricing } from '../components';


export const homeObjOne = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialist for Online Businesses',
    description:
      'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: require('../assets/svg-1.svg'),
    alt: 'Credit Card',
    start: ''
  };
  
  export const homeObjTwo = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Instant Setup',
    headline: 'Extremely quick onboarding process',
    description:
      "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: require('../assets/svg-2.svg'),
    alt: 'Vault',
    start: ''
  };
  
  export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    headline:
      'Ultra helped me increase my revenue by over 3X in less than 3 months!',
    description:
      "Their team is wonderful! I can't believe I didn't start working with them earlier.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: require('../assets/profile.jpg'),
    alt: 'Vault',
    start: 'true'
  };
  
  export const homeObjFour = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../assets/svg-3.svg'),
    alt: 'Vault',
    start: 'true'
  };

  

function Home() {
    return (
        <div className="home_page">
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default Home
