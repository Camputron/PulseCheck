import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from "react"
import About from "../components/splash/About.tsx"
import FAQs from "../components/splash/FAQs.tsx"
import Features from "../components/splash/Features.tsx"

export default function Splash(){

    const location = useLocation(); // Gets current location
    
    const aboutRef = useRef<HTMLDivElement>(null); // Stores reference to "About" section
    const faqRef = useRef<HTMLDivElement>(null); // Stores reference to "FAQs" section
    const featuredRef = useRef<HTMLDivElement>(null); // Stores reference to "Features" section

    useEffect(() => {
        if (location.state?.scrollTo) { // When the location changes...
            const target = location.state.scrollTo; 
            let destination = null;

            if (target === "about") { // Sets destination based on the "scrollTo" state from the navbar
                destination = aboutRef.current;
            } else if (target === "faqs") {
                destination = faqRef.current;
            } else if (target === "features") {
                destination = featuredRef.current;
            }

            destination?.scrollIntoView({behavior: "smooth"}); // Smooth scroll to the desination
        }
    }, [location])

    return (
        <Container>
            <Box
                sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
                   // marginBottom: 64,
                }}>
                <Typography variant='h4' margin={4} gutterBottom>
                    Turning Dead Time into Real-Time Learning!
				</Typography>
                <Button variant='contained' color='primary' margin={4} onClick={null}>
					Get Started
				</Button>
                <Typography variant='body1'  margin={4} gutterBottom>
                PulseCheck brings your classroom back to life by turning
                 silent lectures into interactive learning experiences. 
                 With real-time polls and quizzes, students are no longer 
                 passive -- they’re part of the conversation. Instructors 
                 get instant feedback, making every session more dynamic and alive.				
                </Typography>
            </Box>
            <About ref={aboutRef}/>
            <FAQs ref={faqRef}/>
            <Features ref={featuredRef}/>


        </Container>


    )

}