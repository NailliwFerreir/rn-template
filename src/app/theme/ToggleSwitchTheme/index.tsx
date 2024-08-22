import { Switch } from "@/components/ui/switch";
import { useThemeStore } from "../store";


export function ToggleSwitchTheme() {
  const { theme, setTheme } = useThemeStore();
  return (
    <Switch
      size={"sm"}
      ios_backgroundColor={'bg-black'}
      value={theme === 'dark'}
      onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}
