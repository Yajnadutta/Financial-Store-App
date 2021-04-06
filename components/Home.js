import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity, SafeAreaView,ScrollView } from 'react-native';

function Home(props)  {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <ScrollView>
            {/* Financial Store Main Logo */}
            <View style={styles.image}>
                <Image source={require('../assets/file1.jpeg')} style={{height:61,width:82}} />
                <Image source={require('../assets/file2.png')} style={{height:35,width:239,}} />
                <Image source={require('../assets/file4.jpeg')} style={{width:200,height:21}} />
                
            </View>

            {/* Financial Store Text */}
            <View>
                  <Text style={styles.text}>Hello,Welcome to Financial Store!</Text>
            </View>

           
			
            {/* Some Text */}
            <View>
              <Text style= {styles.text_two}>Lets Begin the Journey of Your Wealth Creation...</Text>
            </View>
            
            {/*Login Button 
            <TouchableOpacity>
            <Image source={require('../assets/login.png')} style={{marginLeft:35,marginTop:80,}} />
            <Text style={{marginTop:-53,marginLeft:150,fontSize:25,fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Image source={require('../assets/register.png')} style={{marginLeft:35,marginTop:80,}} />
            <Text style={{marginTop:-50,marginLeft:145,fontSize:24,fontWeight:'bold',color:'white',marginBottom:55,}}>Register</Text>
            </TouchableOpacity>
            */}
          
        
             <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('OtpAuth')}>
             <Text style={styles.login_text}>Login</Text>
             </TouchableOpacity> 
           
             {/* Register Button */}
            <TouchableOpacity style={styles.register} onPress={() => props.navigation.navigate('Registration')}>
               <Text style={styles.register_text}>Register</Text>
            </TouchableOpacity>

    </ScrollView>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
                  
    
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  height:750
                 
    
  },
  
  image:{
                        marginTop:60,
                        alignItems: 'center',

  },
  
  text:{
                        
                          fontSize:22,
                          fontWeight:"bold",
                          color:'#f5821f',
                          marginTop:50,
                          alignSelf:'center',
                          
                          
  },
text_two:{
                   
                          fontSize:24,
                          fontStyle:'italic',
                          textDecorationLine:'underline',
                          color:'#f5821f',
                          marginTop:60,
                          marginLeft:50,
  },
button:{                 
                            width:220,
                            borderRadius:30,
                            backgroundColor:'#f5821f',
                            height:50,
                            marginLeft:70,
                            marginTop:100,
                            elevation: 18,
                            shadowRadius: 15 ,
                            shadowOpacity: 10,
                            shadowColor: '#f5821f',
                            

  },
  
  login_text:{
                                fontSize:23,
                                fontWeight:'bold',
                                marginLeft:80,
                                marginTop:10,



  },
  register:{
                                marginTop:50,
                                marginLeft:70,
                                width:220,
                                borderRadius:30,
                                backgroundColor:'black',
                                height:50,
                                marginBottom:50,
                                shadowColor: "#000",
                                shadowOffset: {
                                  width: 0,
                                  height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,
                                
                                elevation: 24,
                               


  },
  
  register_text:{
                              fontSize:23,
                              fontWeight:'bold',
                              marginLeft:75,
                              marginTop:10,
                              color:'white'
  },

});

export default Home;
