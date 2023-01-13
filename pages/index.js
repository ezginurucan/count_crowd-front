
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from "../components/Navbar"
import HomeHeader from "../components/HomeHeader"
import Footer from "../components/Footer"
export default function Home(){
    return(
<>
            < Navbar className="fixed z-100" />
            <HomeHeader />
            <div className="h-36"></div>
            <Footer/>
            

           </>
    
    )}