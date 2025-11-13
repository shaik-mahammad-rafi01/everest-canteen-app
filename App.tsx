import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabNavigations } from './src/navigation/TabNavigation';

function App() {
  return (
    <GestureHandlerRootView>
      <TabNavigations />
    </GestureHandlerRootView>
  );
}

export default App;
