import { React, useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import GetStarted from "@/components/GetStarted";
import Team from "@/components/Team";
import PartnersSlider from "@/components/PartnersSlider";
import { useRef } from 'react';
import { Element } from 'react-scroll';


const Home = () => {

     // Replace with your Google image URL

    const [isScrollToTopBtn, setIsScrollToTopBtn] = useState();

    const featuresRef = useRef(null);

    const router = useRouter();
    const scrollToFeatures = () => {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
      };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const checkScrollHeight = () => {
            if (window.pageYOffset > 300) {
                setIsScrollToTopBtn(true);
            } else {
                setIsScrollToTopBtn(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);

        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, []);

    const imageUrl = 'https://cdni.iconscout.com/illustration/premium/thumb/website-under-maintenance-4315048-3610782.png';

    return (
        <div style={styles.container}>
          <h1 style={styles.title}>Under Maintenance</h1>
          <p style={styles.message}>We're sorry for the inconvenience. Our site is currently undergoing maintenance. Please check back later.</p>
          <img src={imageUrl} alt="Maintenance Image" style={styles.image} />
        </div>
      );

};


const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      backgroundColor: '#fff', // Change this to your desired background color
      padding: '20px',
     
     
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center the content horizontally
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    message: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    image: {
      maxWidth: '50%', // Adjusted to make the image responsive
      height: 'auto',
      borderRadius: '8px',
    },
  };

export default Home;
