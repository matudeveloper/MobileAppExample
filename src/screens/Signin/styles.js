import { StyleSheet } from "react-native";

import {colors} from "../../utilis/colors"

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginTop: 20,
    },
    agreeRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        fontWeight: "bold"
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})