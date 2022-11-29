import { Text,View } from "react-native"
import { Styles } from "./styles"

export default function Home(){
  return(
    <View style={Styles.container}>
      <Text style={Styles.eventName}>Nome do Evento</Text>
      <Text style={Styles.eventDate}>Sexta-feira, 4 de setembro</Text>
    </View>
  )
}