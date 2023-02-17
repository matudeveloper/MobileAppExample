import { Dimensions, StyleSheet } from "react-native";

import { colors } from  "../../utilis/colors";

const { width } = Dimensions.get('window')
console.log( 'width =>', width )

export const styles = StyleSheet.create({
    container: {
        margin: 8,
        //flexDirection: "column",
        //justifyContent: "center",
        //alignItems: "center"
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8 
    },
    image: {
        width: (width - 76) / 2,
        height: 220,
        borderRadius:8
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    }
    
   
})