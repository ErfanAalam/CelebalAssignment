// src/pages/Kanban.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

const initialColumns = {
  'to-do': {
    name: 'To Do',
    items: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
  },
  'in-progress': {
    name: 'In Progress',
    items: [{ id: '3', content: 'Task 3' }],
  },
  done: {
    name: 'Done',
    items: [{ id: '4', content: 'Task 4' }],
  },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState('');

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleAddTask = (columnId) => {
    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: [...columns[columnId].items, { id: new Date().getTime().toString(), content: newTask }],
      },
    });
    setDialogOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" style={{ marginBottom: 16 }}>
        Kanban Board
      </Typography>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        <Grid container spacing={3}>
          {Object.entries(columns).map(([columnId, column]) => (
            <Grid item xs={12} md={4} key={columnId}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="h6">{column.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setNewTask('');
                    setDialogOpen(true);
                  }}
                  style={{ marginBottom: 16 }}
                >
                  Add Task
                </Button>
                <Droppable droppableId={columnId}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: 200 }}>
                      {column.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: 'none',
                                padding: 16,
                                margin: '0 0 8px 0',
                                backgroundColor: '#fff',
                                ...provided.draggableProps.style,
                              }}
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <Button variant="contained" color="primary" onClick={() => handleAddTask('to-do')}>
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Kanban;
