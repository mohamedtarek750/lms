"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Avatar,
} from "@mui/material";

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      
      {/* ================= HERO SECTION ================= */}

      <Container sx={{ mt: 10 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
          
          {/* ================= LEFT SIDE ================= */}
          <Box flex={1}>
            <Typography variant="h3" fontWeight="bold">
              Boost{" "}
              <Box
                component="span"
                sx={{
                  color: "#ff6b00",
                  border: "2px solid #ff6b00",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                Skills Online
              </Box>
              <br />
              With Our Courses
            </Typography>

            <Typography sx={{ mt: 3, color: "gray" }}>
              Dive into a World of Knowledge with Our Comprehensive and Engaging
              Online Courses Designed for Skill Enhancement.
            </Typography>

            {/* Buttons */}
            <Stack direction="row" spacing={2} mt={4}>
              <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  bgcolor: "#ff6b00",
                  borderRadius: "25px",
                  px: 4,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#e65c00" },
                }}
              >
                Apply Now
              </Button>


              <Button
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  px: 4,
                  textTransform: "none",
                }}
              >
                Know More
              </Button>
            </Stack>

            {/* Students Badge */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              mt={5}
              sx={{
                bgcolor: "#ff6b00",
                width: "fit-content",
                px: 3,
                py: 1,
                borderRadius: "30px",
                color: "white",
              }}
            >
              <Stack direction="row">
                <Avatar sx={{ width: 32, height: 32, ml: -1 }} />
                <Avatar sx={{ width: 32, height: 32, ml: -1 }} />
                <Avatar sx={{ width: 32, height: 32, ml: -1 }} />
              </Stack>
              <Typography fontWeight="bold">
                30K Enrolled Students
              </Typography>
            </Stack>
          </Box>

          {/* ================= RIGHT SIDE ================= */}
          <Box
            flex={1}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            {/* First Image */}
            <Box
              sx={{
                position: "relative",
                width: 220,
                height: 320,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 4,
              }}
            >
              <Image
                src="/instructor1.jpeg"
                alt="Instructor"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                priority
              />
            </Box>

            {/* Second Image */}
            <Box
              sx={{
                position: "relative",
                width: 220,
                height: 320,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 4,
                mt: 10
                
              }}
            >
              <Image
                src="/instructor2.jpeg"
                alt="Student"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </Box>
          </Box>

        </Stack>
      </Container>

      {/* ================= Bottom Orange Wave ================= */}
      <Box
        sx={{
          width: "100%",
          height: 150,
          bgcolor: "#ff6b00",
          borderTopLeftRadius: "100% 100px",
          borderTopRightRadius: "100% 100px",
          mt: 30,
        }}
      />
    </Box>
  );
}
