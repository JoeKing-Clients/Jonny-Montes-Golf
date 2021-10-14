import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Footer from '../Components/Footer';
import { homeObjOne } from '../Components/Info/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <Info {...homeObjOne}/>
        <Footer />
        </>
    )
}

export default Home
