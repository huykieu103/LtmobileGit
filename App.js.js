import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View,StyleSheet,Image, ScrollView } from 'react-native';


function HomeScreen() {
  return (
    <View style={styles.container}>
   
      <View style={styles.house}>
        <View style={styles.house_left}><Image style={{width: 90, height: 90, marginLeft: 10,}} source={require('./assets/anh1.png')} /></View>
        <View style={styles.house_right}>
          <Text style={{fontWeight: 'bold',}}>One Mission Bay</Text>
          <Text style={{paddingTop: 20,}}>14 days ago</Text>
          <Text style={{fontWeight: 'bold',paddingTop: 20,}}>San Francisco, CA                $2,950,000           </Text>
        </View>
      </View>
      <View style={styles.house}>
        <View style={styles.house_left}><Image style={{width: 90, height: 90, marginLeft: 10,}} source={require('./assets/anh2.png')} /></View>
        <View style={styles.house_right}>
          <Text style={{fontWeight: 'bold',}}>1410 Steiner</Text>
          <Text style={{paddingTop: 20,}}>9 days ago</Text>
          <Text style={{fontWeight: 'bold',paddingTop: 20,}}>San Francisco, CA                $3,279,000           </Text>
        </View>
      </View>
      <View style={styles.house}>
        <View style={styles.house_left}><Image style={{width: 90, height: 90, marginLeft: 10,}} source={require('./assets/anh3.png')} /></View>
        <View style={styles.house_right}>
          <Text style={{fontWeight: 'bold',}}>246 Susex St</Text>
          <Text style={{paddingTop: 20,}}>7 days ago</Text>
          <Text style={{fontWeight: 'bold',paddingTop: 20,}}>San Francisco, CA                $1,259,000           </Text>
        </View>
      </View>
      <View style={styles.house}>
        <View style={styles.house_left}><Image style={{width: 90, height: 90, marginLeft: 10,}} source={require('./assets/anh4.png')} /></View>
        <View style={styles.house_right}>
          <Text style={{fontWeight: 'bold',}}>1206 Market</Text>
          <Text style={{paddingTop: 20,}}>2 hours ago</Text>
          <Text style={{fontWeight: 'bold',paddingTop: 20,}}>San Francisco, CA                $379,000           </Text>
        </View>
      </View>
      <View style={styles.house}>
        <View style={styles.house_left}><Image style={{width: 90, height: 90, marginLeft: 10,}} source={require('./assets/anh5.png')} /></View>
        <View style={styles.house_right}>
          <Text style={{fontWeight: 'bold',}}>463 Eureka St</Text>
          <Text style={{paddingTop: 20,}}>4 days ago</Text>
          <Text style={{fontWeight: 'bold',paddingTop: 20,}}>San Francisco, CA                $3,795,000           </Text>
        </View>
      </View>
    </View>
  );
}

function Apartments() {
  return (
    <View>
      <Image style={{width: '100%', height: '100%',}} source={require('./assets/anh7.png')} />
    </View>
  );
}
function Filters() {
  return (
    <View style={StyleSheet.filters}>
      <View style={StyleSheet.filter}>
          <Text style={{paddingTop:30, marginLeft: 20}}>Rent or Buy                                                                      Buy</Text>
          <View style={styles.horizontalLine} />
          <Text style={{paddingTop:30,marginLeft: 20}}>Square feet                                             500sqft-1000sqft</Text>
          <View style={styles.horizontalLine} />
          <Text style={{paddingTop:30,marginLeft: 20}}>Bedrooms                                                                      4bd</Text>
          <View style={styles.horizontalLine} />
          <Text style={{paddingTop:30,marginLeft: 20}}>Baths                                                                             2ba</Text>
          <View style={styles.horizontalLine} />
          <Text style={{paddingTop:30,marginLeft: 20}}>New Construction                                                        Yes</Text>
          <View style={styles.horizontalLine} /> 
          <Text style={{paddingTop:30,marginLeft: 20}}>Year Built                                                                c 2000</Text>
          <View style={styles.horizontalLine} />
          <Text style={{paddingTop:30,marginLeft: 20}}>Close to Public Transoprtation                                   Yes</Text>
          <View style={styles.horizontalLine} />
      </View>
    </View>
  );
}
function Search() {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
      <Image style={{width: '100%', height: 250,}} source={require('./assets/anh5.png')} />
      <Text style={styles.text}>One Mission Bay</Text>
      <Text style={{paddingLeft: 20}}>The lush interior courtyard invites you to swim, dine or relax, while the interior amenities provide numerous options for exercise, entertainment or business. Prominent design, fabulous finishes & the ultimate open floor plan, this home features 3 bed, 2 b..</Text>
      <Text style={styles.text}>Location</Text>
      <Image style={{width: '100%', height: 250,}} source={require('./assets/anh8.png')} />
      <Text style={styles.text}>Extra info</Text>
      <View style={{paddingLeft: 20}}> 
        <Text>Rent or Buy                                          Rent</Text>
        <Text>Bedrooms                                             3bd</Text>
        <Text>Close to Public Transoprtation             No</Text>
        <Text>New Construction                                 No</Text>
        <Text>Baths                                                    3ba</Text>
        <Text>Year Built                                            2000</Text>
        <Text>Square feet                                    2000sqft</Text>
      </View>
      <Image style={{width: '90%', height: 120,}} source={require('./assets/anh10.png')} />
    </View>
    </ScrollView>
  );
}
// Tạo bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Houses" component={HomeScreen} />
        <Tab.Screen name="Apartments" component={Apartments} />
        <Tab.Screen name="Filters" component={Filters} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  house:{
    flex:1,
    flexDirection: 'row',
  },
  house_left:{
    flex: 1,
  },
  house_right:{
    flex: 2,
  },
  filters:{
    flex: 1,
  },
  filter:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
    width: '90%',
    paddingTop: 30,
    marginLeft: 20,
    
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 20,
    paddingLeft: 25
  }
  
})