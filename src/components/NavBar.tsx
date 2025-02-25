import { Menu as MenuIcon } from "@mui/icons-material"
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
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
