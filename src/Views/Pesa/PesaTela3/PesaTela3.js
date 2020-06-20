
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

const PesaTela3: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <Text
          style={styles.titulo}
        >Informe o</Text>
        <Text
          style={styles.titulo}
        >peso do animal</Text>
      </View>
      <View>
        <View
          style={styles.linhaBotoes1}
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

      <View>
        
        <View
          style={styles.linhaBotoes2}
        >
          <TouchableOpacity 
          style={styles.NovoVoltar}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonFimPesa}
                    >
                  <Text style = {styles.textFimPesa}>Fim da</Text>
                  <Text style = {styles.textFimPesa}>pesagem</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.FimAvancar}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonNovoAnimal}
                    >
                  <Text style = {styles.textNovoAnimal}>Novo</Text>
                  <Text style = {styles.textNovoAnimal}>animal</Text>
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
    height: 25*altura,
  },

  titulo: {
    paddingTop: 3*altura,
    fontSize: 7*altura,
    paddingRight: 2*largura,
    paddingLeft: 2*largura,
    textAlign: "center"
  },

  linhaBotoes1: {
    flexDirection: 'row',
    height: 37*altura,
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
  },

  linhaBotoes2: {
    flexDirection: 'row',
    height: 20*altura,
    width: 100*largura,
    backgroundColor: 'rgb(255,116,0)',
    justifyContent: 'space-around'
  },

  buttonFimPesa: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textFimPesa: {
    fontSize: 3*altura,
    textAlign:"center"
  },

  buttonNovoAnimal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textNovoAnimal: {
    fontSize: 3*altura,
    textAlign:"center"
  },

});

export default PesaTela3;
