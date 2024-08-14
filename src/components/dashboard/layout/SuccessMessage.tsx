"use client"
import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { userAdmin } from '@/zustand/state';

export function SuccessMessage(): React.JSX.Element {
    const  { message, updateUserAdmin } = userAdmin()
    const handleClose = () => {
        updateUserAdmin("message", null);
    };

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessMessage;
