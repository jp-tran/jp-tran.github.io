import React, { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    arrowContainer: {
      zIndex: 1000,
      color: 'black',
      width: '30px',
      height: '30px',
      border: '1px solid',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.25s ease-out',
      opacity: '50%',
      backgroundColor: 'white',
      '&:hover,&:focus': {
        opacity: '100%',
        boxShadow: '0 0 5px 2px rgba(38,59,94,0.3)',
        borderColor: '#01baad',
        color: '#01baad',
        outline: 'none',
      },
    },
    arrow: {
      color: 'inherit',
    },
  })
);

const ScrollUpButton = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);

  // useEffect and its cleanup function are used to prevent the "showScroll" state
  // from updating when this component unmounts
  useEffect(() => {
    let mounted = true;
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400 && mounted) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400 && mounted) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);

    return function cleanup() {
      mounted = false;
    };
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={classes.container} style={{ display: showScroll ? 'flex' : 'none' }}>
      <button
        className={classes.arrowContainer}
        style={{ borderColor: 'black' }}
        onClick={scrollTop}
        tabIndex={0}
      >
        <KeyboardArrowUpIcon fontSize="large" className={classes.arrow} />
      </button>
    </div>
  );
};

export default ScrollUpButton;
