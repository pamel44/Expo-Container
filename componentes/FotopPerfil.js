import React from 'react';
import { Image } from "react-native";

export default function Fotoperfil({url}){
    return(
        <Image
        source={require}
        style={{width:100,height:100, borderRadius:50, marginBottom:10}}
        />
    )
}