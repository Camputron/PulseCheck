import { SnackbarContext } from "@/core/context/SnackbarContext"
import { useContext } from "react"

export default function useSnackbar() {
  const snackbar = useContext(SnackbarContext)
  if (!snackbar) {
    throw new Error("useSnackbar must be used within SnackbarProvider")
  }
  return snackbar
}
