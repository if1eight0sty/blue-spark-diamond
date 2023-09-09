import { create } from "zustand";
import { IUseGlobalStore } from "./interface";

export const useGlobalStore = create<IUseGlobalStore>((set) => ({
    country: "NP",
    setCountry: (country: string) => set({ country }),
}));
