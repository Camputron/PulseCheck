import React from "react"
import "./styles/App.css"
import { Route, Routes } from "react-router-dom"
import NotFound from "@/pages/NotFound"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import GetStarted from "./pages/GetStarted"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Splash from "./pages/Splash"
import PollLobby from "./pages/PollLobby"
import Profile from "./pages/Profile"
import PollView from "./pages/PollView"
import PollResults from "./pages/PollResults"
import PollEditor from "./pages/PollEditor"
import Dashboard from "./pages/Dashboard"
import Debug from "./pages/Debug"

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/debug' element={<Debug />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/poll-lobby' element={<PollLobby />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/poll/:id/edit' element={<PollEditor />} />
        <Route path='/poll/:id/results' element={<PollResults />} />
        <Route path='/poll/:id' element={<PollView />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}
