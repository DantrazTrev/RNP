import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from './screens/Colors';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalate';
import Counter from './screens/Counter';
import Form from './screens/Form';
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Colors' component={Colors} />
        <Stack.Screen
          name='ColorPalette'
          options={({ route }) => ({
            title: route.params.name,
          })}
          component={ColorPalette}
        />
        <Stack.Screen name='Counter' component={Counter} />
        <Stack.Screen name='Form' component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
