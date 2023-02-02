import React, {useState} from "react";
import { TextInput, View, Text } from "react-native"
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible } placeholder={placeholder} style={styles.input} />
            </View>

        </View>
    )
}

export default Input