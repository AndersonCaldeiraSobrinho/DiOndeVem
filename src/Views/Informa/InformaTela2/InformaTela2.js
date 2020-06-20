
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

const InformaTela2: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <View
            style={styles.CorpoDados}
        >
            <Text style={styles.titulo}>Informações</Text>
            <Text style={styles.dados}>Dados sobre as</Text>
            <Text style={styles.dados}>Informações lidas</Text>
        </View>
      </View>
      <View>
        
        <View
          style={styles.linhaBotoes}
        >
          <TouchableOpacity 
          style={styles.NovoFrasco}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonNovoFrasco}
                    >
                  <Text style = {styles.textNovoFrasco}>Novo</Text>
                  <Text style = {styles.textNovoFrasco}>frasco</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.FimVacina}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonFimVacina}
                    >
                  <Text style = {styles.textFimVacina}>Fim da vacinação</Text>
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
    height: 62*altura,
  },

  CorpoDados: {
    marginTop: 2*altura,
    marginRight: 2*largura,
    marginLeft: 2*largura,
    marginBottom: 2*altura,
    backgroundColor:"red",
    height: 58*altura,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 7*altura,
    textAlign: "center"
  },

  dados: {
    fontSize: 5*altura,
    textAlign: "center"
  },

  linhaBotoes: {
    flexDirection: 'row',
    height: 20*altura,
    width: 100*largura,
    backgroundColor: 'rgb(255,116,0)',
    justifyContent: 'space-around'
  },

  buttonNovoFrasco: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textNovoFrasco: {
    fontSize: 3*altura,
    textAlign:"center"
  },

  buttonFimVacina: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 15*altura,
    width: 45*largura,
    borderRadius: 2*altura,
  },

  textFimVacina: {
    fontSize: 3*altura,
    textAlign:"center"
  },  

  

});

export default InformaTela2;
