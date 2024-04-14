import { Pressable, StyleSheet, Text, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";

function AppButton({icon, iconColor, size, title, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable  onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={styles.iconButtonContainer}>
                    <Ionicons name={icon} size={size} color={iconColor} />
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </Pressable>
        </View>
            
       
    );
}

export default AppButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 50,
        padding: 5,
        backgroundColor: colors.button,
        borderRadius: 10
      },
      pressed: {
        opacity: 0.5
      },
      iconButtonContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontWeight : 'bold',
        margin: 10
      }
});