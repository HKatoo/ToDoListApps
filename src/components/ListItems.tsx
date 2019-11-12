import React, { FC } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export interface ListItemsProps {
  items?: string[];
  remove: (idx: number) => void;
}

const ListItems: FC<ListItemsProps> = ({ items = [], remove = () => {} }) => {
  return (
    <>
      {items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List>
            {items.map((todo, idx) => (
              <ListItem key={idx} divider={idx !== items.length - 1}>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton arial-label="delete" onClick={() => remove(idx)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default ListItems;
