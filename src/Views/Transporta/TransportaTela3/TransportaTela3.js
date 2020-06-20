
import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';

import Cabecalho from '../../../Components/Cabecalho';
const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;

const TransportaTela3: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <Text
          style={styles.titulo}
        >Ápos</Text>
        <Text
          style={styles.titulo}
        >Partida</Text>
      </View>
      <View>
        
        <View
          style={styles.linhabotao}
        >
          <TouchableOpacity 
          style={styles.EnviarAnimais}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonEnviarAnimais}
                    >
                  <Text style = {styles.textEnviarAnimais}>Enviar</Text>
                  <Text style = {styles.textEnviarAnimais}>Animais</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
      
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: 'rgb(255,116,0)', 
    height: 35*altura,
  },

  titulo: {
    paddingTop: 3*altura,
    fontSize: 7*altura,
    paddingRight: 2*largura,
    paddingLeft: 2*largura,
    textAlign: "center"
  },
  
  linhaBotao: {
    height: 22*altura
  },

  EnviarAnimais: {
    backgroundColor: 'rgb(255,116,0)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 47*altura
  },

  buttonEnviarAnimais: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 70*largura,
    borderRadius: 2*altura,
  },

  textEnviarAnimais: {
    fontSize: 5*altura,
  },

});

export default TransportaTela3;
