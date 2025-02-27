import { Box, Typography } from "@mui/material"
import React from "react"

export default function About() {
  return (
    <React.Fragment> 
      <Box>
      <Typography variant='h6' margin = {4} sx={{fontWeight: 'Bold'}}> 
      About
      </Typography>
      </Box>
    </React.Fragment>
  )
}
