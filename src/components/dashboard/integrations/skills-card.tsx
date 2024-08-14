"use client"
// import * as React from 'react';
// import { userAdmin } from '@/zustand/state';
// import Grid from '@mui/material/Unstable_Grid2';
// import { IntegrationCard } from './integrations-card';
// import axiosInstance from '@/utils/utils';

// function SkillsCard(): React.JSX.Element{
//     const {allSkills, updateUserAdmin} = userAdmin()

    
//       React.useEffect(() => {
//         const getData = async () => {
//           // try {
//             const response = await axiosInstance.get('/skills');
//             updateUserAdmin('allSkills', response.data);
//             updateUserAdmin('allSkillsFixed', response.data);
//           // } catch (error) {
//           //   // console.log('Error fetching data:', error);
//           // }
//         };
//         void getData();
//       }, [updateUserAdmin]);

//   return (
//     <Grid container spacing={3}>
//     {allSkills.map((integration) => (
//         <Grid key={integration.id} lg={4} md={6} xs={12}>
//         <IntegrationCard integration={integration} />
//         </Grid>
//     ))}
//     </Grid>
//   )
// }

// export default SkillsCard


import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@mui/material';
import axiosInstance from '@/utils/utils';
import { userAdmin } from '@/zustand/state';

export interface SkillData {
  id: number;
  user_id: number;
  name: string;
  top_skill: boolean;
  created_at: string;
  updated_at: string;
  type: string;
  approved: boolean;
}

function SkillsCard(): React.JSX.Element{
  const {allSkills, updateUserAdmin} = userAdmin()
  
      
  useEffect(() => {
    const getData = async () => {
        const response = await axiosInstance.get('/skills');
        updateUserAdmin('allSkills', response.data);
        updateUserAdmin('allSkillsFixed', response.data);
    };
    void getData();
  }, [updateUserAdmin]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice the data for the current page
  const paginatedData = allSkills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Top Skill</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Approved</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((skill) => (
              <TableRow key={skill.id}>
                <TableCell>{skill.id}</TableCell>
                <TableCell>{skill.user_id}</TableCell>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.top_skill ? 'Yes' : 'No'}</TableCell>
                <TableCell>{skill.created_at.substring(0, 10)}</TableCell>
                <TableCell>{skill.updated_at.substring(0, 10)}</TableCell>
                <TableCell>{skill.type}</TableCell>
                <TableCell>{skill.approved ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={allSkills.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SkillsCard;