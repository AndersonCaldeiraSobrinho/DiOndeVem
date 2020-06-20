
import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width*0.01;
const altura = Dimensions.get("screen").height*0.01;

const Estilo = StyleSheet.create({

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
      }
});

export default Estilo;
