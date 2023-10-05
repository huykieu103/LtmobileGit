import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const goToScreen = () =>{
    navigation.navigate('Next to you');
  }
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
            <Image  style={styles.Sreach} source={require('../assets/Search.png')}/>
            <Image  style={styles.filter} source={require('../assets/Icon_Filter.png')}/>
      </View>
      <View>
      < TouchableOpacity onPress={(goToScreen) }
        ><Text style={{fontSize:20, fontWeight:'bold',marginLeft:30}}>Next to you</Text></TouchableOpacity>
        <Image  style={styles.card} source={require('../assets/Card.png')}/>
        
      </View>
      <View>
        <Text style={{fontSize:20, fontWeight:'bold',marginLeft:30}}>Catgories</Text>
        
      </View>
    

    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  Container:{
         
  },
  header:{
  },
  Sreach:{
            width:300,
            height: 80,
            marginTop: 20,
            marginLeft: 30,

  },
  filter:{
    width: 80,
    height:80,
  },
  card:{
    width: 300,
    height: 300,
    marginTop:20,
    marginLeft: 50,
  }
})