import React from 'react'
import Header from "../components/header/Header.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Aboutus from "../components/aboutus/Aboutus.jsx";
import Trips from "../components/trips/Trips.jsx";
import BlogSection from "../components/blog/BlogSection.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import Footer from "../components/footer/Footer.jsx";
import WhatsAppButton from '../whatsaapbutton/WhatsAppButton.jsx';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section id="about"><Aboutus /></section>
      <section id="trips"><Trips /></section>
      <section id="blog"><BlogSection /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
      < WhatsAppButton />
    </div>
  )
}

export default Main
