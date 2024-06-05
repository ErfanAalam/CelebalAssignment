// src/pages/Calendar.js
import React, { useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Paper, Typography, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({ title: '', start: '', end: '' });

  const handleDateClick = (info) => {
    setCurrentEvent({ title: '', start: info.dateStr, end: info.dateStr });
    setDialogOpen(true);
  };

  const handleEventSave = () => {
    setEvents([...events, currentEvent]);
    setDialogOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" style={{ marginBottom: 16 }}>
        Calendar
      </Typography>
      <Paper style={{ padding: 16 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
        />
      </Paper>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={currentEvent.title}
            onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
            style={{ marginBottom: 16 }}
          />
          <Button variant="contained" color="primary" onClick={handleEventSave}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calendar;
