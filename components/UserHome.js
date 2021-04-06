import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text,View,TouchableOpacity,TextInput } from 'react-native'

 function UserHome(props) {
 return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
                 {/* Financial Store Main Logo */}
                  <View style={styles.image}>
                   <Image source={require('../assets/fsicon.png')} style={styles.fs_logo} />
                  </View>

                  {/* Menu Icon */}
                  <TouchableOpacity >
                  <Image source={require('../assets/menu.png')} style={styles.menu} />
                  </TouchableOpacity>

                  {/* Cart Logo */}
                  <View>
                  <Image source={require('../assets/cart.png')} style={styles.cart} />
                  </View>

                  {/* Setting Icon */}
                  <View>
                  <Image source={require('../assets/setting.png')} style={styles.setting} />
                  </View>

                  {/* Home icon */}
                  <TouchableOpacity>
                  <Image source={require('../assets/home.png')} style={styles.home}  />
                  </TouchableOpacity>

                  {/*  Text */}
                  <View style={styles.text}>
                     <Text style={styles.text_type}>Transaction Type </Text>
                  </View>


                    {/*  Purchase Key */}
                    <TouchableOpacity>
                        <Image source={require('../assets/key1.jpeg')} style={styles.key1}  />
                    </TouchableOpacity>

                    {/*  Redemption Key */}
                    <TouchableOpacity>
                        <Image source={require('../assets/key2.jpeg')} style={styles.key2}  />
                    </TouchableOpacity>

                    
                    {/* Main Key */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('UserMenu')}>
                    <Image source={require('../assets/mainkey.jpeg')} style={styles.mainkey}  />
                    </TouchableOpacity>

                    {/* Fs Icon Logos */}    
                    <TouchableOpacity>
                    <Image source={require('../assets/fsicon.png')} style={styles.mainkey_logo} />
                    </TouchableOpacity>

                  
                   {/*  Switch Key */}
                   <TouchableOpacity>
                    <Image source={require('../assets/key3.jpeg')} style={styles.key3}  />
                   </TouchableOpacity>

                  {/*  Stp Key */}
                  <TouchableOpacity>
                    <Image source={require('../assets/key4.jpeg')} style={styles.key4}  />
                  </TouchableOpacity>
                

      </ScrollView>
    </SafeAreaView>
 )
}


const styles = StyleSheet.create({
container: {
                              flex: 1,
                              backgroundColor: 'rgb(238, 235, 235)',
                              
},
 
image:{
                              marginTop:50,
                              backgroundColor:'#f5821f',
                              height:55,
},
fs_logo:{
                                    height:52,
                                    width:70,
                                    marginTop:2.5,
                                    marginLeft:70,
},
menu:{
                                    height:25,
                                    width:40,
                                    marginTop:-40,
                                    marginLeft:5,
}
,
home:{
                                    height:22,
                                    width:25,
                                    marginLeft:190,
                                    marginTop:-38,
},
cart:{
                                    height:35,
                                    width:45,
                                    marginTop:-42,
                                    marginLeft:240,
},
setting:{
                                    height:25,
                                    width:30,
                                    marginTop:-37,
                                    marginLeft:310,
},
text:{
                            
                                    backgroundColor:'white',
                                    height:60,
                           
                           

},
text_type:{
                                    fontSize:22, 
                                    color:' rgb(30, 126, 236)',
                                    marginTop:12,
                                    marginLeft:10,
                        
                    
},
key1:{
                                    marginTop:50,
                                    height:80,
                                    width:200,
                                    marginLeft:70,
},
key2:{
                                    marginTop:10,
                                    height:90,
                                    width:200,
                                    marginLeft:140,
},
key3:{
                                    marginTop:-65,
                                    height:90,
                                    width:200,
                                    marginLeft:140,
},
key4:{
                                    marginTop:30,
                                    height:80,
                                    width:200,
                                    marginLeft:70,

},
mainkey:{
                                    height:120,
                                    width:115,
                                    marginTop:-30,
},
mainkey_logo:{
                                    height:65,
                                    width:75,
                                    marginTop:-96,
                                    marginLeft:20,
},

})
export default UserHome;