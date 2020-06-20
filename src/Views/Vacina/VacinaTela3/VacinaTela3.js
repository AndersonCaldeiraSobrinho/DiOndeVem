
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

const VacinaTela3: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View>
        
        <View
          style={styles.linhabotao}
        >
          <TouchableOpacity 
          style={styles.EnviarNovoFrasco}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonNovoFrasco}
                    >
                  <Text style = {styles.textNovoFrasco}>Novo</Text>
                  <Text style = {styles.textNovoFrasco}>Frasco</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.EnviarFimVacina}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonFimVacina}
                    >
                  <Text style = {styles.textFimVacina}>Fim</Text>
                  <Text style = {styles.textFimVacina}>da vacina</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
      
  );
};

const styles = StyleSheet.create({
  linhabotao: {
    backgroundColor: 'rgb(255,116,0)',
    height: 82*altura,
    alignItems: "center",
    justifyContent: "space-around"

  },
 
    EnviarNovoFrasco: {
    width: 70*largura
  },

  buttonNovoFrasco: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 70*largura,
    borderRadius: 2*altura,
  },

  textNovoFrasco: {
    fontSize: 5*altura,
  },

  EnviarFimVacina: {
    width: 70*largura,
  },

  buttonFimVacina: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 70*largura,
    borderRadius: 2*altura,
  },

  textFimVacina: {
    fontSize: 5*altura,
  },

});

export default VacinaTela3;
