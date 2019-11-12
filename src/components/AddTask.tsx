import React, { FC, useState } from "react";
import { TextField, Grid, Button, Paper } from "@material-ui/core";

export interface AddTaskProps {
  add: (value: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ add = () => {} }) => {
  const [todo, setTodo] = useState("");

  const addItems = () => {
    add(todo);
    setTodo("");
  };
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            fullWidth
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={addItems}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTask;
