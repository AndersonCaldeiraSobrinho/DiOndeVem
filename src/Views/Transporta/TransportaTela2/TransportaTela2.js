
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

const TransportaTela2: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <Text
          style={styles.titulo}
        >Dados</Text>
        <Text
          style={styles.titulo}
        >Transporte</Text>
      </View>
      <View>
        <View
          style={styles.linhaBotoes1}
        >
          <View 
          style={styles.Transporte}
          >
              <View 
              style = {styles.buttonTransporte}
            >
                <TextInput
                    style ={styles.Input}
                    placeholder={"Meio de transporte"}
                />
                    
              </View>
              
          </View>
          <View 
          style={styles.Transporte}
          >
              <View 
              style = {styles.buttonTransporte}
            >
                <TextInput
                    style ={styles.Input}
                    placeholder={"Veículo"}
                />
                    
              </View>
              
          </View>
          <View 
          style={styles.Transporte}
          >
              <View 
              style = {styles.buttonTransporte}
            >
                <TextInput
                    style ={styles.Input}
                    placeholder={"Destino"}
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
              <View style = {styles.buttonVoltar}
                    >
                  <Text style = {styles.textVoltar}>Voltar</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.FimAvancar}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonAvancar}
                    >
                  <Text style = {styles.textAvancar}>Avançar</Text>
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
    height: 37*altura,
    width: 100*largura,
    backgroundColor: 'rgb(255,116,0)',
    alignItems: "center"
  },

  Transporte: {
    backgroundColor:"white",
    marginTop: 4*altura,
    height: 7*altura,
    width: 80*largura,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1*largura,
    borderRadius: 2*largura
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

  buttonVoltar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textVoltar: {
    fontSize: 3*altura,
    textAlign:"center"
  },

  buttonAvancar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textAvancar: {
    fontSize: 3*altura,
    textAlign:"center"
  },

});

export default TransportaTela2;
