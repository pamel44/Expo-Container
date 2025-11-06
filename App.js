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
    nome='Jessica Moreira'
    descricao = 'Pediatra'
    img='perfil00'
    /> 


    <CartaoUsuario 
    nome='Diego Ribeiro'
    descricao = 'Advogado'
    img='perfil01'
    />

    <CartaoUsuario 
    nome='João da Silva'
    descricao = 'Programador Mobile'
    img='perfil02'
    />

    <CartaoUsuario 
    nome='Juliana dos Santos'
    descricao = 'Pscologa'
    img='perfil03'
    />

    <CartaoUsuario 
    nome='Mariana Borges'
    descricao = 'Dentista'
    img='perfil04'
    />
  </ScrollView>
}