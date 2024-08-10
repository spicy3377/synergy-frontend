"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';
import { userAdmin } from '@/zustand/state';
import axiosInstance from '@/utils/utils';

export interface TasksProgressProps {
  sx?: SxProps;
  value: number;
}

export function TasksProgress({ value, sx }: TasksProgressProps): React.JSX.Element {

  const { updateUserAdmin, talentsPerWeek, talents } = userAdmin();

  
  React.useEffect(() => {
    const getData = async () => {
      // try {
        const response = await axiosInstance.get('/dashboard/talents-per-week');
        updateUserAdmin('talentsPerWeek', response.data);
      // } catch (error) {
      //   const typedError = error as Error;
      //   // console.log('Error fetching data:', typedError.message);
      // }
    };
    void getData();
  }, [updateUserAdmin]);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Talents Per Week
              </Typography>
              <Typography variant="h4">{(talentsPerWeek*100)/talents}%</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-warning-main)', height: '56px', width: '56px' }}>
              <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <div>
            <LinearProgress value={value} variant="determinate" />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
