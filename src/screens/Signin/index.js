import React, {useState} from "react";
import { View,Text } from "react-native"
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";

import Button from "../../components/Button"
import { styles } from "./styles";
import Separator from "../../components/Separator";
import GoogleLogin from "../../components/GoogleLogin";

const Signin = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const onBack = () => {
        navigation.goBack()
    }

    const onSignin = () => {
        navigation.navigate('Signup')
    }

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text onPress={onSignin} style={styles.footerLink}>Sign Up</Text>
            </Text>
                
        </View>
    )
}

export default React.memo(Signin)