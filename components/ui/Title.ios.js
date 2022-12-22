import { Text, StyleSheet, Platform } from "react-native";



function Title(props){
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        padding: 12,
    }
});