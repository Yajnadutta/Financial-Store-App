import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

 function Dashboard(props) {
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
                   <Text style= {styles.text}>Hurrey!</Text>
                   <Text style= {styles.text_two}>Your KYC is already </Text>
                   <Text style= {styles.text_three}>avaliable with the </Text>
                   <Text style= {styles.text_three}>Intermediary. Let's proceed </Text>
                   <Text style= {styles.text_three}>to make investments in </Text>
                   <Text style= {styles.text_three}>Mutual funds Chosen by </Text>
                   <Text style= {styles.text_three}>You..... </Text>
                  </View>

                  
                   {/*Proceed Button */}
                   <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('MainDashboard')}>
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
                          marginTop:80,

  },
  text_two:{
                            textAlign:'center',
                            fontSize: hp('3.3%'),
                            fontStyle:'italic',
  },
  text_three:{
                            textAlign:'center',
                            fontSize: hp('3.3%'),
                            fontStyle:'italic',
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
                              marginTop:20,

  },
  
  
  
})
export default Dashboard;