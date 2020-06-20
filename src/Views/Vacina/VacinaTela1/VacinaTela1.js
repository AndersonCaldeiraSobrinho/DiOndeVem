
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

const VacinaTela1: () => React$Node = () => {
  return (
    <Fragment>
      <Cabecalho/>
      <View
        style={styles.body}
      >
        <Text
          style={styles.titulo}
        >QR code</Text>
        <Text
          style={styles.titulo}
        >Brete</Text>
      </View>
      <View>
        <View
          style={styles.linhaBotao}
        >
          <TouchableOpacity 
          style={styles.QrCode}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
              <View 
              style = {styles.buttonQrCode}
            >
                <Image 
                    source={require("../../../../resources/img/qr-code.jpg")}
                    style={styles.imagemQrCode}
                    >
                </Image>
                    
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

  titulo: {
    paddingTop: 3*altura,
    fontSize: 6*altura,
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
    alignItems: "center"
  },

  imagemQrCode: {
    height:50*altura,
    width: 90*largura
  },

});

export default VacinaTela1;
