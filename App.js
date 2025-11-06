import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/Saudacao";
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App(){
return<ScrollView>
    <Titulo />
    <Saudacao nome='pamela'/>
    <FotoPerfil/>

    <CartaoUsuario 
    nome='joão da silva'
    descricao = 'programador mobile'
    img='perfil00'
    />
  </ScrollView>
}