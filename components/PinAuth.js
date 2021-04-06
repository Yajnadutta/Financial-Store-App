import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function PinAuth(props) {
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
                            <Text style={styles.text}>Please Set a 4 Digit PIN for</Text>
                    </View>

                    {/* Financial Store below text */}
                    <View>
                            <Text style={styles.second_text}>Quick Login</Text>
                    </View>

                    {/* OTP Input Field */}
                    <View style={{marginLeft:100,marginTop:50}}>
                        <Text style={{marginLeft:18,fontSize:18,fontStyle:'italic'}}>Enter PIN Here</Text>
                        <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"/>    
                        <TextInput style = {styles.input_second}
                                    underlineColorAndroid = "transparent"/>    
                        <TextInput style = {styles.input_third}
                                    underlineColorAndroid = "transparent"/> 
                        <TextInput style = {styles.input_four}
                                    underlineColorAndroid = "transparent" /> 
                        
                   </View>
                        {/* OTP Input Field */}
                        <View style={{marginLeft:100,marginTop:50}}>
                                <Text style={{marginLeft:18,fontSize:18,fontStyle:'italic'}}>Reconfirm PIN</Text>
                                <TextInput style = {styles.input}
                                        underlineColorAndroid = "transparent"/>    
                                <TextInput style = {styles.input_second}
                                        underlineColorAndroid = "transparent"/>    
                                <TextInput style = {styles.input_third}
                                        underlineColorAndroid = "transparent"/> 
                                <TextInput style = {styles.input_four}
                                        underlineColorAndroid = "transparent" /> 
                                
                      </View>

                        {/*Proceed Button */}
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('FingerPrint')} >
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

text:{
                          marginLeft:60,
                          fontSize: hp('2.9%'),
                          fontStyle:'italic',
                          marginTop:50,
                         
},
second_text:{
                        textAlign:'center',
                        fontSize:hp('2.9%'),
                        fontStyle:'italic',

} ,
input: {
                          margin: 15,
                          height: 39,
                          borderColor: '#f5821f',
                          borderWidth: 3,
                          width:30,
                          marginLeft:7,
                          marginTop:3,

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
})
export default PinAuth;