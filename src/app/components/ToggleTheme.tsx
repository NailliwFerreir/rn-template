import { Button, ButtonText } from "@/components/ui/button";
import { colorScheme } from "nativewind";
import { create } from "zustand";

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

export function ToggleTheme() {
  const { theme, setTheme } = useThemeStore();
  return (
    <Button variant={'solid'} action={'primary'}
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <ButtonText>
        {theme === 'light' ? 'Dark' : 'Light'}
      </ButtonText>
    </Button>
  );
}
