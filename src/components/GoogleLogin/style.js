import {StyleSheet} from "react-native";

import { colors } from "../../utilis/colors"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 14,
        width: "45%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginBottom: 50
    },
    image: {
        width: 30,
        heigth: 30,
    }
})