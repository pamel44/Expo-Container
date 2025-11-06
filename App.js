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
    img=''
    /> 


    <CartaoUsuario 
    nome='Diego Ribeiro'
    descricao = 'Advogado'
    img=''
    />

    <CartaoUsuario 
    nome='Jessica Moreira'
    descricao = 'Pediatra'
    img=''
    />

    <CartaoUsuario 
    nome='Juliana dos Santos'
    descricao = 'Pscologa'
    img=''
    />

    <CartaoUsuario 
    nome='Mariana Borges'
    descricao = 'Dentista'
    img=''
    />
  </ScrollView>
}