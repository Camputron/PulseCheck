import * as React from "react"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function GuestJoin() {
  const navigate = useNavigate()

  //Goes to the get started page
  const handleClickL = () => {
    void navigate("/poll-lobby")
  }
  const handleClickA = () => {
    void navigate("/register")
  }

  return (
    <Container
      maxWidth='xs' //This allow the container to fit a certain size
    >
      <Typography
        variant='h5'
        textAlign='center'
        marginTop={5}
        marginBottom={5}>
        Join Poll
      </Typography>

      <Box
        component='form'
        sx={{ "& > :not(style)": { m: 1 } }} // margin for everything in the box
        noValidate
        autoComplete='off'>
        {/*FullWidth allows the button to extend to the xs maxwidth (styles it to match other button that have longer text or shorter)*/}
        {/* We need to add the Join Function*/}
        <TextField
          id='room-code'
          label='Room Code'
          variant='outlined'
          fullWidth
        />
        <TextField
          id='guest-name'
          label='Display Name'
          variant='outlined'
          fullWidth
        />

        <Button
          variant='contained'
          color='primary'
          onClick={handleClickL}
          fullWidth>
          {" "}
          POLL UP{" "}
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleClickA}
          fullWidth>
          {" "}
          CREATE AN ACCOUNT{" "}
        </Button>
      </Box>
    </Container>
  )
}
