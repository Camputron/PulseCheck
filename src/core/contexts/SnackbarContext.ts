import {
  AlertColor,
  AlertPropsColorOverrides,
  SnackbarOrigin,
} from "@mui/material"
import { OverridableStringUnion } from "@mui/types"
import { createContext } from "react"

export type SeverityType = OverridableStringUnion<
  AlertColor,
  AlertPropsColorOverrides
>

export interface SnackbarOptions {
  message: string
  type?: SeverityType
  duration?: number
  position?: SnackbarOrigin
}

interface SnackbarContextType {
  show: (options: SnackbarOptions) => void
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
)
