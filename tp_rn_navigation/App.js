import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

const StackA = createNativeStackNavigator();
// home
function screen1() {
  const navigation = useNavigation();
  return (
    <View style={styles.bodyScreen12}>
      <Text style={styles.text}>Esta es la home "primer screen"</Text>
      <Button title="ir a la segunda screen" onPress={() => navigation.navigate('screen2')} />
    </View>
  );
}

//segunda screen, accedes desde la home
function screen2() {
  const navigation = useNavigation();
  return (
    <View style={styles.bodyScreen12}>
      <Text style={styles.text}>Esta es la segunda screen</Text>
      <Button title="volver a la primer screen" onPress={() => navigation.navigate('screen1')}/>
    </View>
  );
}

const StackB = createNativeStackNavigator();
// Screens del Segundo Stack
function screen1stack2() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>Luego de una investigacion profuna sobre las matematicas, responde la siguiente bien para pasar al proximo screen:</Text>
      <Text style={styles.pregunta}>¿ 1,01 + 2,99 ?</Text>
      <Button title="4" onPress={() => alert('NOOOOO BURROOOO')} />
      <Button title="3" onPress={() => navigation.navigate('screen2stack2', { itemId: 55 })} />

    </View>
  );
}

function screen2stack2({ route }) {
  const { itemId } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>Te presumo como se recibir parametros: {itemId}</Text>
      <Text style={styles.text}>ya ta, se me acabaron las ideas, volve a casa !!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('screen1stack2')}>
        <Ionicons name="home" size={75} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const Stack31 = createNativeStackNavigator();
// screen home del tecer stack
function screen1stack3() {
  const navigation = useNavigation();
  const imgLocal2 = require('./assets/logo.png');
  return (
    <View style={styles.container}>
      <Image source={imgLocal2} style={styles.logo} />
      <TextInput style={styles.texto} placeholder='Company' />
      <TextInput style={styles.contrsaena} placeholder='password' />

      <Pressable style={styles.boton}>
            <Text style={styles.log}>Iniciar Sesion</Text>
      </Pressable>
      <Pressable style={styles.boton}>
            <Text style={styles.olvidar}>¿Olvidaste tu Contraseña?</Text>
      </Pressable>

    </View>


  
  );
}

function screen2stack3() {
  const navigation = useNavigation();
  const imgLocal2 = require('./assets/logo.png');
  return (
    <>
    
    </>
  );
}

//creacion de las views

function stack1() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="screen1" component={screen1} />
      <StackA.Screen name="screen2" component={screen2} />
    </StackA.Navigator>
  );
}

function stack2() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="screen1stack2" component={screen1stack2} />
      <StackB.Screen name="screen2stack2" component={screen2stack2} />
    </StackB.Navigator>
  );
}


function stack3() {
  return (
    <Stack31.Navigator>
      <Stack31.Screen 
        name="screen1stack3" 
        component={screen1stack3} 
        options={{ 

          title: '¡ 🔔 Advertencia Al Usuario !',
          
          headerStyle: { backgroundColor: 'lightblue' },
          
          headerTintColor: 'red',
          
          headerTitleAlign: 'center',
          
          headerRight: () => (
            <Button
              onPress={() => alert('USUARIO BANEADO !')}
              title="Info"
              color="purple"
            />
          ),
         }}
      />

      <Stack31.Screen 
        name="screen2stack3" 
        component={screen2stack3} 
        options={{ 
          //si lo de abajo lo cambio por true te muestra la barra para volver a la screen 1 del stack 3
          headerShown: false
         }}
        />
    </Stack31.Navigator>
  );
}


//bottom navigator , el coso de abajo q te navega por los stacks
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={stack1} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />


      <Tab.Screen 
        name="Buscador" 
        component={stack2} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={stack3} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
  
  bodyScreen12: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#ADD8E6' 
  },
  
  searchScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#044a16' 
  },
  perfilScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#0000ff', 
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '90%',
    color: 'white',
  },
  logo:
  {
    width:200,
    height:160,
    borderRadius:10,
  },
  texto: {
    backgroundColor: '#fff',
    marginTop: 80,
    padding: 10,
    paddingRight: 107,
    paddingLeft: 107,
    borderRadius: 7,
    borderWidth: 2.5,        
    borderColor: '#1359BF',   
  },  
  gmail:
  {
    backgroundColor: '#fff',
    padding:10,
    paddingRight:80,
    paddingLeft:80,
    borderRadius:7,
    marginTop:30,
    borderWidth: 2.5,        
    borderColor: '#1359BF',
  },
  contrsaena:
  {
    backgroundColor: '#fff',
    padding:10,
    paddingRight:107,
    paddingLeft:107,
    borderRadius:7,
    marginTop:30,
    textAlign:'center',
    borderWidth: 2.5,        
    borderColor: '#1359BF',
  },
  log:
  {
    backgroundColor: '#29426B',
    padding:10, 
    marginTop:50,
    paddingLeft:60,
    paddingRight:60,
    borderRadius:5,
    color: '#fff',
  },
  olvidar:
  {
    color:'#3C49D2',
    marginTop:30,
  },
  pregunta:
  {
    color: 'black',
    fontSize: 25,
    marginTop: 10, 
  }
});