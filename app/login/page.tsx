"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Alert, Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import InputTextField from "../components/InputTextField";



const LOGIN_API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`;


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
    try{
      setIsLogging(true);
      setErrorMessage("");
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "testHeader":"Sneah"
        },
        body: JSON.stringify({
          email: username,
          password: password
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Login failed. Please try again.");
      }

      setIsLogging(false);

    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsLogging(false);
    }
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

        {errorMessage ? (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        ) : null}

        <Box component="form" sx={{ display: "grid", gap: 2 }} onSubmit={handleSubmit}>
          <InputTextField
            label="User Name"
            name="username"
            type="text"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            disabled={isLogging}
          />

          <InputTextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            disabled={isLogging}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isLogging}
            sx={{ minHeight: 48 }}
          >
            {isLogging ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CircularProgress size={20} color="inherit" />
                Logging in...
              </Box>
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
