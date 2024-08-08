import { create } from 'zustand';

export interface WalletState {
    talents: number
    verifieidTalents: number
    talentsPerWeek:number
    talentStats:{ name: string; data: number[] }[]
    updateUserAdmin: (key: string, value:unknown) => void
}

export const userAdmin = create<WalletState>((set) => ({
    talents:0,
    verifieidTalents:0,
    talentsPerWeek:0,
    talentStats:[],
    updateUserAdmin: (key: string, value: unknown) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },
}));
