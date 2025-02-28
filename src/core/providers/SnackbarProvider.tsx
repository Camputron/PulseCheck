import { useState, ReactNode } from "react"
import { Snackbar, Alert, SnackbarOrigin } from "@mui/material"
import {
  SnackbarContext,
  SnackbarOptions,
  SeverityType,
} from "@/core/contexts/SnackbarContext"

const DEFAULT_TYPE = "info"
const DEFAULT_DURATION = 3000
const DEFAULT_V = "top"
const DEFAULT_H = "center"

export const SnackbarProvider = (props: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [type, setType] = useState<SeverityType | undefined>()
  const [duration, setDuration] = useState<number | undefined>()
  const [position, setPosition] = useState<SnackbarOrigin>({
    vertical: DEFAULT_V,
    horizontal: DEFAULT_H,
  })

  const show = (opts: SnackbarOptions) => {
    setMessage(opts.message)
    setType(opts.type ?? DEFAULT_TYPE)
    setDuration(opts.duration ?? DEFAULT_DURATION)
    if (opts.position) {
      setPosition(opts.position)
    }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <SnackbarContext.Provider value={{ show }}>
      {props.children}
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={position}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
