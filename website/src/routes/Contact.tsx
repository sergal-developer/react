import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Form from "../components/form/Form";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Hero heading='CONTACT.' text='Contact GLX Travel' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact;