import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import { LinearGradient } from "expo-linear-gradient";
import link from "../src/assets/images/link-externo.png"
import olho from "../src/assets/images/olho.png"


export default function Index() {
  return (
    <View  style={styles.container}>
      <LinearGradient
       colors={['#050f4d', '#060318']}  
       style={styles.background}
      />
      <View style={styles.container_header} >
        <Text style={styles.header_title}>Entrar</Text>
        <Text style={styles.header_subtitle}>Digite o 
         endereço de e-mail e a senha da sua conta Max ou HBO Max</Text>
      </View>
      <View style={styles.contato}>
        <Text style={styles.text}>Endereço de e-mail</Text>
        <TextInput style={styles.input}
        keyboardType="email-address"
        
        />
      </View>
      <View style={styles.contato} >
        <Text style={styles.text}>Senha</Text>
        <TextInput  style={styles.input}
        secureTextEntry={true}
        />
        <Image source={olho}  style={styles.img_olho}/> 
      </View>
      <Text style={styles.text_info}>Esqueci minha senha</Text>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.btn_text}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.ajuda}>
        <Text style={styles.text_info}>Precisa de ajuda para entrar?</Text>
        <Image source={link} style={styles.link_externo}/>
        </View>
     
    </View>
  );
}
