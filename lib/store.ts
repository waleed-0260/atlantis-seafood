import { create } from "zustand";

interface UIStore {
  mobileNavOpen: boolean;
  reservationModalOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  setReservationModalOpen: (open: boolean) => void;
  toggleMobileNav: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  mobileNavOpen: false,
  reservationModalOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  setReservationModalOpen: (open) => set({ reservationModalOpen: open }),
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
}));
