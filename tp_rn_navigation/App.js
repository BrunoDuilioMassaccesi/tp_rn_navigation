import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Button title="volver a la primer screen" onPress={() => navigation.navigate('screen1')} />
    </View>
  );
}

const StackB = createNativeStackNavigator();
// Screens del Segundo Stack
function screen1stack2() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>Screen home del segundo stack</Text>
      <Button title="screen 1 del segundo stack" onPress={() => navigation.navigate('screen2stack2', { itemId: "infopibes" })} />
      <Text style={styles.text}>Toca el icono</Text>
      <TouchableOpacity onPress={() => alert('solta la compu')}>
        <Ionicons name="search" size={75} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function screen2stack2({ route }) {
  const { itemId } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.searchScreen}>
      <Text style={styles.text}>screen 1 del segundo stack</Text>
      <Button title="volver al screen home del segundo stack" onPress={() => navigation.navigate('screen1stack2')} />
      <Text style={styles.text}>parametro recibido desde home del stack 2 {itemId}</Text>
    </View>
  );
}

const StackC = createNativeStackNavigator();
// screen home del tecer stack
function screen1stack3() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>stack del PERFIL</Text>
      <Button title="ir al form del perfil" onPress={() => navigation.navigate('screen2stack3')} />
    </View>
  );
}

function screen2stack3() {
  const navigation = useNavigation();
  return (
    <View style={styles.perfilScreen}>
      <Text style={styles.text}>PERFIL</Text>
      
      <Text style={styles.label}>nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="ingresa tu nombre"
      />
      <Text style={styles.label}>gmail</Text>
      <TextInput
        style={styles.input}
        placeholder="ingresa tu gmail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="ingresa tu contraseña"
        secureTextEntry
      />

      <Button title="volver a screen1stack3" onPress={() => navigation.navigate('screen1stack3')} />
    </View>
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
    <StackC.Navigator>
      <StackC.Screen 
        name="screen1stack3" 
        component={screen1stack3} 
        options={{ 

          title: 'informacion del usuario',
          
          headerStyle: { backgroundColor: 'lightblue' },
          
          headerTintColor: 'red',
          
          headerTitleAlign: 'center',
          
          headerRight: () => (
            <Button
              onPress={() => alert('Solta la comppuuuuuu')}
              title="Info"
              color="purple"
            />
          ),
         }}
      />

      <StackC.Screen 
        name="screen2stack3" 
        component={screen2stack3} 
        options={{ 
          //si lo de abajo lo cambio por true te muestra la barra para volver a la screen 1 del stack 3
          headerShown: false
         }}
        />
    </StackC.Navigator>
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
      />


      <Tab.Screen 
        name="Buscador" 
        component={stack2} 
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
});