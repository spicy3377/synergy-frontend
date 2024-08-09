"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { userAdmin } from '@/zustand/state';

export function JobFilters(): React.JSX.Element {

  const { allJobs, allJobsFixed, updateUserAdmin } = userAdmin();

  const handleSearchAndSort = (event) => {
    const { value: searchTerm } = event.target;
    const normalizedSearchTerm = searchTerm.toLowerCase();

    // If the search term is empty, reset to the original list
    if (normalizedSearchTerm.length === 0) {
      updateUserAdmin("allJobs", allJobsFixed);
      return;
    }

    // Filter talents by both first_name and last_name
    const filteredAndSortedTalents = allJobs
      .filter(item => 
        item.title?.toLowerCase().includes(normalizedSearchTerm) 
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    // Update the state with the filtered and sorted results
    updateUserAdmin("allJobs", filteredAndSortedTalents);
  };

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        onChange={handleSearchAndSort}
        defaultValue=""
        fullWidth
        placeholder="Search skills"
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
          </InputAdornment>
        }
        sx={{ maxWidth: '500px' }}
      />
    </Card>
  );
}
