import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function MainDashboard(props) {
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
                   <Text style= {styles.text}>Dashboard......Designing to be</Text>
                   <Text style= {styles.text_two}>done.....</Text>
                  
                  </View>

                    {/*Proceed Button */}
                    <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('UserHome')}>
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
                          textAlign:'center',
                          fontSize: hp('3.3%'),
                          fontStyle:'italic',
                          marginTop:100,

  },
  text_two:{
                            
                            fontSize: hp('3.3%'),
                            fontStyle:'italic',
                            marginLeft:25,
  },
  button:{                 
                            width:220,
                            borderRadius:25,
                            backgroundColor:'#f5821f',
                            height:50,
                            marginLeft:70,
                            marginTop:80,
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
export default MainDashboard;