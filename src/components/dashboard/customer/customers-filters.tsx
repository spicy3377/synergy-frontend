"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { userAdmin } from '@/zustand/state';

export function CustomersFilters(): React.JSX.Element {
  const { allTalents, allTalentsFixed, updateUserAdmin } = userAdmin();


  const handleSearchAndSort = (event: { target: { value: string; }; }) => {
    const { value: searchTerm } = event.target;
    const normalizedSearchTerm = searchTerm.toLowerCase();

    // If the search term is empty, reset to the original list
    if (normalizedSearchTerm.length === 0) {
      updateUserAdmin("allTalents", allTalentsFixed);
      return;
    }

    // Filter talents by both first_name and last_name
    const filteredAndSortedTalents = allTalents
      .filter(item => 
        (item.first_name?.toLowerCase().includes(normalizedSearchTerm) || 
        item.last_name?.toLowerCase().includes(normalizedSearchTerm))
      )
      .sort((a, b) => a.first_name.localeCompare(b.first_name));

    // Update the state with the filtered and sorted results
    updateUserAdmin("allTalents", filteredAndSortedTalents);
  };

  

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        onChange={handleSearchAndSort}
        defaultValue=""
        fullWidth
        placeholder="Search Talents"
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
