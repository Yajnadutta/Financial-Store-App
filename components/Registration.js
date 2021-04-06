import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function Registration(props) {
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
                        <Text style={styles.pan_text}>Let Us Know Your PAN No.</Text>
                  </View>

                  {/* Four Text Input Field */}
                  <View>

                      <TextInput style = {styles.input}
                                  underlineColorAndroid = "transparent"/>    
                      <TextInput style = {styles.input_second}
                                  underlineColorAndroid = "transparent"/>    
                      <TextInput style = {styles.input_third}
                                  underlineColorAndroid = "transparent"/> 
                      <TextInput style = {styles.input_four}
                                  underlineColorAndroid = "transparent" /> 
                      <TextInput style = {styles.input_five}
                                  underlineColorAndroid = "transparent" /> 
                      <TextInput style = {styles.input_six}
                                  underlineColorAndroid = "transparent" /> 
                      <TextInput style = {styles.input_seven}
                                  underlineColorAndroid = "transparent" /> 
                      <TextInput style = {styles.input_eight}
                                  underlineColorAndroid = "transparent" />
                      <TextInput style = {styles.input_nine}
                                  underlineColorAndroid = "transparent" /> 
                      <TextInput  style = {styles.input_ten}
                                  underlineColorAndroid = "transparent" /> 
                 </View>

                  {/* Mobile Text */}
                  <View>

                          <Text style={styles.mobile_text}>Your Mobile Number</Text>
                  </View>

                  {/* Mobile Text Input Field*/}
                  <View>

                          <Text style={styles.phone_text}>+91-_ _ _ _ _ _ _ _ _ _ </Text>
                  </View>

                  {/* Email Id Text*/}
                  <View>

                            <Text style={styles.email_text}>And Your Email Id </Text>
                  </View>
                  
                  {/* Email Id Text Field*/}
                  <View>
                            <Text style={styles.email}>_____________________@gmail.com</Text>
                  </View>

                  {/*Proceed Button */}
                  <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('PinAuth')}>
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

  pan_text:{
                          marginLeft:50,
                          fontSize: hp('3.2%'),
                          fontWeight:"bold",
                          color:'#f5821f',
                          marginTop:30,
                          fontStyle:'italic'
  },
 
  input: {
                          margin: 15,
                          height: 39,
                          borderColor: '#f5821f',
                          borderWidth: 3,
                          width:30,
                          marginLeft:7,
                          marginTop:20,

 },
 input_second:{
                          margin: 15,
                          height: 39,
                          borderColor: '#f5821f',
                          borderWidth: 3,
                          width:30,
                          marginLeft:43,
                          marginTop:-54,             
  },
 input_third:{
                            margin: 15,
                            height: 39,
                            borderColor: '#f5821f',
                            borderWidth: 3,
                            width:30,
                            marginLeft:78,
                            marginTop:-54,   
 },
 input_four:{
                             
                              height: 39,
                              borderColor: '#f5821f',
                              borderWidth: 3,
                              width:30,
                              marginLeft:113,
                              marginTop:-54, 
 },
 input_five:{
                                margin: 15,
                                height: 39,
                                borderColor: '#f5821f',
                                borderWidth: 3,
                                width:30,
                                marginLeft:148,
                                marginTop:-39, 
},
input_six:{
                                margin: 15,
                                height: 39,
                                borderColor: '#f5821f',
                                borderWidth: 3,
                                width:30,
                                marginLeft:183,
                                marginTop:-54, 
},
input_seven:{
                                margin: 15,
                                height: 39,
                                borderColor: '#f5821f',
                                borderWidth: 3,
                                width:30,
                                marginLeft:218,
                                marginTop:-54, 
},
input_eight:{
                                    margin: 15,
                                    height: 39,
                                    borderColor: '#f5821f',
                                    borderWidth: 3,
                                    width:30,
                                    marginLeft:253,
                                    marginTop:-54, 
},
input_nine:{
                                    margin: 15,
                                    height: 39,
                                    borderColor: '#f5821f',
                                    borderWidth: 3,
                                    width:30,
                                    marginLeft:288,
                                    marginTop:-54, 
},
input_ten:{
                                    margin: 15,
                                    height: 39,
                                    borderColor: '#f5821f',
                                    borderWidth: 3,
                                    width:30,
                                    marginLeft:323,
                                    marginTop:-54, 
},
mobile_text:{
                                    textAlign:'center',
                                    fontSize: hp('3.2%'),
                                    fontWeight:"bold",
                                    color:'#f5821f',
                                    marginTop:20,
                                    fontStyle:'italic'
},
phone_text:{
                                    marginLeft:80,
                                    fontSize: hp('3.2%'),
                                    marginTop:30,
                                    fontStyle:'italic'
},
email_text:{
    
                                    textAlign:'center',
                                    fontSize: hp('3.2%'),
                                    fontWeight:"bold",
                                    color:'#f5821f',
                                    marginTop:40,
                                    fontStyle:'italic'
},
email:{
                                    marginLeft:30,
                                    marginTop:40,
                                    fontWeight:'bold',
                                    fontSize:20,
                                    fontStyle:'italic',

},
button:{                  width:220,
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
})
export default Registration;