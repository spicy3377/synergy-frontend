"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import { userAdmin } from '@/zustand/state';
import axiosInstance from '@/utils/utils';

export interface TotalProfitProps {
  sx?: SxProps;
}

export function TotalProfit({ sx }: TotalProfitProps): React.JSX.Element {
  const { updateUserAdmin, verifieidTalents } = userAdmin();

  
  React.useEffect(() => {
    const getData = async () => {
      // try {
        const response = await axiosInstance.get('/dashboard/verified-talents');
        updateUserAdmin('verifieidTalents', response.data);
      // } catch (error) {
      //   const typedError = error as Error;
      //   console.log('Error fetching data:', typedError.message);
      // }
    };
    void getData();
  }, [updateUserAdmin]);
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Verified Talents
            </Typography>
            <Typography variant="h4">{verifieidTalents}</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
            {/* <ReceiptIcon fontSize="var(--icon-fontSize-lg)" /> */}
            <VerifiedIcon/>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}
