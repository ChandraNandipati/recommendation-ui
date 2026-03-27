"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import InputTextField from "../components/InputTextField";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        backgroundColor: "#f5f7fb",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
          Login
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your username and password to continue.
        </Typography>

        <Box component="form" sx={{ display: "grid", gap: 2 }} onSubmit={handleSubmit}>
          <InputTextField
            label="User Name"
            name="username"
            type="text"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />

          <InputTextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />

          <Button type="submit" variant="contained" size="large" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
