import {SafeAreaProvider} from 'react-native-safe-area-context';
import Canteen from './src/components/Canteen';

function App() {
  return (
    <SafeAreaProvider>

      <Canteen />
    </SafeAreaProvider>
  );
}

export default App;
