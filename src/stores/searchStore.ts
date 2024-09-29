import { create } from "zustand"; // 올바른 임포트

interface SearchState {
  searchResults: any;
  keyword: string;
  setSearchResults: (results: any) => void;
  setKeyword: (newKeyword: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchResults: null,
  keyword: "",
  setSearchResults: (results) => set({ searchResults: results }),
  setKeyword: (newKeyword) => set({ keyword: newKeyword }),
}));

export default useSearchStore;
