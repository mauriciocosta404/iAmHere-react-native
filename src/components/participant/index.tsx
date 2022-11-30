import { View,Text,TouchableOpacity } from "react-native";
import { styles } from "./styles"; 

interface ParticipantProps {
    name: string;
}

export const Participant=({name}:ParticipantProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> 
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}