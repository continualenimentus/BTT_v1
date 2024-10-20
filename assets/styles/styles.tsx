import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    input: {
        backgroundColor: 'white',
        width: 200,
        margin: 10,
        borderBlockColor: 'black',
        borderWidth: 1,
        borderStartStartRadius: 5,
    },
    InputRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        flexDirection: 'row',
    },
    MainPageLink:{
        fontSize: 20,
        color: 'blue',
    }
});