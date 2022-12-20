import { Text,View,TextInput,TouchableOpacity,ScrollView,FlatList, Alert} from "react-native"
import { Styles } from "./styles"
import { Participant } from "../../components/participant";
import { useState } from "react";

export default function Home(){

  const [participants,setParticipants]=useState(['Mauricio Costa']);

  const handlePartcipantAdd=()=>{
    if(participants.includes("ana")){
      return Alert.alert("Participante existe","Já existe um participante na lista com esse nome");
    }

    setParticipants(prevState => [...prevState, 'ana'])

  }
  
  const handlePartcipantRemove=(name:string)=>{
    Alert.alert("Remover",`Remover o participante ${name} ?`,[
      {
        text:"sim",
        onPress:()=>Alert.alert("Deletado !")
      },
      {
        text:"não",
        style:"cancel"
      }
    ])
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

      <FlatList
        data={participants}
        keyExtractor={item=>item}
        renderItem={({item})=>(
          <Participant key={item} name={item} onRemove={()=>handlePartcipantRemove(item)}/>
        )}
        ListEmptyComponent={()=>(
          <Text style={Styles.whenListIsEmpty}>Nimguém cadastrado na lista. adicione participantes a sua lista</Text>
        )}
      />

    </View>
  )
}