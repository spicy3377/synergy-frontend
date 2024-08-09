import { type Customer } from '@/components/dashboard/customer/customers-table';
import { type Integration } from '@/components/dashboard/integrations/integrations-card';
import { create } from 'zustand';
import { type Jobs } from '@/components/dashboard/account/job-card';

export interface WalletState {
    talents: number
    verifieidTalents: number
    talentsPerWeek:number
    talentStats:{ name: string; data: number[] }[]
    allTalents: Customer[]
    allTalentsFixed: Customer[]
    allSkills: Integration[]
    allSkillsFixed: Integration[]
    allJobs: Jobs[]
    allJobsFixed: Jobs[]
    updateUserAdmin: (key: string, value:unknown) => void
}

export const userAdmin = create<WalletState>((set) => ({
    talents:0,
    verifieidTalents:0,
    talentsPerWeek:0,
    talentStats:[],
    allTalents:[],
    allTalentsFixed:[],
    allSkills:[],
    allSkillsFixed:[],
    allJobs:[],
    allJobsFixed:[],
    updateUserAdmin: (key: string, value: unknown) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },
}));
