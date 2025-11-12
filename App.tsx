import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabNavigations } from './src/navigation/tabNavigation';

function App() {
  return (
    <GestureHandlerRootView>
      <TabNavigations />;
    </GestureHandlerRootView>
  );
}

export default App;
