import React from 'react';
import { makeStyles, Fab } from '@material-ui/core'
import GradientCircularProgress from './GradientCircularProgress'
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  trust: {
    position: 'absolute',
    top: '-20.74px',
    left: 'calc(40px - (27.74px / 2))',
    fontFamily: 'Poppin, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '26px',
    background: '#6A3EEA',
    width: '27.74px',
    height: '27.74px',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: '50%',
    height: '80px',
    width: '80px',
  },
}));

interface UserAvatarProps {
  profileImageUrl: string;
  trust: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ profileImageUrl, trust }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={profileImageUrl} alt="profile" className={classes.image}/>
      <GradientCircularProgress trust={trust} />
      <div className={classes.trust}>
        <p>
        {trust}
        </p>
      </div>
    </div>
  )


}


export default UserAvatar;