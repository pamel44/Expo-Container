import React from "react";
import { View,Text, Image, StyleSheet} from "react-native";
import fotos from '../img/fotos';

export default function cartaoUsuario({nome,descricao, Imagem}){
    return(
        <View style={estilos.cartao}>
            <Image source={{uri:Imagem}} style={estilos.fotos}/>
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
         alignItems:'center ',
         shadowColor:'#000',
         shadowOpacity: 0.1,
         shadowOffset:{with:0, height:2},
         shadowRadius:5,
         elevation:5,    
     },
     foto:{with:80, height:80, borderRadius:40, marginBottom:10,},
     nome:{fontSize:18, fontWheight: 'bold'},
     descricao:{fontSize:14,color:'#555', textAlign:'center'}
 })