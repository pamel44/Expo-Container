import React from "react";
import { View,Text,Image, StyleSheet} from "react-native";
import Fotos from '../img/fotos';

export default function cartaoUsuario({nome,descricao,img}){
  return(
      <View style={estilos.cartao}>
          <Image source={Fotos[img]} style={estilos.foto}/>
          <Text style={estilos.nome}> {nome} </Text>
          <Text style={estilos.descricao}> {descricao} </Text>
      </View>
  );
}

const estilos = StyleSheet.create({
  cartao:{
      backgroundColor: '#e1f7f7',
      padding:16,
      marginTop:15,
      borderRadius:10,
      alignItems:'center',
      boxShadowColor:'#000',
      boxShadowOpacity: 0.1,
      boxShadowOffset:{with:0, height:2},
      boxShadowRadius:5,
      elevation:5,  
  },
  foto:{width:80, height:80, borderRadius:40, marginBottom:10,},
  nome:{fontSize:18, fontWheight: 'bold'},
  descricao:{fontSize:14,color:'#555', textAlign:'center'}
})
