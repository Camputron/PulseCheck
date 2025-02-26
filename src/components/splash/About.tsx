import { Box, Typography } from "@mui/material"
import React from "react"

export default function About() {
  return (
    <React.Fragment>
      <Box 
        textAlign= {'left'}
        marginInLine ={4} >
         
          <Typography 
            variant='h5'>
            About
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontWeight: "bold" }}>
            PulseCheck: Reinventing the Classroom Experience
          </Typography>
          <Typography 
            variant='subtitle1' >
            PulseCheck was created to address the challenges of engaging
            students in large lecture halls. As classrooms grow, keeping
            students attentive and involved becomes a monumental task. Our goal
            is to bridge the gap between lecture and participation through
            interactive, real-time polls and quizzes. Developed by a team of
            passionate educators and developers, PulseCheck’s mission is to
            enhance student engagement, provide instructors with instant
            feedback, and foster a more interactive, personalized learning
            experience.
          </Typography>
          </Box>
      
    </React.Fragment>
  )
}
