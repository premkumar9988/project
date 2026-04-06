import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";



export const useCounterStore = create((set) => ({
  count: 0,
  step: 1,
  increment: () => set((s) => ({ count: s.count + s.step })),
  decrement: () => set((s) => ({ count: s.count - s.step })),
  setStep:   (val) => set({ step: val }),
  reset:     () => set({ count: 0, step: 1 }),
}));



export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
  totalItems: () => get().items.reduce((sum, i) => sum + i.qty, 0),

  addItem: (product) =>
    set((s) => {
      const existing = s.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { items: [...s.items, { ...product, qty: 1 }] };
    }),

  removeItem: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

  updateQty: (id, qty) =>
    set((s) => ({
      items:
        qty <= 0
          ? s.items.filter((i) => i.id !== id)
          : s.items.map((i) => (i.id === id ? { ...i, qty } : i)),
    })),

  clearCart:  () => set({ items: [] }),
  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
}));

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login:         (userData) => set({ user: userData, isAuthenticated: true }),
      logout:        ()         => set({ user: null, isAuthenticated: false }),
      updateProfile: (updates)  => set((s) => ({ user: { ...s.user, ...updates } })),
    }),
    {
      name: "auth-storage",                         
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({                         
        user: s.user,
        isAuthenticated: s.isAuthenticated,
      }),
    }
  )
);


const createUiSlice = (set) => ({
  theme: "light",
  sidebarOpen: false,
  toggleTheme:   () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
});

const createNotificationSlice = (set) => ({
  notifications: [],
  addNotification:    (msg) => set((s) => ({ notifications: [...s.notifications, { id: Date.now(), msg }] })),
  removeNotification: (id)  => set((s) => ({ notifications: s.notifications.filter((n) => n.id !== id) })),
  clearAll:           ()    => set({ notifications: [] }),
});


export const useBoundStore = create((...args) => ({
  ...createUiSlice(...args),
  ...createNotificationSlice(...args),
}));

