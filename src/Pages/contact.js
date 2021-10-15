import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>
        <ContactForm />
        <Footer />

        </>
    )
}

export default Contact