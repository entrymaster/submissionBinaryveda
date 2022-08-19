import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingPage} from './screens/LandingPage.screens';
import {ProfilePage} from './screens/ProfilePage.screens';
import {theme} from './theme';

const Stack = createStackNavigator();

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView
          style={{flex: 1, backgroundColor: theme.primary.backgroundColor}}
          forceInset={{top: 'always'}}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="LandingPage">
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
