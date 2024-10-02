import { create } from "zustand";

interface NewsStore {
  selectedTab: string;
  selectedNewsId: number | null;
  setSelectedTab: (tab: string) => void;
  setSelectedNewsId: (id: number) => void;
}

export const useNewsStore = create<NewsStore>((set) => ({
  selectedTab: "Lawvax소식",
  selectedNewsId: null,
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setSelectedNewsId: (id) => set({ selectedNewsId: id }),
}));
