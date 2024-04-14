import { View, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";

function Icon({icon, size, color, style}) {
    return(
                <View style={style}>
                    <Pressable>
                      <Ionicons name={icon} size={size} color={color} />
                    </Pressable>
                </View>
    );
}

export default Icon;