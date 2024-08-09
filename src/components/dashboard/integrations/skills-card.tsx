"use client"
import * as React from 'react';
import { userAdmin } from '@/zustand/state';
import Grid from '@mui/material/Unstable_Grid2';
import { IntegrationCard } from './integrations-card';
import axiosInstance from '@/utils/utils';

function SkillsCard(): React.JSX.Element{
    const {allSkills, updateUserAdmin} = userAdmin()

    const getData = async () => {
        try {
          const response = await axiosInstance.get('/skills');
          updateUserAdmin('allSkills', response.data);
          updateUserAdmin('allSkillsFixed', response.data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
    
      React.useEffect(() => {
        void getData();
      }, []);

  return (
    <Grid container spacing={3}>
    {allSkills.map((integration) => (
        <Grid key={integration.id} lg={4} md={6} xs={12}>
        <IntegrationCard integration={integration} />
        </Grid>
    ))}
    </Grid>
  )
}

export default SkillsCard