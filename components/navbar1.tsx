'use client'

import { 
  Box, 
  Typography, 
  Button, 
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  return (
    <Box sx={{ bgcolor: "#f7f5f3" }}>
      
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "transparent", color: "black" }}
      >
        <Toolbar>

          <Box sx={{ flexGrow: 1 }}>
            <Image
              src="/logo1.jpeg"
              alt="Logo"
              width={120}
              height={40}
              style={{ objectFit: "contain", cursor: "pointer" }}
            />
          </Box>

          

          <Stack 
            direction="row" 
            spacing={4} 
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography sx={{ cursor: "pointer", color: "#ff6b00" }}>
              Home
            </Typography>
            <Typography sx={{ cursor: "pointer" }}>
              Courses
            </Typography>
            <Typography sx={{ cursor: "pointer" }}>
              Contact
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" ml={4}>

            <Button
              component={Link}
              href="/login"
              variant="contained"
              sx={{               
                bgcolor: "#ff6b00",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { bgcolor: "#e65c00" },
              }}
            >
              Log out
            </Button>

            <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
          </Stack>

        </Toolbar>
      </AppBar>

    </Box>
  );
}
