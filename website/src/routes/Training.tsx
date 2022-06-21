import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TrainingSection from "../components/training/Training";
import Hero from "../components/hero/Hero";

const Training = () => {
    return (
        <div>
            <Navbar />
            <Hero heading='TRAINING.' text='Pre-Flight & In-Flight Training.'  />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training;