import { StyleSheet } from "react-native"

export const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#131016',
    padding:24
  },
  eventName: {
    color:'#fdfcfe',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
  },
  eventDate:{
    color:'#6b6b6b',
    fontSize:16
  },
  input:{
    height:46,
    backgroundColor:'#1f1e25',
    borderRadius:3,
    color:'#fdfcfe',
    marginRight:7,
    padding:10,
    fontSize:13,
    flex:1
  },
  buttonText:{
    color:'#fff',
    fontSize:36,
    textAlign:'center',
    alignSelf:'center',
  },
  button:{
    height:46,
    width:46,
    borderRadius:5,
    backgroundColor:'#31cf67'
    },
  form:{
    marginTop:30,
    width:'100%',
    flexDirection:'row',  
    alignItems:'center',
    marginBottom:30,
  }
});