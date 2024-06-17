import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e233b"

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster:{
    flex: 1,
    justifyContent: 'center',
    height:400,
    resizeMode:"cover",
    width:"100%" 
  },

  container_text:{
    position:"absolute",
    padding:20,
    bottom:35
  },
  text_descricaco:{
    color:"#fff",
    textAlign:"center",
  },

  info:{
    flexDirection:"row",
    justifyContent:"space-between",
    position:"absolute",
    top: 0,
    left: 0,
    right: 0,
    padding:20,
  },

  logo:{
    height:20,
    width:72
  },

  notificao:{
    flexDirection:"row",
    gap:15,
  },
 

  img:{
    width:20,
    height:20,
    tintColor:"#fff"
  },
 
  img_profile:{
    width:20,
    height:20,
    borderWidth:1,
    borderRadius: 10,
    borderColor:"#fff"
  },
  
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    position:"absolute",
    top: 35,
    left: 0,
    right: 0,
    padding:20
  },
  underline: {
    position: 'absolute',
    bottom:15,
    width:36,
    left: 20,
    height: 2, 
    backgroundColor: '#fff',
    borderRadius:5,

  },
  text_info:{
    color:"#ffffff",
    fontSize:15,
    fontWeight:"600"

  },
  img_hbo:{
    width:35,
    height:15,
  },

  navegacao:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical:30,
    justifyContent:"space-between",
    flexDirection:"row",
  },
 
  img_navegacao:{
    tintColor:"#ffff",
    width:30,
    height:30
  }
  
})