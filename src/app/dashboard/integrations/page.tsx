import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { CompaniesFilters } from '@/components/dashboard/integrations/integrations-filters';
import SkillsCard from '@/components/dashboard/integrations/skills-card';
import { AddSkills } from '@/components/dashboard/layout/PopUp';

export const metadata = { title: `Skills | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Skills</Typography>
        </Stack>
        <div>
          <AddSkills/>
        </div>
      </Stack>
      <CompaniesFilters />
      <SkillsCard />
    </Stack>
  );
}
