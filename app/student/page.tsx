"use client";
import Navbar1 from "@/components/navbar1";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Ahmed Hassan",
    image: "/course1.png",
  },
  {
    id: 2,
    title: "Next.js Mastery",
    instructor: "Mona Ali",
    image: "/course2.png",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    instructor: "Sara Mohamed",
    image: "/course3.png",
  },
  {
    id: 4,
    title: "Node.js Backend",
    instructor: "Omar Khaled",
    image: "/course4.png",
  },
];

export default function StudentDashboard() {
  return (
  

    <Box sx={{ bgcolor: "#f7f5f3", minHeight: "100vh" }}>
        <Navbar1/>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" mb={1}>
          My Courses 📚
        </Typography>

        <Typography color="gray" mb={5}>
          Explore all available courses from instructors.
        </Typography>

        {/* Courses Layout */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={4}
          justifyContent="flex-start"
        >
          {courses.map((course) => (
            <Box
              key={course.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "31%",
                },
              }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ position: "relative", height: 200 }}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <CardContent>
                  <Typography fontWeight="bold" variant="h6">
                    {course.title}
                  </Typography>

                  <Typography color="gray" mb={2}>
                    {course.instructor}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#ff6b00",
                      borderRadius: "25px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#e65c00" },
                    }}
                  >
                    View Course
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
