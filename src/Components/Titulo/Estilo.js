
import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;

const Estilo = StyleSheet.create({

    titulo: {
        paddingTop: 3*altura,
        fontSize: 7*altura,
        paddingRight: 2*largura,
        paddingLeft: 2*largura,
      },
      

});

export default Estilo;
