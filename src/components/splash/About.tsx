import { Box, Typography } from "@mui/material"
import React, { forwardRef } from "react"

function About(props, ref) {
  return (
    <div ref = {ref}> 
      <Box>
      <Typography variant='h6' margin = {4} gutterBottom align = 'left'> 
      About
      </Typography>

      {/* PLACEHOLDER TEXT, GET RID OF THIS!! */}
      <Typography variant = 'subtitle2' margin = {4} gutterBottom align = 'left'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
      anim id est laborum.
      </Typography>

      </Box>
    </div>
  )
}

export default About