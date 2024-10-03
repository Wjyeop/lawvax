import { create } from "zustand";

interface MemberStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useMemberStore = create<MemberStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
