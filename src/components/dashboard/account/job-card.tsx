"use client"
import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@mui/material';
import { userAdmin } from '@/zustand/state';
import axiosInstance from '@/utils/utils';

export interface JobData {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  company_logo: string;
  link: string;
  user_id: number;
  job_type_id: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  min_salary: number;
  max_salary: number;
  status: string;
  job_style_id: number;
  currency_id: number;
  end_date: string;
  job_title_id: number;
  experience: string;
  total_talents: number;
}


// Table component with pagination
function JobsCard(): React.JSX.Element{
  const {allJobs, updateUserAdmin} = userAdmin()
  
      
    useEffect(() => {
      const getData = async () => {
          const response = await axiosInstance.get('/jobs');
          updateUserAdmin('allJobs', response.data);
          updateUserAdmin('allJobsFixed', response.data);
      };
      void getData();
    }, [updateUserAdmin]);
  // State for pagination
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
  const paginatedData = allJobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Company Logo</TableCell>
              {/* <TableCell>Job Type ID</TableCell> */}
              <TableCell>Active</TableCell>
              <TableCell>Min Salary</TableCell>
              <TableCell>Max Salary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Currency ID</TableCell>
              <TableCell>End Date</TableCell>
              {/* <TableCell>Job Title ID</TableCell> */}
              {/* <TableCell>Experience</TableCell> */}
              <TableCell>Total Talents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.id}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                {/* <TableCell>{job.description}</TableCell> */}
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>
                  <img src={job.company_logo} alt="Company Logo" width={50} />
                </TableCell>
                {/* <TableCell>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    {job.link}
                  </a>
                </TableCell> */}
                {/* <TableCell>{job.user_id}</TableCell> */}
                {/* <TableCell>{job.job_type_id}</TableCell> */}
                <TableCell>{job.active ? 'Yes' : 'No'}</TableCell>
                {/* <TableCell>{job.created_at}</TableCell>
                <TableCell>{job.updated_at}</TableCell> */}
                <TableCell>{job.min_salary}</TableCell>
                <TableCell>{job.max_salary}</TableCell>
                <TableCell>{job.status}</TableCell>
                {/* <TableCell>{job.job_style_id}</TableCell> */}
                <TableCell>{job.currency_id}</TableCell>
                <TableCell>{(job.end_date).substring(0, 10)}</TableCell>
                {/* <TableCell>{job.job_title_id}</TableCell> */}
                {/* <TableCell>{job.experience}</TableCell> */}
                <TableCell>{job.total_talents}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={allJobs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default JobsCard;