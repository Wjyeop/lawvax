import { create } from "zustand";

interface NewsLetterStore {
  selectedNewsLetterId: number | null;
  setSelectedNewsLetterId: (id: number) => void;
}

export const useNewsLetterStore = create<NewsLetterStore>((set) => ({
  selectedNewsLetterId: null,
  setSelectedNewsLetterId: (id) => set({ selectedNewsLetterId: id }),
}));
