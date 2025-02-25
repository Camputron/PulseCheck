import TermsOfService from "@/pages/TermsOfService"
import { Menu as MenuIcon } from "@mui/icons-material"
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>()
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  /** closes the menu */
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleHome = () => {
    void navigate("/")
    handleClose()
  }

  const handleAbout = () => {
    /* TODO - go to about */
    handleClose()
  }

  const handleToS = () => {
     void navigate('/terms-of-service')
    handleClose()
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' color='inherit' onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleHome}>Home</MenuItem>
          <MenuItem onClick={handleAbout}>About</MenuItem>
          <MenuItem onClick={handleToS}>Terms of Service</MenuItem>
        </Menu>
        <Typography
          variant='h6'
          component={"div"}
          onClick={handleHome}
          sx={{ cursor: "pointer" }}>
          PulseCheck
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
