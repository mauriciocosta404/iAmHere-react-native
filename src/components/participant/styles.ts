import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#1f1e25',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:7,
    },
    name:{
        flex:1,
        fontSize:13,
        marginLeft:13,
        color:'#fff',
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
        backgroundColor:'#e23c44'
    },
});