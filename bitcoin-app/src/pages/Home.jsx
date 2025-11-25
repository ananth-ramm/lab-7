import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to my Module 7
      </Typography>
      <Typography variant="body1">
        This is the home page.
      </Typography>
    </Container>
  );
}
