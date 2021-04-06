import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function FingerPrint(props) {
 return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
                 {/* Financial Store Main Logo */}
                  <View style={styles.image}>
                  <Image source={require('../assets/file1.jpeg')} style={{height:61,width:82}} />
                  <Image source={require('../assets/file2.png')} style={{height:35,width:239,}} />
                  <Image source={require('../assets/file4.jpeg')} style={{width:200,height:21}} />
                
                  </View>

                

                  {/* Touch Id Text */}
                  <View>
                   <Text style= {styles.text}>Setup Fingerprint Id</Text>
                  </View>

                  {/* Fingerprint Image */}
                  <View style={styles.fingerprint}>
                       <TouchableOpacity>
                          <Image source={require('../assets/fingerprint.png')}  />
                       </TouchableOpacity>
                      
                  </View>
                   {/*Proceed Button */}
                   <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Dashboard')}>
                    <Text style={styles.proceed_text}>Proceed</Text>
                    </TouchableOpacity>
                

      </ScrollView>
    </SafeAreaView>
 )
}


const styles = StyleSheet.create({
  container: {
                              flex: 1,
                              backgroundColor: 'white',
                              textAlign:'center',
  },
  
  image:{
                              marginTop:50,
                              alignItems: 'center',

},

  financial:{
                              marginLeft:50,
                              fontSize: hp('3.2%'),
                              fontWeight:"bold",
                              color:" rgb(247, 178, 50)",
                              marginTop:10,
  },
 text:{
                              textAlign:'center',
                              fontSize: hp('3.3%'),
                              fontStyle:'italic',
                              marginTop:80,

  },
  
  button:{                 
                              width:220,
                              borderRadius:25,
                              backgroundColor:'#f5821f',
                              height:50,
                              marginLeft:70,
                              marginTop:50,
                              marginBottom:50,
                              elevation: 18,
                              shadowRadius: 15 ,
                              shadowOpacity: 10,
                              shadowColor: '#f5821f',





},
proceed_text:{
                              fontSize:25,
                              fontStyle:'italic',
                              marginLeft:65,
                              marginTop:10,



},
  
  fingerprint:{
                              marginLeft:120,
                              marginTop:50,

  },
  
  
  input: {
                              margin: 15,
                              height: 41,
                              borderColor: 'orange',
                              borderWidth: 3,
                              width:50,
                              marginLeft:40,
                              marginTop:20,

 },
 input_second:{
                              margin: 15,
                              height: 41,
                              borderColor: 'orange',
                              borderWidth: 3,
                              width:50,
                              marginLeft:120,
                              marginTop:-56,             
  },
 input_third:{
                              margin: 15,
                              height: 41,
                              borderColor: 'orange',
                              borderWidth: 3,
                              width:50,
                              marginLeft:200,
                              marginTop:-56,   
 },
 input_four:{
                              margin: 15,
                              height: 41,
                              borderColor: 'orange',
                              borderWidth: 3,
                              width:50,
                              marginLeft:270,
                              marginTop:-56, 
 },
})
export default FingerPrint;