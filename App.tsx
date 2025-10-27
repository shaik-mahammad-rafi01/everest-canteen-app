import { SafeAreaProvider } from 'react-native-safe-area-context';
import Canteen from './src/components/Canteen';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Canteen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
