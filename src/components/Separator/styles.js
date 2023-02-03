import {StyleSheet} from "react-native";

import {colors} from "../../utilis/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    text: {
        color: colors.blue,
        fontWeigth: "500"
    },
    line: {
        backgroundColor: colors.lightGray,
        height: 1,
        flex: 1,
        marginVertical: 8 
    }
})