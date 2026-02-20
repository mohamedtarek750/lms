'use client'
import DashboardLayout from '../../../components/dashboardLayout'
import { TextField, Button, Box, Typography } from '@mui/material'


export default function CreateCourse() {
return (
<DashboardLayout role="instructor">
<Typography variant="h5" gutterBottom>Create New Course</Typography>
<Box sx={{ maxWidth: 500 }}>
<TextField fullWidth label="Course Title" margin="normal" />
<TextField fullWidth label="Description" margin="normal" />
<TextField fullWidth label="Video URL" margin="normal" />
<Button variant="contained" sx={{ mt: 2 }}>Save Course</Button>
</Box>
</DashboardLayout>
)
}