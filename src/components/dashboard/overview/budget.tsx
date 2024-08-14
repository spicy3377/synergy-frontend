"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { userAdmin } from '@/zustand/state';
import axiosInstance from '@/utils/utils';


export interface BudgetProps {
  // diff?: number;
  // trend: 'up' | 'down';
  sx?: SxProps;
  value?: string;
}

export function Budget({ sx }: BudgetProps): React.JSX.Element {
  // const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
  // const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';


  // talents-per-day

  const { updateUserAdmin, talentsPerDay } = userAdmin();

  
  React.useEffect(() => {
    const getData = async () => {
        const response = await axiosInstance.get('/dashboard/talents-per-day');
        updateUserAdmin('talentsPerDay', response.data);
    };
    void getData();
  }, [updateUserAdmin]);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Talents Per Day
              </Typography>
              <Typography variant="h4">{talentsPerDay}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
              {/* <CurrencyDollarIcon fontSize="var(--icon-fontSize-lg)" /> */}
              <CalendarMonthIcon/>
            </Avatar>
          </Stack>
          {/* {diff ? (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                <TrendIcon color={trendColor} fontSize="var(--icon-fontSize-md)" />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null} */}
        </Stack>
      </CardContent>
    </Card>
  );
}
