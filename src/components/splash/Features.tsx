import { Box, Typography } from "@mui/material"

function Features(props: { ref: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={props.ref}>
      <Box>
        <Typography variant='h6' margin={4} gutterBottom align='left'>
          Features
        </Typography>

        {/* PLACEHOLDER TEXT, GET RID OF THIS!! */}
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Real-Time Questioning: Hosts are able to create and display multiple-choice question quizes and polls for participating users to respond to simultaniously and in real-time.
        </Typography>
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Automatic Scoring: PulseCheck automatically calculates a participant's quiz scores in real time giving them feedback on their performance following each question with a complete overview on their preformance after the session concludes.
        </Typography>
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Host Dashboard: During polling Hosts have access to a dashboard which allows them to monitor a participant's data in real time. Allowing for Hosts to give feedback based on participant results and obtain insight on participants understanding of the material.
        </Typography>
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Web Access & UI: PulseCheck is a web application that works on Desktop, Tablets, and Mobile Devices that support modern web browsers. Built using Firebase, React, and Material UI in order to ensure both a fast and optimal user experience.
        </Typography>
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Attendance Tracking: User participation can serve as a check for who is in attendance. Non-participating users are flagged for review and can be removed from a poll at the Hosts discretion.
        </Typography>
        <Typography variant='subtitle2' margin={4} gutterBottom align='left'>
          Question Banking & Randomization: Hosts can create question banks to be able to resuse those questions on future sessions. The order of questions can also be randomized to prevent the sharing of answers between participants should the host choose. 
        </Typography>

      </Box>
    </div>
  )
}

export default Features
