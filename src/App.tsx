import React from "react";
import AddTask from "./containers/AddTask";
import ListItems from "./containers/ListItems";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ToDoList</Typography>
        </Toolbar>
      </AppBar>
      <AddTask />
      <ListItems />
      <AppBar position="fixed" style={{ top: "auto", bottom: 0, height: 32 }}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
