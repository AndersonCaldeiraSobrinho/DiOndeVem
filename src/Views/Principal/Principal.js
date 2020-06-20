
import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import Cabecalho from '../../Components/Cabecalho';
import Titulo from '../../Components/Titulo';


const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;


const Principal = () => {
  return (
    <Fragment>
    
      <View>
        <Cabecalho/>
      </View>
      <View
        style={styles.body}
      >
        <Titulo/>
      </View>
      <View>
        <View
          style={styles.linha1Botoes}
        >
          <TouchableOpacity 
          style={styles.vacina}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonVacina}
                    >
                  <Text style = {styles.textVacina}>Vacinação</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.informa}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonInforma}
                    >
                  <Text style = {styles.textInforma}>Informação</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.linha2Botoes}
        >
          <TouchableOpacity 
          style={styles.transporta}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonTransporta}
                    >
                  <Text style = {styles.textTransporta}>Transporte</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.pesa}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonPesa}
                    >
                  <Text style = {styles.textPesa}>Pesagem</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.linha3Botoes}
        >
          <TouchableOpacity 
          style={styles.alimenta}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View style = {styles.buttonAlimenta}
                    >
                  <Text style = {styles.textAlimenta}>Alimentação</Text>
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
    height: 22*altura,
  },

  linha1Botoes: {
    flexDirection: 'row',
    height: 20*altura
  },

  vacina: {
    backgroundColor: 'rgb(255,116,0)',
  },

  buttonVacina: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 50*largura,
    borderRadius: 2*altura,
  },

  textVacina: {
    fontSize: 4*altura,
  },

  informa: {
    backgroundColor: 'rgb(255,116,0)',
  },

  buttonInforma: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 50*largura,
    borderRadius: 2*altura,
  },

  textInforma: {
    fontSize: 4*altura,
  },

  linha2Botoes: {
    flexDirection: 'row',
    height: 20*altura
  },

  transporta: {
    backgroundColor: 'rgb(255,116,0)',
  },

  buttonTransporta: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 50*largura,
    borderRadius: 2*altura,
  },

  textTransporta: {
    fontSize: 4*altura,
  },

  pesa: {
    backgroundColor: 'rgb(255,116,0)',
  },

  buttonPesa: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 50*largura,
    borderRadius: 2*altura,
  },

  textPesa: {
    fontSize: 4*altura,
  },  

  linha3Botoes: {
    height: 22*altura
  },

  alimenta: {
    backgroundColor: 'rgb(255,116,0)',
  },

  buttonAlimenta: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(124,252,0)',
    borderColor: 'rgb(252, 15, 192)',
    borderWidth: 2*altura,
    height: 20*altura,
    width: 100*largura,
    borderRadius: 2*altura,
  },

  textAlimenta: {
    fontSize: 5*altura,
  },

});

export default Principal;
