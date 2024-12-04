import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './screens/AboutScreen';
import CostumersScreen from './screens/CostumersScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen
          name="Início"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Clientes"
          component={CostumersScreen}
          options={{ title: 'Clientes' }}
        />
        <Stack.Screen
          name="Sobre"
          component={AboutScreen}
          options={{ title: 'Sobre' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
