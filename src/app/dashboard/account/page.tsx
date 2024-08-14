import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { JobFilters } from '@/components/dashboard/account/job-filter';
import JobsCard from '@/components/dashboard/account/job-card';
import { AddJobs } from '@/components/dashboard/layout/PopUp';

export const metadata = { title: `Jobs | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Jobs</Typography>
        </Stack>
        <div>
          <AddJobs/>
        </div>
      </Stack>
      <JobFilters />
      <JobsCard />
    </Stack>
  );
}
