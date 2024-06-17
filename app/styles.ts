import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    gap:30,
    color:"#ffffff"
  },
  container_header:{
    alignItems:"center",
    gap:5,
  },
  header_title:{
    fontSize: 30,
    fontWeight:"bold",
    color:"#ffffff"
  },
  header_subtitle:{
    textAlign:"center",
    color:"#ffffff"
  },

  contato:{
    gap:5
  },
  input:{
    backgroundColor:"#04082e",
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius:5,
    borderColor:"#ffffff",
    color:"#ffffff",

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  text: {
    color:"#ffffff"
  },
  btn:{
    backgroundColor:"#ffffff", 
    padding:10,
    borderRadius:4,
    alignItems:"center"
  },
  btn_text:{
    color:"#000000",
    fontSize:16,
    fontWeight:"700"
  },
  text_info:{
    color:"#4c8afb",
    textAlign:"center",
    fontWeight:"800",
    fontSize:14
  },
  ajuda:{
    flexDirection:"row",  
    gap:5,
    justifyContent:"center",
    alignItems:"center"
  },
  link_externo:{
    tintColor:"#4c8afb",
    width:15,
    height:15,
  },
  img_olho:{
    tintColor:"#fff",
    height:15,
    width:25,
    position:"absolute",
    top:42,
    right:15

  }

})