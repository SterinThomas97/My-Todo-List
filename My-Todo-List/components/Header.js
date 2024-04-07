
import { Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

function Header({title}) {
    return (
        <View style={styles.container}>
            <Text style = {styles.heading}>{title}</Text>
        </View>
    );
   
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.header,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth : 3,
        borderBottomColor : 'black',
        
        paddingBottom: 20,
        paddingTop: 20
      },
      
      heading : {
        fontWeight : "bold",
        fontSize : 23
      }
});