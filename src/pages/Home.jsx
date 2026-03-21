import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeatureBar from '../components/home/FeatureBar';
import ServiceSlider from '../components/home/ServiceSlider';
import VideoSection from '../components/home/VideoSection';
import TestimonialSection from '../components/home/TestimonialSection';
import ContactSection from '../components/common/ContactSection';
const categories = [
  {
    id: "01",
    img: "/images/Category/1- home decor.jpg",
    title: "Handcrafted Brass Accents",
    desc: "Intricately crafted brass pieces that add timeless charm to your space.",
  },
  {
    id: "02",
    img: "/images/Category/2- tableware.jpg",
    title: "Artisan Animal Figurines",
    desc: "Beautifully detailed figurines inspired by nature and traditional artistry.",
  },
  {
    id: "03",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Designer Vases & Decor Pieces",
    desc: "Modern and artistic decor elements designed to elevate your interiors.",
  },
  {
    id: "04",
    img: "/images/Category/4- jewellery2.jpg",
    title: "Curated Earrings Collection",
    desc: "Handpicked earrings blending elegance with contemporary style.",
  },
  {
    id: "05",
    img: "/images/Category/1- home decor.jpg",
    title: "Elegant Storage Solutions",
    desc: "Stylish and functional storage pieces crafted for modern living.",
  },
  {
    id: "06",
    img: "/images/Category/2- tableware.jpg",
    title: "Divine Idols",
    desc: "Sacred idols designed with fine craftsmanship to bring peace and positivity.",
  },
  {
    id: "07",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Heritage Bandhani Sarees",
    desc: "Traditional Bandhani sarees showcasing rich cultural heritage and artistry.",
  },
  {
    id: "08",
    img: "/images/Category/4- jewellery2.jpg",
    title: "Premium Suit Fabrics (Unstitched)",
    desc: "High-quality fabrics for creating elegant and personalized outfits.",
  },
];
const crafts = [
  {
    id: "01",
    img: "/images/Category/1- home decor.jpg",
    title: "Meenakari",
    desc: "A vibrant enamel art form featuring intricate patterns and rich, colorful detailing.",
  },
  {
    id: "02",
    img: "/images/Category/2- tableware.jpg",
    title: "Blue Pottery",
    desc: "Traditional handcrafted pottery known for its signature blue hues and delicate motifs.",
  },
  {
    id: "03",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Dhokra Craft",
    desc: "Ancient metal casting art celebrated for its raw textures and tribal-inspired designs.",
  },
  {
    id: "04",
    img: "/images/Category/1- home decor.jpg",
    title: "Meenakari",
    desc: "A vibrant enamel art form featuring intricate patterns and rich, colorful detailing.",
  },
  {
    id: "05",
    img: "/images/Category/2- tableware.jpg",
    title: "Blue Pottery",
    desc: "Traditional handcrafted pottery known for its signature blue hues and delicate motifs.",
  },
  {
    id: "06",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Dhokra Craft",
    desc: "Ancient metal casting art celebrated for its raw textures and tribal-inspired designs.",
  },
  {
    id: "07",
    img: "/images/Category/2- tableware.jpg",
    title: "Blue Pottery",
    desc: "Traditional handcrafted pottery known for its signature blue hues and delicate motifs.",
  },
  {
    id: "08",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Dhokra Craft",
    desc: "Ancient metal casting art celebrated for its raw textures and tribal-inspired designs.",
  },
];
const Home = () => {
  return (
    <>
    <HeroSlider/>
    <FeatureBar/>
    <ServiceSlider services={categories} title="Our Collections" desc="Discover our curated collection of handcrafted products, each piece telling a unique story of tradition and artistry." />
    <VideoSection/>
    <ServiceSlider services={crafts} title="Our Crafts" desc="Explore the rich heritage of Indian crafts, where every product is a testament to skilled craftsmanship and cultural legacy." />
    <TestimonialSection/>
    <ContactSection/>
    
    </>
  );
};

export default Home;
