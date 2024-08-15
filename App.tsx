import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import "@/global.css";
import Routes from '@src/navigation/RootNavigator';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <Routes />
    </GluestackUIProvider>
  );
}

