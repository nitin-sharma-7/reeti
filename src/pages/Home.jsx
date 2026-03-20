import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeatureBar from '../components/home/FeatureBar';
import ServiceSlider from '../components/home/ServiceSlider';
import VideoSection from '../components/home/VideoSection';
import TestimonialSection from '../components/home/TestimonialSection';
import ContactSection from '../components/common/ContactSection';

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <FeatureBar/>
    <ServiceSlider />
    <VideoSection/>
    <TestimonialSection/>
    <ContactSection/>
    
    </>
  );
};

export default Home;
