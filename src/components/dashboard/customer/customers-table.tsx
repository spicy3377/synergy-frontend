'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { TableSortLabel } from '@mui/material';
import { userAdmin } from '@/zustand/state';
import axiosInstance from '@/utils/utils';
import ActionDropdown from './talets-actions';

function noop(): void {
  // do nothing
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

export interface Customer {
  isVerified: boolean;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  profile_photo: string;
  phone: string;
  about_you_completed: boolean;
  career_completed: boolean;
  credential_completed: boolean;
  career_profile_completed: boolean;
  current_salary: number;
  desired_salary: number;
  employment_type: string;
  employment_style: string;
  employment_search_status: string;
  professional_adventure: string;
  career_plan: string;
  career_achievement: string;
  career_quest: string;
  profile_complete: boolean;
}


interface CustomersTableProps {
  // count?: number;
  page?: number;
  // rows?: Customer[];
  rowsPerPage?: number;
}

export function CustomersTable({
  // count = 0,
  // rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.JSX.Element {


  const  { allTalents, updateUserAdmin } = userAdmin()


  
  React.useEffect(() => {
    const getData = async () => {
      // try {
        const response = await axiosInstance.get('/dashboard/all-talents');
        updateUserAdmin('allTalents', response.data);
        updateUserAdmin('allTalentsFixed', response.data);
      // } catch (error) {
      //   // console.log('Error fetching data:', error);
      // }
    };
    void getData();
  }, [updateUserAdmin]);


  const paginatedCustomers = applyPagination(allTalents, page, rowsPerPage);

  const count = 0
  const rows = paginatedCustomers 

  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('');



  const sortVerified = () => {
    const isAsc = orderBy === 'verified' && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy('verified');
    const sortedData = allTalents.sort((a, b) => Number(b.isVerified) - Number(a.isVerified));
    updateUserAdmin("allTalents", sortedData)
    updateUserAdmin("message", `Talents Sort By Verified Profiles`)
  }
  

  const sortCompletProfile = () => {
    const isAsc = orderBy === 'completedProfile' && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy('completedProfile');
    const sortedData = allTalents.sort((a, b) => Number(b.profile_complete) - Number(a.profile_complete));
    updateUserAdmin("allTalents", sortedData)
    updateUserAdmin("message", `Talents Sort By Completed Profiles`)
  }

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                {/* <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                /> */}
              </TableCell>
              {/* <TableCell>Id</TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell onClick={() => { sortVerified(); }}>
                <TableSortLabel
                  active={orderBy === 'verified'}
                  direction={orderBy === 'verified' ? order : 'asc'}
                >
                  Verified
                </TableSortLabel>
              </TableCell>
              <TableCell onClick={() => { sortCompletProfile(); }}>
                <TableSortLabel
                  active={orderBy === 'completedProfile'}
                  direction={orderBy === 'completedProfile' ? order : 'asc'}
                >
                  Completed Profile
                </TableSortLabel>
              </TableCell>
              {/* <TableCell>Signed Up</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              // const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={false}>
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    /> */}
                    <ActionDropdown id={`${row.id}`}/>
                  </TableCell>
                  {/* <TableCell>{row.id}</TableCell> */}
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Typography variant="subtitle2">{`${row.first_name} ${row.last_name}`}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.isVerified ? "true" : "false"}</TableCell>
                  <TableCell>{row.profile_complete ? "true" : "false"}</TableCell>
                  {/* <TableCell>
                    {row.address.city}, {row.address.state}, {row.address.country}
                  </TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 100]}
      />
    </Card>
  );
}
