import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Button = ({title, onPress, style}) => {
    const handlePress = () => {
        console.log("button is clicked")
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} 
        style={[styles.container, style]} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button