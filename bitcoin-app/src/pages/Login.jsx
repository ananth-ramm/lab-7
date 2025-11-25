import { useState } from "react";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 3) {
      setResult("Email too short!");
    } else {
      setResult("Login successful!");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>

        <Typography sx={{ mt: 2 }}>{result}</Typography>
      </CardContent>
    </Card>
  );
}
