import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { userAdmin } from '@/zustand/state';
import { SendTalentInfo } from '../layout/PopUp';
import axiosInstance from '@/utils/utils';

function ActionDropdown({ id }: {
    id: string;
}): React.JSX.Element {
  const {allTalents, updateUserAdmin} = userAdmin()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSendInfo = async(formData: Record<string, string>) => {
    const selectedTalent = allTalents
    .filter(token => token.id.toString() === id)
    .map(token => ({
      role: "role",
      name: `${token.first_name} ${token.last_name}`,
      email: formData.email,
      company: "company"
    }))[0];

    const response = await axiosInstance.post('/employer-contact-requests', selectedTalent);

    handleClose()
    updateUserAdmin("message", `${selectedTalent.name} Sent to ${formData.email}`)
    return response
  };

  const verifyTalent = async() =>{
    const response = await axiosInstance.post(`/dashboard/${id}/verify`);
    handleClose()
    updateUserAdmin("message", `Talent with ID: ${id} has been Verified`)
    return response
  }

  const suspendTalent = async() =>{
      const response = await axiosInstance.patch(`/dashboard/${id}/suspend`);
      handleClose()
      updateUserAdmin("message", `Talent with ID: ${id} has been Suspended`)
      return response
  }

  const removeSuspension = async() =>{
    const response = await axiosInstance.patch(`/dashboard/${id}/remove-suspension`);
    handleClose()
    updateUserAdmin("message", `Suspension on Talent with ID: ${id} has been Removed`)
    return response
  }

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
        {/* <MenuItem onClick={handleSendInfo}>Send Info</MenuItem> */}
        <SendTalentInfo onSubmit={handleSendInfo}/>
        {/* <MenuItem onClick={handleClose}>Share with Employer</MenuItem> */}
        <MenuItem onClick={verifyTalent}>Verify Talents</MenuItem>
        <MenuItem onClick={removeSuspension}>Regain Deleted Access</MenuItem>
        <MenuItem onClick={suspendTalent}>Soft Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default ActionDropdown;
