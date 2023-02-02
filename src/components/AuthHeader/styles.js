import {StyleSheet} from "react-native";

import { colors } from  "../../utilis/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 54
    },
    image: {
        width: 18,
        height: 18
    },
    title: {
        color: colors.blue,
        fontSize: 26,
        fontWeigth: "500",
        paddingHorizontal: 16
    }
})