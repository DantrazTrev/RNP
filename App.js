import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalate';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ColorPalette' component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd2' },
  magenta: { backgroundColor: '#d33682' },
  orange: { backgroundColor: '#cb4b16' },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
