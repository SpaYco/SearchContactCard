import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const useStyles = makeStyles({
  button: {
    background: "#EAE8FE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "46.68px",
    maxHeight: "44px",
    minWidth: "46.68px",
    minHeight: "44px",
  },
});

const FilledIcondButton: React.FC = () => {
  const classes = useStyles();
  return (
      <Button variant="outlined" color="primary" className={classes.button}>
        <AddRoundedIcon />
      </Button>
  );
};

export default FilledIcondButton;
