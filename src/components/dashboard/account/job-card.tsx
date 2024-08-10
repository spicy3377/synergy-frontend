"use client"
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import axiosInstance from '@/utils/utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { userAdmin } from '@/zustand/state';


export interface Jobs {
  id: number;
  title: string;
}

export interface IntegrationCardProps {
  integration: Jobs;
}

function IntegrationCard({ integration }: IntegrationCardProps): React.JSX.Element {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Stack spacing={2}>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src={integration.logo} variant="square" />
          </Box> */}
          <Stack spacing={1}>
            <Typography align="center" variant="h5">
              {integration.title}
            </Typography>
            {/* <Typography align="center" variant="body1">
              {integration.description}
            </Typography> */}
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      {/* <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <ClockIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            Updated {dayjs(integration.updatedAt).format('MMM D, YYYY')}
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <DownloadIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            {integration.installs} installs
          </Typography>
        </Stack>
      </Stack> */}
    </Card>
  );
}

function JobsCard(): React.JSX.Element{
    const {allJobs, updateUserAdmin} = userAdmin()

    
      React.useEffect(() => {
        const getData = async () => {
          // try {
            const response = await axiosInstance.get('/jobs');
            updateUserAdmin('allJobs', response.data);
            updateUserAdmin('allJobsFixed', response.data);
          // } catch (error) {
          //   // console.log('Error fetching data:', error);
          // }
        };
        void getData();
      }, [updateUserAdmin]);

  return (
    <Grid container spacing={3}>
    {allJobs.map((integration) => (
        <Grid key={integration.id} lg={4} md={6} xs={12}>
        <IntegrationCard integration={integration} />
        </Grid>
    ))}
    </Grid>
  )
}

export default JobsCard