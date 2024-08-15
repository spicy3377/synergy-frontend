// import React, { useEffect } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from '@mui/material';
// import { userAdmin } from '@/zustand/state';
// import axiosInstance from '@/utils/utils';

// export interface RestrictedUser {
//     id: number;
//     username: string;
//     user_id: number | null;
//     created_at: string | null;
//     updated_at: string | null;
//   }
  

// function UserTable() {

//     const {restrictedUsername, updateUserAdmin} = userAdmin()
  
      
//     useEffect(() => {
//       const getData = async () => {
//           const response = await axiosInstance.get('/admins/all-reserved-usernames');
//           updateUserAdmin('restrictedUsername', response.data);
//       };
//       void getData();
//     }, [updateUserAdmin]);


//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
        // <Table stickyHeader>
        //   <TableHead>
        //     <TableRow>
        //       <TableCell>ID</TableCell>
        //       <TableCell>Username</TableCell>
        //     </TableRow>
        //   </TableHead>
        //   <TableBody>
        //     {restrictedUsername.map((user : RestrictedUser ) => (
        //       <TableRow key={user.id}>
        //         <TableCell>{user.id}</TableCell>
        //         <TableCell>{user.username}</TableCell>
        //       </TableRow>
        //     ))}
        //   </TableBody>
        // </Table>
//       </TableContainer>
//     </Paper>
//   );
// }

// export default UserTable;



"use client"
import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance from '@/utils/utils';
import { userAdmin } from '@/zustand/state';


export interface RestrictedUser {
    id: number;
    username: string;
    user_id: number | null;
    created_at: string | null;
    updated_at: string | null;
  }
  

  
export function UserTable(): React.JSX.Element {
    const  { restrictedUsername, updateUserAdmin } = userAdmin()
    
    
      
    useEffect(() => {
      const getData = async () => {
          const response = await axiosInstance.get('/admins/all-reserved-usernames');
          updateUserAdmin('restrictedUsername', response.data);
      };
      void getData();
    }, [updateUserAdmin]);

    const [open, setOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<RestrictedUser | null>(null);

  const handleClickOpen = (admin: RestrictedUser) => {
    setSelectedAdmin(admin);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async() => {
    if (selectedAdmin) {
      const response = await axiosInstance.delete(`/admins/restricted-users/${selectedAdmin.id}`);
      updateUserAdmin("message", `RestrictedUser ${selectedAdmin.username} Deleted From Database`) 
      setOpen(false);
      return response
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restrictedUsername.map((admin) => (
              <TableRow key={admin.id}>
                <TableCell>{`${admin.id}`}</TableCell>
                <TableCell>{admin.username}</TableCell>
                <TableCell>
                  <IconButton onClick={() => { handleClickOpen(admin); }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {`${selectedAdmin?.username}`}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};