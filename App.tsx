import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import "@/global.css";
import Routes from '@src/navigation/RootNavigator';
import { useThemeStore } from './src/app/theme/ToggleTheme';

export default function App() {
  const {theme} = useThemeStore();
  return (
    <GluestackUIProvider mode={theme}>
      <Routes />
    </GluestackUIProvider>
  );
}

