import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TextInput,ScrollView, Touchable, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.sum}>
      <StatusBar style="auto" />

     <Image style={styles.adacode} source={require("./assets/adacode1.png")}></Image>
    
     <Text style={styles.Text}>Adacode Solutions</Text>
     <View style={styles.blue}>
     <View style={styles.boxes}>
     <TextInput  style={styles.input1} placeholder='enter username'></TextInput>
     <TextInput  style={styles.input2} placeholder='enter password'></TextInput>
     <TouchableOpacity style={styles.button}
     onPress={() => console.log("logged In")}>
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
    width:200,
    height:200,
    margin:15,
  },
  Text:{
    fontSize:30,
    margin:10,
    padding:0,
  },
  blue:{
    fex:1,
    backgroundColor: 'skyblue', 
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
    margin:20,
  }
});
