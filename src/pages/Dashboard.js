// src/pages/Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  // Add more data points
];

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={3}>
      <Paper style={{ padding: 16 }}>
        <Typography variant="h6">Total Sales</Typography>
        <Typography variant="h4">$20,000</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper style={{ padding: 16 }}>
        <Typography variant="h6">Active Users</Typography>
        <Typography variant="h4">2,300</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper style={{ padding: 16 }}>
        <Typography variant="h6">Sales Over Time</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  </Grid>
);

export default Dashboard;
