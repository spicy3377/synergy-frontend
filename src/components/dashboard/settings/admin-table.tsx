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


export interface Admin {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    is_super: boolean;
    password: string;
    created_at: string;
    updated_at: string;
    talent_dashboard: boolean;
    deactivated: boolean;
    deleted_at: string | null;
  }
  

  
  export function AdminTable(): React.JSX.Element {
    const  { allAdmins, updateUserAdmin } = userAdmin()
    
    
      
    useEffect(() => {
      const getData = async () => {
          const response = await axiosInstance.get('/admins');
          updateUserAdmin('allAdmins', response.data);
      };
      void getData();
    }, [updateUserAdmin]);

    const [open, setOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  const handleClickOpen = (admin: Admin) => {
    setSelectedAdmin(admin);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async() => {
    if (selectedAdmin) {
      const response = await axiosInstance.post(`admins/remove/${selectedAdmin.id}`);
      updateUserAdmin("message", `Admin ${selectedAdmin.first_name} Deleted From Database`) 
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allAdmins.map((admin) => (
              <TableRow key={admin.id}>
                <TableCell>{`${admin.first_name} ${admin.last_name}`}</TableCell>
                <TableCell>{admin.email}</TableCell>
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
            Are you sure you want to delete {`${selectedAdmin?.first_name} ${selectedAdmin?.last_name}`}?
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