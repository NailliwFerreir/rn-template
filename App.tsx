import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import "@/global.css";
import Routes from '@src/navigation/RootNavigator';
import './global.css';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Routes />
    </GluestackUIProvider>
  );
}

