// Component for buttons in the app

import { Pressable, StyleSheet, Text, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";

function AppButton({icon, iconColor, size, title, onPress, isDisabled }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable  disabled={isDisabled} onPress={onPress} style={({pressed}) => [pressed && styles.pressed, isDisabled && styles.disabledButton]}>
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
      disabledButton: {
        opacity: 0.3
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