// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, TableChart, BarChart, CalendarToday, ViewKanban } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button component={NavLink} to="/dashboard">
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={NavLink} to="/tables">
        <ListItemIcon><TableChart /></ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={NavLink} to="/charts">
        <ListItemIcon><BarChart /></ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
      <ListItem button component={NavLink} to="/calendar">
        <ListItemIcon><CalendarToday /></ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={NavLink} to="/kanban">
        <ListItemIcon><ViewKanban /></ListItemIcon>
        <ListItemText primary="Kanban" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
