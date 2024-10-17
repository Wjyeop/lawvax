import { create } from "zustand";

interface MembersWorkFieldStore {
  selectedWorkField: string;
  setSelectedWorkField: (tab: string) => void;
}

export const useMembersWorkFieldStore = create<MembersWorkFieldStore>(
  (set) => ({
    selectedWorkField: "",
    setSelectedWorkField: (tab) => set({ selectedWorkField: tab }),
  })
);
