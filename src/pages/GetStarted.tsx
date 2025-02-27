import { Typography } from "@mui/material"
import React from "react"
import GuestJoin from "@/components/GuestJoin"
import { useNavigate } from "react-router-dom"

//import Splash from "./pages/Splash"

export default function GetStarted() {
  return (
    <React.Fragment>
      <GuestJoin />
    </React.Fragment>
  )
}
