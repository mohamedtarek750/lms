'use client'
import DashboardLayout from '../../components/dashboardLayout'
import { Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'


export default function InstructorDashboard() {
const router = useRouter()


return (
<DashboardLayout role="instructor">
<Typography variant="h5" gutterBottom>Instructor Dashboard</Typography>
<Button variant="contained" onClick={() => router.push('/instructor/create')}>
Create Course
</Button>
</DashboardLayout>
)
}