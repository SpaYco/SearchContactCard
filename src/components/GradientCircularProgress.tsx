import React from 'react';
import { CircularProgress, makeStyles, Theme } from "@material-ui/core";

interface GradientCircularProgressProps {
  trust: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  circle: {
    stroke: "url(#linearColors)",
    strokeLinecap: 'round',
  },
  container: {
    position: 'absolute',
    top: -10,
    left: -10,
    zIndex: 1,
    height: '100%',
  },
  white: {
    color: theme.palette.grey[100],
  }
}));

const GradientCircularProgress:React.FC<GradientCircularProgressProps> = ({ trust }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <svg width="0" height="0">
        <linearGradient id="linearColors" x1="1" y1="1" x2="0" y2="0" >
          <stop offset="67%" stopColor="#7864F6" />
          <stop offset="100%" stopColor="#FA5D75" />
        </linearGradient>
      </svg>
      <CircularProgress
        thickness={4}
        classes={{ circle: classes.circle }}
        value={trust}
        variant="determinate" 
        className={classes.white}
        size={100}
      />
    </div>
  );
}

export default GradientCircularProgress;