import { Card, CardContent, Typography, Button } from "@mui/material";

export default function CourseCard({ title }: { title: string }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="gray">
          Course description here
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained">
          View Course
        </Button>
      </CardContent>
    </Card>
  );
}
