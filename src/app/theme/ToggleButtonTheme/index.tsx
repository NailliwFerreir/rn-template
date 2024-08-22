import { Button, ButtonText } from "@/components/ui/button";
import { useThemeStore } from "../store";


export function ToggleButtonTheme() {
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
