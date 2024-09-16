import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  LineElement, BarElement, ArcElement, 
  CategoryScale, LinearScale, 
  PointElement, Tooltip, Legend 
} from 'chart.js';
import Nav from "../Dashboard/Nav";
import { AccessTime, Group, Event, TrendingUp } from '@mui/icons-material'; // Importing icons

// Register the necessary elements for the charts
ChartJS.register(
  LineElement, BarElement, ArcElement,
  CategoryScale, LinearScale,
  PointElement, Tooltip, Legend
);

const Analytic = () => {
  // Sample Data for the Charts
  const attendanceTrendData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Attendance Trend',
        data: [90, 80, 85, 95, 92, 88, 93],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      }
    ]
  };

  const dailyBreakdownData = {
    labels: ['Present', 'Late', 'Absent'],
    datasets: [
      {
        label: 'Daily Attendance Breakdown',
        data: [85, 10, 5],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      }
    ]
  };

  const employeeRankingData = {
    labels: ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily White'],
    datasets: [
      {
        label: 'Punctuality Ranking',
        data: [95, 90, 88, 85],
        backgroundColor: 'aqua', // Change bar color to aqua
      }
    ]
  };

  // Sample data for table
  const employeeData = [
    { name: 'John Doe', attendance: '95%', late: '2 days', absent: '1 day' },
    { name: 'Jane Smith', attendance: '90%', late: '3 days', absent: '2 days' },
    { name: 'Michael Brown', attendance: '88%', late: '4 days', absent: '3 days' },
    { name: 'Emily White', attendance: '85%', late: '5 days', absent: '4 days' }
  ];

  return (
    <Box sx={{ padding: '0px 20px', backgroundColor: 'black', borderLeft:'2px solid white'
    }}>
      <Nav/>
      <Typography variant="h4" gutterBottom sx={{ color: 'aqua', textAlign:"center" }}>
        Attendance Analytics
      </Typography>

      {/* Top Overview Cards */}
      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <Group sx={{ marginRight: '10px' }} /> Total Employees
              </Typography>
              <Typography variant="h4">150</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUp sx={{ marginRight: '10px' }} /> Attendance Rate
              </Typography>
              <Typography variant="h4">92%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime sx={{ marginRight: '10px' }} /> Late Arrivals
              </Typography>
              <Typography variant="h4">10%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <Event sx={{ marginRight: '10px' }} /> Absenteeism
              </Typography>
              <Typography variant="h4">5%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts and Table Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6">Monthly Attendance Trend</Typography>
              <Line data={attendanceTrendData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6">Daily Attendance Breakdown</Typography>
              <Pie data={dailyBreakdownData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6">Employee Punctuality Ranking</Typography>
              <Bar data={employeeRankingData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#333', color: 'aqua' }}>
            <CardContent>
              <Typography variant="h6">Detailed Attendance Records</Typography>
              <Table sx={{ color: 'white' }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: 'white' }}>Employee Name</TableCell>
                    <TableCell sx={{ color: 'white' }}>Attendance</TableCell>
                    <TableCell sx={{ color: 'white' }}>Late Days</TableCell>
                    <TableCell sx={{ color: 'white' }}>Absent Days</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeData.map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: 'white' }}>{employee.name}</TableCell>
                      <TableCell sx={{ color: 'white' }}>{employee.attendance}</TableCell>
                      <TableCell sx={{ color: 'white' }}>{employee.late}</TableCell>
                      <TableCell sx={{ color: 'white' }}>{employee.absent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Export Buttons */}
      <Box sx={{ marginTop: '20px', textAlign: 'right' }}>
        <Button variant="contained" sx={{ marginRight: '10px' }}>Export CSV</Button>
        <Button variant="contained" sx={{ marginRight: '10px' }}>Export PDF</Button>
        <Button variant="contained">Export Excel</Button>
      </Box>
    </Box>
  );
};

export default Analytic;
