
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
import { TextInput } from 'react-native-gesture-handler';

import Cabecalho from '../../../Components/Cabecalho';
const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;

const PesaTela1: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <Text
          style={styles.titulo}
        >Informe</Text>
        <Text
          style={styles.titulo}
        >CAF animal</Text>
      </View>
      <View>
        <View
          style={styles.linhaBotao}
        >
          <View 
          style={styles.CAF}
          >
              <View 
              style = {styles.buttonCAF}
            >
                <TextInput
                    style ={styles.Input}
                    placeholder={"Digite aqui o CAF"}
                />
                    
              </View>
          </View>
          
        </View>
        
    
      </View>
    </Fragment>
      
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: 'rgb(255,116,0)', 
    height: 25*altura,
  },

  titulo: {
    paddingTop: 3*altura,
    fontSize: 7*altura,
    paddingRight: 2*largura,
    paddingLeft: 2*largura,
    textAlign: "center"
  },

  linhaBotao: {
    flexDirection: 'row',
    height: 60*altura,
    width: 100*largura,
    backgroundColor: 'rgb(255,116,0)',
    justifyContent: "center",
  },

  CAF: {
    backgroundColor:"white",
    marginTop: 5*altura,
    height: 7*altura,
    width: 80*largura,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1*largura,
    borderRadius: 2*largura
  },

  buttonCAF: {
  },

  Input: {
      fontSize: 3*altura,
  }

});

export default PesaTela1;
