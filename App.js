import React from 'react';
import { StyleSheet} from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import OtpAuth from './components/OtpAuth';
import PinAuth from './components/PinAuth';
import FingerPrint from './components/FingerPrint';
import Dashboard from './components/Dashboard';
import MainDashboard from './components/MainDashboard';
import UserHome from './components/UserHome';
import UserMenu from './components/UserMenu';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
 return (
  <NavigationContainer>
  <Stack.Navigator>

  {/*Navigation of Home Page(default) */}
    <Stack.Screen
              name="Home"
              component={Home}
                      options={{
              
                            headerStyle: {
                            backgroundColor: 'red', 
                            height:0,
                             },
                           headerTintColor: 'white', 
      
                            }}
     />

      {/*Navigation of Home Page to Login Page */}
      <Stack.Screen
                    name="Login"
                    component={Login}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                 headerTintColor: 'white', 
            
                                  }}
      />
      {/*Navigation of Home Page to Registration Page */}
       <Stack.Screen
                    name="Registration"
                    component={Registration}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                 headerTintColor: 'white', 
            
                                  }}
      />
      {/*Navigation of Registration Page to OtpAuth Page */}
       <Stack.Screen
                    name="OtpAuth"
                    component={OtpAuth}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                 headerTintColor: 'white', 
            
                                  }}
      />
      {/*Navigation of OtpAuthPage to PinAuth Page */}
      <Stack.Screen
                    name="PinAuth"
                    component={PinAuth}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'white', 
            
                                  }}
      />
       {/*Navigation of PinAuthPage to FingerPrint Page */}
      <Stack.Screen
                    name="FingerPrint"
                    component={FingerPrint}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'white', 
            
                                  }}
      />
      {/*Navigation of PinAuthPage to Dashboard Page */}
      <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'white', 
            
                                  }}
      />
      {/*Navigation of PinAuthPage to Dashboard Page */}
        <Stack.Screen
                    name="MainDashboard"
                    component={MainDashboard}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'white', 
            
                                  }}
      />

      {/*Navigation of Maindashboard  to UserHome Page */}
      <Stack.Screen
                    name="UserHome"
                    component={UserHome}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'rgb(238, 235, 235)', 
            
                                  }}
      />
      
      {/*Navigation of User Home  to UserMenu Page */}
      <Stack.Screen
                    name="UserMenu"
                    component={UserMenu}
                            options={{
                    
                                  headerStyle: {
                                  backgroundColor: 'red', 
                                  height:0,
                                   },
                                  headerTintColor: 'white', 
            
                                  }}
      />
     </Stack.Navigator>

    </NavigationContainer>
 )
}


const styles = StyleSheet.create({
  container: {
                              flex: 1,
                              backgroundColor: 'white',
                             
  },
  
  
})