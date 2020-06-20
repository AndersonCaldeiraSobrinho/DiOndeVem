
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

const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;

const Login: () => React$Node = () => {
  return (
    <Fragment>
      <View style={styles.cabecalho}>
        <View>
        <Text style={styles.funcionario}>Anderson Caldeira Sobrinho</Text>
        <Text style={styles.idFuncionario}>Id: 00000000000000000</Text>
        </View>
        <Image 
          source={require ("../../../resources/img/perfil.jpg")}
          style={styles.imagemPerfil}
          >
        </Image>
      </View>
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
  cabecalho: {
    height: 10*altura,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 2*largura,
    paddingLeft: 2*largura,
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'black',
    borderWidth: 5
  },

  imagemPerfil:{
    width: 10*largura,
    height: 10*largura,
    borderRadius: 10*altura,
  },

  funcionario: {
    fontSize: 5*largura
  },

  idFuncionario: {
    fontSize: 3*largura
  },
 
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

export default Login;
