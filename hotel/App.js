import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight,Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function App() {
  const [items, setItems] = React.useState([
    { name: 'Habitacion 2 personas',servicios:'Aire acondicionado, comedor, refrigeradora',src:require('./src/img/hotel1.jpg') },
    { name: 'Habitacion 3 personas',servicios:' comedor, refrigeradora',src:require('./src/img/hotel2.jpg') },
    { name: 'Habitacion 2 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel3.jpg') },
    { name: 'Habitacion 4 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel4.jpg') },
    { name: 'Habitacion 3 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel5.jpg') },
    { name: 'Habitacion 5 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel6.jpg') },
    { name: 'Habitacion 6 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel7.jpg') },
    { name: 'Habitacion 3 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel8.jpg') },
    { name: 'Habitacion 2 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel9.jpg') },
    { name: 'Habitacion 2 personas',servicios:'Aire acondicionado, comedor, refrigeradora',src:require('./src/img/hotel1.jpg') },
    { name: 'Habitacion 3 personas',servicios:' comedor, refrigeradora',src:require('./src/img/hotel2.jpg') },
    { name: 'Habitacion 2 personas',servicios:' aire acondicionado, calefaccion,comedor, refrigeradora',src:require('./src/img/hotel3.jpg') },
    { name: 'Lugar 1',servicios:'',src:require('./src/img/image1.jpg') },
    { name: 'Lugar 2',servicios:'',src:require('./src/img/image2.jpg') },
    { name: 'Lugar 3',servicios:' ',src:require('./src/img/image3.jpg') },
    { name: 'Lugar 4',servicios:'',src:require('./src/img/image4.jpg') },
    { name: 'Lugar 5',servicios:'',src:require('./src/img/image1.jpg') },
    { name: 'Lugar 6',servicios:' ',src:require('./src/img/image3.jpg') },
  ]);

  function mostrarmensaje (header,msg,ser){
    Alert.alert(
     header,
      msg + "\n "+ser,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Habitaciones cerca de la playa ',
          data: items.slice(0, 6),
        },
        {
          title: 'Habitaciones en lo alto del hotel',
          data: items.slice(6, 12),
        },
        {
          title: 'Lugares cerca del hotel',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"  onPress={() => mostrarmensaje(section.title,item.name,item.servicios)}>
        <View style={[styles.itemContainer]} >
          <Text style={styles.itemName}>{item.name}</Text>
          <Image source={item.src} style={styles.image}/>
        </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}




const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor:'#388B7F'
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    height:40,
    width:80
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'black',
    height:30,
    width:50
    
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  image:{
    height:80,
    width:70
  }
});
