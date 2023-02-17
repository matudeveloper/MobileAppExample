import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {useEffect} from "react";
//import { SafeAreaView } from "react-native";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";
import Home from "./src/screens/app/Home";
import Favourites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from './src/utilis/colors';
import Splash from "./src/screens/auth/Splash";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Config from 'react-native-config'



//const WEB_CLIENT_ID = '58409343222-2sno2sss77hjbsmjhvuclhcb81hbv5nr.apps.googleusercontent.com'
//const IOS_CLIENT_ID = '58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u'
function HomeScreen() {
  return (
    <View style={{ flex:1, alignitems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}



const theme = {
  colors: {
    background: colors.white
  },
};

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favourites' component={Favourites} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

function App () {
  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    })
  }, [])

  return (
  <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
              <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}} />
            </>
          ) : (
            <>
              <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name='Signin' component={Signin} options={{headerShown: false}} />
            </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
    
  )
 }

/*
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    })
  }, [])
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  );
};
*/

export default React.memo(App)

00000000000000000000000000000000000

import React from 'react';
import {SafeAreaView} from 'react-native';
import Signup from "./src/screens/Signup";




//const WEB_CLIENT_ID = '58409343222-2sno2sss77hjbsmjhvuclhcb81hbv5nr.apps.googleusercontent.com'
//const IOS_CLIENT_ID = '58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u.apps.googleusercontent.com'

/*
function App () {
  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    })
  }, [])

  return (
  <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
              <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}} />
            </>
          ) : (
            <>
              <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name='Signin' component={Signin} options={{headerShown: false}} />
            </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
    
  )
 }
*/

const App = () => {
  /*
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    })
  }, [])
  */
  return (
    <SafeAreaView>
      
      <Signup/>
    </SafeAreaView>
  );
};


export default React.memo(App)