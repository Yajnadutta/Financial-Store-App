import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet,View,TouchableOpacity } from 'react-native'


 function UserMenu(props) {
 return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
                 {/* Financial Store Main Logo */}
                  <View style={styles.image}>
                   <Image source={require('../assets/fsicon.png')} style={styles.fs_logo} />
                  </View>

                  {/* Menu Icon */}
                  <TouchableOpacity onPress={() => props.navigation.navigate('UserHome')}>
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
                  
                  {/* Setting Icon */}
                  <View>
                  <Image source={require('../assets/name.jpeg')} style={styles.name} />
                  </View>

                  {/* Fs Icon Logos */}    
                  <TouchableOpacity>
                   <Image source={require('../assets/fsicon.png')} style={styles.mainkey_logo} />
                  </TouchableOpacity>

                  
                  {/* Dashboard Logo */}    
                  <TouchableOpacity>
                   <Image source={require('../assets/dashboard.jpeg')} style={styles.dashboard} />
                  </TouchableOpacity>

                  
                  {/* Transcation Logo */}    
                  <TouchableOpacity>
                   <Image source={require('../assets/transaction.jpeg')} style={styles.transaction} />
                  </TouchableOpacity>
                 
                  {/* Create Clients Logo */}    
                  <TouchableOpacity>
                   <Image source={require('../assets/clients.jpeg')} style={styles.clients} />
                  </TouchableOpacity>

                  {/* Generate/Upload ADF Logo */}    
                  <TouchableOpacity>
                   <Image source={require('../assets/generate.jpeg')} style={styles.generate} />
                  </TouchableOpacity>
                 
                   {/* Mandate Registration Logo */}    
                   <TouchableOpacity>
                   <Image source={require('../assets/mandate_registration.jpeg')} style={styles.registration} />
                   </TouchableOpacity>

                   {/* Generate Upload Mandate Logo */}    
                   <TouchableOpacity>
                   <Image source={require('../assets/upload_mandate.jpeg')} style={styles.upload_mandate} />
                   </TouchableOpacity>

                    {/* Generate/Upload FATCA Logo */}    
                    <TouchableOpacity>
                    <Image source={require('../assets/generate_fatca.jpeg')} style={styles.generate_fatca} />
                    </TouchableOpacity>
                    
                    {/* Generate/Upload FATCA Logo */}    
                    <TouchableOpacity>
                    <Image source={require('../assets/fatca.jpeg')} style={styles.generate_fatca} />
                    </TouchableOpacity>
                   
                    {/* Logout Logo */}    
                    <TouchableOpacity>
                    <Image source={require('../assets/logout.jpeg')} style={styles.logout} />
                    </TouchableOpacity>
                

      </ScrollView>
    </SafeAreaView>
 )
}


const styles = StyleSheet.create({
container: {
                                    flex: 1,
                                    backgroundColor: 'white',
                              
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
name:{
                                    height:250,
                                    width:360,
                                    marginLeft:0,

},
mainkey_logo:{
                                      height:75,
                                      width:75,
                                      marginTop:-190,
                                      marginLeft:147,
},
dashboard:{
                                        height:35,
                                        width:200,
                                        marginLeft:10,
},
transaction:{
                                        marginTop:5,
                                        height:35,
                                        width:250,
                                        marginLeft:15,



},
clients:{
                                        marginTop:5,
                                        height:35,
                                        width:250,
                                        marginLeft:10,



},
generate:{
                                      marginTop:5,
                                      height:45,
                                      width:250,
                                      marginLeft:30,



},
registration:{
                                      marginTop:5,
                                      height:33,
                                      width:250,
                                      marginLeft:20,



},
upload_mandate:{
                                    marginTop:5,
                                    height:42,
                                    width:250,
                                    marginLeft:15,



},
generate_fatca:{
                                      marginTop:5,
                                      height:40,
                                      width:300,
                                      marginLeft:17,



},
logout:{
                                    marginTop:5,
                                    height:38,
                                    width:280,
                                    marginLeft:10,



},


})
export default UserMenu;