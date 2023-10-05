import React from 'react';
import { View, Text, Image,StyleSheet, ImageBackground } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View  style={styles.container}>
      
      <ImageBackground style={styles.backgroundImage} source={require('../assets/MapsicleMap.png')}/>
      <Text style={styles.overlayText}>Anderson G.   <Image  source={require('../assets/Icon_Verify.png')}/> 
      {'\n'}
      <Image style={{width:10,height:10}} source={require('../assets/iconStart.png')}/> <Text style={{color:"#F0AD00",fontSize:18,fontWeight:'bold'}}>4.9</Text>
        {'\n'}
        {'\n'}
      Go for a walk and feed dog</Text>
     
      <Image
        source={require('../assets/Avas.png')}
        style={styles.overImage}
      />
      <Image
        source={require('../assets/User.png')}
        style={styles.overlayImage}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overImage: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: '20%',
    left: '20%',
    marginTop: -80,
    marginLeft: -60,
  },
  overlayImage: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: '50%',
    left: '50%',
    marginTop: -80,
    marginLeft: -60,
  },
  overlayText: {
    width: 350,
    height:180,
    fontSize: 24,
    color: 'black',
    backgroundColor: 'white',
    marginTop: 300,
    paddingLeft:10,
    paddingTop:5
  },
  
});
export default DetailsScreen;