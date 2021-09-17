import React, { useState } from 'react';
import {View, StyleSheet,Image,Text,ScrollView, _ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
const App = () =>{
  const[modalvisisibleplaya,setmodalvisibleplaya]=useState(false);
  const[modalcomida,setcomida]=useState(false);
  const[modalviaje,setviaje]=useState(false);
 return(
 <>

<ScrollView>
<Modal trasparente={true} animationType="slide" visible={modalvisisibleplaya} onRequestClose={()=>{

  alert('Modal has been closed .');

}}>

  <View style={styles.vistaModal}>
  <View style={styles.Modal}>
  <Text style={styles.subtitulo}>Ir a la playa</Text>
  <Text>El Salvador cuenta con hermosa playas a nivel centroamerica</Text>

  <Button title="cerrar" onPress={()=>{setmodalvisibleplaya(!modalvisisibleplaya)}}></Button>


  </View>


  </View>


</Modal>

<Modal trasparente={true} animationType="slide" visible={modalcomida} onRequestClose={()=>{

alert('Modal has been closed .');

}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Comer pupusas </Text>
<Text>El Salvador cuenta con comida como pupusas</Text>

<Button title="cerrar" onPress={()=>{setcomida(!modalcomida)}}></Button>
</View>
</View>
</Modal>
<Modal trasparente={true} animationType="slide" visible={modalviaje} onRequestClose={()=>{

alert('Modal has been closed .');

}}>

<View style={styles.vistaModal}>
<View style={styles.Modal}>
<Text style={styles.subtitulo}>Primer ruta </Text>
<Text>El Salvador cuenta con grandes paisajes</Text>

<Button title="cerrar" onPress={()=>{setviaje(!modalviaje)}}></Button>
</View>
</View>
</Modal>

 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('./src/img/image1.jpg')} />
 </View>

<View style={styles.contenedor}>
<Text style ={styles.titulo}>Que hacer en El Salvador</Text>
<ScrollView horizontal>
  <View>
  <TouchableHighlight
  onPress={()=>{setmodalvisibleplaya(!modalvisisibleplaya)}}>



  <Image
  style={styles.ciudad}
  source={require('./src/img/image2.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/image3.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/image4.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/image5.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.ciudad}
  source={require('./src/img/image6.jpg')}
  ></Image>
  </View>
</ScrollView>
</View>

<Text style ={styles.titulo}>Platillos Salvadoreños</Text>
  <View>
  <TouchableHighlight
  onPress={()=>{setcomida(!modalcomida)}}>
  <Image
  style={styles.mejores}
  source={require('./src/img/mejores1.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View>
  <Image
  style={styles.mejores}
  source={require('./src/img/mejores2.jpg')}
  ></Image>
  </View>
  <View>
  <Image
  style={styles.mejores}
  source={require('./src/img/mejores3.jpg')}
  ></Image>
  </View>

<Text style={styles.titulo}>Rutas Turisticas</Text>
<View style={styles.listado}>
  <View style={styles.listaItem}>
  <TouchableHighlight
  onPress={()=>{setviaje(!modalviaje)}}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image6.jpg')}
  ></Image>
  </TouchableHighlight>
  </View>
  <View style={styles.listaItem}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image7.jpg')}
  ></Image>
  </View>
  <View style={styles.listaItem}>
  <Image
  style={styles.mejores}
  source={require('./src/img/image8.jpg')}
  ></Image>
  </View>






  </View>
  </ScrollView>
</>
 );
};
const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},

mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},
listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},
subtitulo:{
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center'
}

});
export default App;