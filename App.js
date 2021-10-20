import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalate';
import Counter from './screens/Counter';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ColorPalette' component={ColorPalette} />
        <Stack.Screen name='Counter' component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
