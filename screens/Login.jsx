
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TextInput,ScrollView, Touchable, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from 'react-native';
export default function Login() {
  const navigator=useNavigation()
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    function handleSubmit(){
    const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigator.navigate("Chatroom")  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("failed to Signedin",errorMessage)
    });
    }
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.sum}>
      <StatusBar style="auto" />

     <Image style={styles.adacode} source={require("../assets/speech-bubble.gif")}></Image>
    
     <Text style={styles.Text}>CHAT ON</Text>
     <View style={styles.blue}>
     <View style={styles.boxes}>
     <TextInput onChangeText={(value)=>setEmail(value)} style={styles.input1} placeholder='enter username'></TextInput>
     <TextInput onChangeText={(value)=>setpassword(value)} style={styles.input2} placeholder='enter password'></TextInput>
     <TouchableOpacity style={styles.button}
     onPress={handleSubmit}>
      <Text style={styles.bt}>Login</Text>
     </TouchableOpacity>
     
     </View> 
     </View>
     </View>
     

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  sum:{

    alignItems:'center',
    justifyContent:'flex-start',
  },
  adacode:{
    width:120,
    height:110,
    margin:40,
  },
  Text:{
    fontSize:40,
    margin:10,
    padding:0,
    color:'midnightblue',
    fontWeight:'bold',
  },
  blue:{
    fex:1,
    backgroundColor: '#9747FF', 
    width:390,
    height:700,
    position:'relative',
    top:100,
    borderRadius:30,
  },
  input1:{
    backgroundColor:'white',
    padding:15,
    margin:10,
    width:280,
    borderRadius:10,
    textAlign:'left',
    justifyContent:'center',
    
  },
  input2:{
    padding:15,
    backgroundColor:'white',
    margin:2,
    width:280,
    borderRadius:10,
    textAlign:'left',
    justifyContent:'space-evenly',
  },
  input3:{
    backgroundColor:'white',
    padding:10,
    margin:40,
    width:120,
    borderRadius:10,
    textAlign:'center',
    justifyContent:'center',
  },
  boxes:{
    justifyContent:'center',
    alignItems:'center',
    top:100,
  },
  bt:{
    color:'white',
  },
 button:{
  borderWidth:1,
  borderColor:'white',
  borderRadius:10,
  height:40,
  width:70,
  alignItems:"center",
  justifyContent:'center',
  margin:26,
 },

});