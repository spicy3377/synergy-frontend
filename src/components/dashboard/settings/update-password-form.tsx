'use client';
import * as React from 'react';
// import { ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import axiosInstance from '@/utils/utils';

export function UpdatePasswordForm(): React.JSX.Element {
  const [username, setusername] = React.useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setusername(event.target.value);
  };


  const handleSubmit = async () => {
    const body = {
      username,
      user_id: null,
    };
    const response = await axiosInstance.post('/admins/reserved-usernames', body);
    return response
    // console.log('Response:', response.data);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Restricted usernames" title="Restricted" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 'sm' }}>
            <FormControl fullWidth>
              <InputLabel>Add restricted username</InputLabel>
              <OutlinedInput
                value={username}
                onChange={handleChange}
                label="Add a restricted username"
                name="username"
                type="text"
                fullWidth
              />
            </FormControl>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={handleSubmit}>Update</Button>
        </CardActions>
      </Card>
    </form>
  );
}
