import React from "react";
import { View,Text, Image } from "react-native";
import estilos from'../style/style';
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
