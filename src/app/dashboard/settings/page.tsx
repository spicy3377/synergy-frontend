import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { Notifications } from '@/components/dashboard/settings/notifications';
import { UpdatePasswordForm } from '@/components/dashboard/settings/update-password-form';
import { AdminTable } from '@/components/dashboard/settings/admin-table';
import { AddAdmin } from '@/components/dashboard/layout/PopUp';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Admin Settings</Typography>
      </div>
      <Notifications/>
      <UpdatePasswordForm/>
      <AdminTable/>
      <AddAdmin/>
    </Stack>
  );
}
