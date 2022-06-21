import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import PricingCards from '../components/pricing/Pricing'


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Hero heading='PRICING.' text='Choose your trip.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing;