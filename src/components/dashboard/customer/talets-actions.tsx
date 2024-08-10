import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ActionDropdown({ id }: {
    id: string;
}): React.JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="icon"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
       </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Send Info</MenuItem>
        <MenuItem onClick={handleClose}>Share with Employer</MenuItem>
        <MenuItem onClick={handleClose}>Verify Talents</MenuItem>
        <MenuItem onClick={handleClose}>Regain Deleted Access</MenuItem>
        <MenuItem onClick={handleClose}>Soft Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default ActionDropdown;
