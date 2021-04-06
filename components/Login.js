import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function Login(props) {
 return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
                 {/* Financial Store Main Logo */}
                  <View style={styles.image}>
                  <Image source={require('../assets/file1.jpeg')} style={{height:61,width:82}} />
                  <Image source={require('../assets/file2.png')} style={{height:35,width:239,}} />
                  <Image source={require('../assets/file4.jpeg')} style={{width:200,height:21}} />
                
                  </View>

                  {/* Financial Store below text */}
                  <View>
                        <Text style={styles.text}>Hello Mr. Vishal Kudmethe</Text>
                  </View>

                  {/* Touch Id Text */}
                  <View>
                   <Text style= {styles.text_two}>Please use Your Touch Id</Text>
                  </View>

                  {/* Fingerprint Image */}
                  <View style={styles.fingerprint}>
                       <TouchableOpacity>
                          <Image source={require('../assets/fingerprint.png')}  />
                       </TouchableOpacity>
                      <Text style={styles.or}> Or</Text>
                  </View>

                  {/* Fingerprint Below Text */}
                  <View>
                      <Text style={styles.pin_text}>Login using Your PIN</Text>
                  </View>

                 {/* Four Text Input Field */}
                  <View style={{marginLeft:15}}>

                      <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"/>    
                       <TextInput style = {styles.input_second}
                                underlineColorAndroid = "transparent"/>    
                      <TextInput style = {styles.input_third}
                                underlineColorAndroid = "transparent"/> 
                      <TextInput style = {styles.input_four}
                                underlineColorAndroid = "transparent" /> 
                 </View>

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
financial_text:{
                              fontSize:16,
                              marginTop:10,
                              alignItems: 'center',



},
text:{
                          marginLeft:50,
                          fontSize: hp('3.2%'),
                          fontWeight:"bold",
                          color:'#f5821f',
                          marginTop:40,
  },
text_two:{
                          marginLeft:50,
                          fontSize: hp('3.3%'),
                          fontWeight:'bold',
                          marginTop:30,

  },
  
  login_text:{
                                fontSize: hp('3.3%'),
                                fontWeight:'bold',
                                marginLeft:55,
                                marginTop:10,



  },
  register:{
                                marginTop:30,
                                marginLeft:90,
                                width:170,
                                borderRadius:15,
                                backgroundColor:'black',
                                height:50,


  },
  register_text:{
                              fontSize: hp('2.6%'),
                              fontWeight:'bold',
                              marginLeft:45,
                              marginTop:10,
                              color:'white'
  },
  fingerprint:{
                              marginLeft:120,
                              marginTop:50,

  },
  or:{
                            fontSize: hp('3%'),
                            fontWeight:'bold',
                            marginLeft:40,

  },
   pin_text:{
                          marginLeft:80,
                          fontSize: hp('3%'),
                          fontWeight:'bold',
                          marginTop:50,




  },
  input: {
                          margin: 15,
                          height: 41,
                          borderColor: '#f5821f',
                          borderWidth: 3,
                          width:45,
                          marginLeft:50,
                          marginTop:20,

 },
 input_second:{
                          margin: 15,
                          height: 41,
                          borderColor: '#f5821f',
                          borderWidth: 3,
                          width:45,
                          marginLeft:110,
                          marginTop:-56,             
  },
 input_third:{
                            margin: 15,
                            height: 41,
                            borderColor: '#f5821f',
                            borderWidth: 3,
                            width:45,
                            marginLeft:170,
                            marginTop:-56,   
 },
 input_four:{
                              margin: 15,
                              height: 41,
                              borderColor: '#f5821f',
                              borderWidth: 3,
                              width:45,
                              marginLeft:230,
                              marginTop:-56, 
 },
})
export default Login;