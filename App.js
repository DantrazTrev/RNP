import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from './screens/Colors';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalate';
import Counter from './screens/Counter';
import Form from './screens/Form';
import CPModal from './screens/CPModal';
const App = () => {
  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='Colors' component={Colors} />
        <MainStack.Screen
          name='ColorPalette'
          options={({ route }) => ({
            title: route.params.name,
          })}
          component={ColorPalette}
        />
        <MainStack.Screen name='Counter' component={Counter} />
        <MainStack.Screen name='Form' component={Form} />
      </MainStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name='Main'
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name='AddColorModal' component={CPModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
