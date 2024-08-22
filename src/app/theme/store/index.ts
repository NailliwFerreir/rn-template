import { colorScheme } from "nativewind";
import { create } from "zustand";

// TODO save theme async storage

type ThemeType = "light" | "dark";

type ThemeStore = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (colorScheme.get() ?? "light") as ThemeType,
  setTheme: (theme: ThemeType) => {
    colorScheme.set(theme)
    set({ theme })
  },
}));
