
import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import Estilo from './Estilo.js';


const Cabecalho: () => React$Node = () => {
  return (
    <Fragment>
      <View style={Estilo.cabecalho}>
        <View>
        <Text style={Estilo.funcionario}>Anderson Caldeira Sobrinho</Text>
        <Text style={Estilo.idFuncionario}>Id: 00000000000000000</Text>
        </View>
        <Image 
          source={require("../../../resources/img/perfil.jpg")}
          style={Estilo.imagemPerfil}
          >
        </Image>
      </View>
    </Fragment>
  );
};



export default Cabecalho;
