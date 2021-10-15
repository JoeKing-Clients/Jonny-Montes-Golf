import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Info from '../Components/Info'
import { aboutData } from '../Components/Info/Data';

const About = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>
        <Info {...aboutData}/>
        <Footer />

        </>
    )
}

export default About