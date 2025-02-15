import { Box, Button, Container, Typography } from "@mui/material";
import santa from '../assets/not-found.png'
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        void navigate('..');
    }

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <img
                    src={santa}
                    alt="404 Not Found"
                    style={{ width: "300px", maxWidth: "100%", marginBottom: "20px" }}
                />
                <Typography variant="h4" gutterBottom>
                    Oops! Page Not Found
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    The page you're looking for doesn't exist or has been moved.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Go Back
                </Button>
            </Box>
        </Container>
    )
}