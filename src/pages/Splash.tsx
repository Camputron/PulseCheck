import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GetStarted from './pages/get-started'

export default function Splash(){
    const navigate = useNavigate()

    const handleClick = () => {
    void navigate('/get-started')
  }


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
                <Button variant='contained' color='primary' margin={4} onClick={handleClick}>
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


        </Container>


    )

}