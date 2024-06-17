import React, { Component } from 'react'
import { AppRegistry, Text,  View, Image, TouchableOpacity } from "react-native";
import {styles} from './styles2'
import Swiper from 'react-native-swiper'

import casa from "../src/assets/images/casa2.jpg"
import duna from "../src/assets/images/duna.jpg"
import chernobyl  from "../src/assets/images/chernobyl.jpg"
import max from "../src/assets/images/LogoMax.png"
import hbo from "../src/assets/images/LogoHBO.png"
import profile from "../src/assets/images/profile.jpg"

import bell from "../src/assets/images/bell.png"
import house from "../src/assets/images/house.png"
import bookmark from "../src/assets/images/bookmark.png"
import download from "../src/assets/images/download.png"
import lupa from "../src/assets/images/lupa.png"



export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.container}>   
   
      <Swiper  >
        <View style={styles.slide1}>
        <Image source={duna} style={styles.poster}/>
        <View style={styles.container_text}>
          <Text style={styles.text_descricaco}>A jornada mitica de Paul Atreides junto a Chani e aos Fremen em uma guerra de vingança e luta para evitar um futuro terrível que só ele pode prever.</Text>
        </View>
        </View>
        <View style={styles.slide1}>
        <Image source={casa} style={styles.poster}/>
        <View style={styles.container_text}>
          <Text style={styles.text_descricaco}>Baseado em Fogo e Sangue, de George R.R. Martin e ambientada 200 anos antes dos eventos de Game of Thrones, esta série prequela conta a história épica da Casa Targaryen..</Text>
        </View>
        </View>
        <View style={styles.slide1}>
        <Image source={chernobyl} style={styles.poster}/>
        <View style={styles.container_text}>
          <Text style={styles.text_descricaco}>Minissérie em cinco partes que conta a história do pior acidente causado pelo homem na história, o desastre da Usina Nuclear de Chernobyl.</Text>
        </View>
        </View>
      </Swiper>

      <View style={styles.info}>
      <Image style={styles.logo} source={max}/>
              <View style={styles.notificao}> 
                <Image style={styles.img} source={bell}/>
                <Image style={styles.img_profile} source={profile}/>
            </View>
        </View>

      <View style={styles.header}>    
        <View style={styles.underline}></View>
        <Text style={styles.text_info}>Início</Text>
        <Text style={styles.text_info}>Séries</Text>
        <Text style={styles.text_info}>Filmes</Text>
        <Image style={styles.img_hbo} source={hbo}/>
        <Text style={styles.text_info}>Infantil</Text>      
      </View>

        <View style={styles.navegacao}>
          <TouchableOpacity>
            <Image style={styles.img_navegacao} source={house}/>
          </TouchableOpacity>
          <TouchableOpacity>
           <Image style={styles.img_navegacao} source={bookmark}/>
          </TouchableOpacity>
         <TouchableOpacity>
           <Image style={styles.img_navegacao} source={download}/>
         </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.img_navegacao} source={lupa}/>
          </TouchableOpacity>
      </View> 

    </View>
      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)