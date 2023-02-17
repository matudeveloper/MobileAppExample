import  { StyleSheet } from "react-native";

import { colors } from "../../utilis/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeigth: 'bold'
    },
    icon: {
        width: 24,
        heigth: 24
    },
    space: {
        width: 24
    }
})