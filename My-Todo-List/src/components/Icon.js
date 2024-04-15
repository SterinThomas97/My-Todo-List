// Component for creating icons

import { View, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";

function Icon({icon, size, color, style, onPress}) {
    return(
                <View style={style}>
                    <Pressable onPress={onPress}>
                      <Ionicons name={icon} size={size} color={color} />
                    </Pressable>
                </View>
    );
}

export default Icon;