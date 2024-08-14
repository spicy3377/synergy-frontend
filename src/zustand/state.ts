import { type Customer } from '@/components/dashboard/customer/customers-table';
import { create } from 'zustand';
import { type JobData } from '@/components/dashboard/account/job-card';
import { type Admin } from '@/components/dashboard/settings/admin-table';
import { type SkillData } from '@/components/dashboard/integrations/skills-card';

export interface WalletState {
    talents: number
    verifieidTalents: number
    talentsPerWeek:number
    talentStats:{ name: string; data: number[] }[]
    allTalents: Customer[]
    allTalentsFixed: Customer[]
    allSkills: SkillData[]
    allSkillsFixed: SkillData[]
    allJobs: JobData[]
    allJobsFixed: JobData[]
    allAdmins:Admin[]
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
    allAdmins:[],
    updateUserAdmin: (key: string, value: unknown) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },
}));
