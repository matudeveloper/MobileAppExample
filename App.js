import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";

import Config from 'react-native-config'



//const WEB_CLIENT_ID = '58409343222-2sno2sss77hjbsmjhvuclhcb81hbv5nr.apps.googleusercontent.com'
//const IOS_CLIENT_ID = '58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.58409343222-u9buijg52vuq7bi2l6kb1bedb7os7o7u'

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

export default React.memo(App);
