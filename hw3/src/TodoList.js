import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 400, margin: 'auto', padding: '20px' }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddTask}>
        Добавить
      </Button>
      <List>
        {tasks.map((task, index) => (
          <Card key={index} sx={{ marginBottom: 2, padding: 2 }}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          </Card>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
