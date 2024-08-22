import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import "@/global.css";
import { useThemeStore } from '@/src/app/theme/store';
import Routes from '@src/navigation/RootNavigator';

export default function App() {
  const {theme} = useThemeStore();
  return (
    <GluestackUIProvider mode={theme}>
      <Routes />
    </GluestackUIProvider>
  );
}

