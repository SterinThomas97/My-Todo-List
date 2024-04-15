// Component for handling the input fields in the Add New Todo screen.

import { View, Text, TextInput, StyleSheet } from "react-native";

function TextInputContainer({text, isMultiline, numberOfLines,value, onChangeText, placeHolder}) {
    const style = (isMultiline === true ? styles.multilineInput : styles.input)
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>{text}</Text>
            <TextInput placeholder={placeHolder} multiline={isMultiline} onChangeText={onChangeText} value={value} numberOfLines={parseInt(numberOfLines)} style={style}/>
        </View>
    );
}

export default TextInputContainer;

const styles = StyleSheet.create({
    inputContainer:{
        margin: 20
      },
      inputTitle: {
        margin: 8,
        fontWeight: 'bold',
        fontSize: 23
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width : 0, height : 5},
        shadowRadius: 16
      },
      multilineInput: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width : 0, height : 5},
        shadowRadius: 16
      }
});