import { type Customer } from '@/components/dashboard/customer/customers-table';
import { create } from 'zustand';
import { type JobData } from '@/components/dashboard/account/job-card';
import { type Admin } from '@/components/dashboard/settings/admin-table';
import { type SkillData } from '@/components/dashboard/integrations/skills-card';
import { type RestrictedUser } from '@/components/dashboard/settings/restricted-user-table';

export interface WalletState {
    message: string | null
    talents: number
    verifieidTalents: number
    talentsPerWeek:number
    talentsPerDay:number
    talentStats:{ name: string; data: number[] }[]
    allTalents: Customer[]
    allTalentsFixed: Customer[]
    allSkills: SkillData[]
    allSkillsFixed: SkillData[]
    allJobs: JobData[]
    allJobsFixed: JobData[]
    allAdmins:Admin[]
    restrictedUsername:RestrictedUser[]
    updateUserAdmin: (key: string, value:unknown) => void
}

export const userAdmin = create<WalletState>((set) => ({
    message: null,
    talents:0,
    verifieidTalents:0,
    talentsPerWeek:0,
    talentsPerDay:0,
    talentStats:[],
    allTalents:[],
    allTalentsFixed:[],
    allSkills:[],
    allSkillsFixed:[],
    allJobs:[],
    allJobsFixed:[],
    allAdmins:[],
    restrictedUsername:[],
    updateUserAdmin: (key: string, value: unknown) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },
}));
