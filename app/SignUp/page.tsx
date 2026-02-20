"use client";

import { FC } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Stack,
  Paper,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginPage: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
        >
          {/* LEFT SIDE */}
          <Box flex={1}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Welcome to our Lms 👋
            </Typography>

            <Typography color="gray" mb={4}>
              Login to continue your learning journey.
            </Typography>

            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
              }}
            >
              <Stack spacing={3}>
                <TextField label="Email" fullWidth type="email" />
                <TextField label="Password" fullWidth type="password" />

                <Button
                  variant="contained"
                  href="/student"
                  sx={{
                    bgcolor: "#ff6b00",
                    borderRadius: "25px",
                    py: 1.2,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#e65c00" },
                  }}
                >
                  Sign up
                </Button>

                <Typography variant="body2" textAlign="center">
                  already have an account?{" "}
                  <Link
                    href="/login"
                    style={{
                      color: "#ff6b00",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Stack>
            </Paper>
          </Box>

          {/* RIGHT SIDE */}
          <Box flex={1} display="flex" justifyContent="center">
            <Box
              sx={{
                position: "relative",
                width: 340,
                height: 400,
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: 0,
              }}
            >
              <Image
                src="/login1.jpg"
                alt="Login"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                priority
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* Orange Wave */}
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: 0,
          width: "100%",
          height: 250,
          bgcolor: "#ff6b00",
          borderTopLeftRadius: "100% 200px",
          borderTopRightRadius: "100% 200px",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default LoginPage;
