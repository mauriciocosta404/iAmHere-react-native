import { View,Text,TouchableOpacity } from "react-native";
import { styles } from "./styles"; 

interface ParticipantProps {
    name: string;
    onRemove:()=>void;
}

export const Participant=({name,onRemove}:ParticipantProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}> 
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}