
import React from 'react';
import SafeAreaView from 'react-native';
import Splash from "./src/screens/auth/Splash";




const WEB_CLIENT_ID = '58409343222-2sno2sss77hjbsmjhvuclhcb81hbv5nr.apps.googleusercontent.com'
const IOS_CLIENT_ID = '58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u.apps.googleusercontent.com'

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
      <Text>Test </Text>
      <Splash/>
    </SafeAreaView>
  );
};


export default React.memo(App)

