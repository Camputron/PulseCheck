import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function GuestJoin() {
  const navigate = useNavigate()
  const [roomCode, setRoomCode] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')

  //Goes to the get started page
  const handleClickL = () => {
    //void navigate("/poll-lobby")
    console.debug("Name: " +  displayName);
    console.debug("Room Code: " + roomCode);
  }
  const handleClickA = () => {
    void navigate("/register")
  }

//   const getInfo = () => {
// );
//   }

  console.debug("Name: " +  displayName);
  console.debug("Room Code: " + roomCode);

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
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <TextField
          id='guest-name'
          label='Display Name'
          variant='outlined'
          fullWidth
          onChange={(e) => setDisplayName(e.target.value)}
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
