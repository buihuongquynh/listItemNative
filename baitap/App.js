/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
