import { Text,View,TextInput,TouchableOpacity} from "react-native"
import { Styles } from "./styles"
import { Participant } from "../../components/participant";

export default function Home(){

  const handlePartcipantRemove=()=>{
    console.log('voe clickou no botão');
}

  const handlePartcipantAdd=()=>{
      console.log('voe clickou no botão');
  }

  return(
    <View style={Styles.container}>
      <Text style={Styles.eventName}>Nome do Evento</Text>
      <Text style={Styles.eventDate}>Sexta-feira, 4 de setembro</Text>

      <View  style={Styles.form} >
        <TextInput 
          style={Styles.input} 
          placeholder="Nome do participante" 
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={Styles.button} onPress={handlePartcipantAdd}>
          <Text style={Styles.buttonText}> 
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name='mauicio coa' onRemove={handlePartcipantRemove}/>
      <Participant name='donilon coa' onRemove={handlePartcipantRemove}/>
      <Participant name='Luzia coa' onRemove={handlePartcipantRemove}/>  

    </View>
  )
}