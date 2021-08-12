import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function CountDown() {

    const [count,setcount] = useState(0)

  return (
    <ScrollView>
    <View style={styles.container}>
     {/* <Image style={{marginTop: -200,borderRadius: 100,width: 100,height: 100}} source={require('./assets/logo.jpg')}/> */}
     
     <View style={{borderRadius: 30,backgroundColor: "white",marginTop: 100,marginLeft: 50,marginRight: 50}}>
     <Text style={{marginBottom: 50,textAlign: "center",color: "black",marginTop: 50,fontSize: 50,fontFamily: "Lato",fontWeight: "bold"}}>{count}</Text>
     </View>
     
     <View style={{}}>
     <TouchableOpacity onPress={() => setcount(count + 1)} style={{marginLeft: 119,marginTop: 100,backgroundColor: "white",width: 50,height: 50,borderRadius: 100}} >
     <Text style={{color: "black",fontWeight: "bold",fontSize: 30,paddingLeft: 17,paddingTop: 3}}>+</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setcount(count - 1)} style={{marginLeft: 179,marginTop: -50,backgroundColor: "white",width: 50,height: 50,borderRadius: 100}} >
     <Text style={{color: "black",fontWeight: "bold",fontSize: 30,paddingLeft: 18,paddingTop: 3}}>-</Text>
     </TouchableOpacity>
     </View>
     <View style={{backgroundColor: "white",borderRadius: 50,marginTop: 90,marginLeft: 30,marginRight: 30,height: 40}}>
     <Text style={{marginTop: 10,color: "black",textAlign: "center",fontWeight: "bold",fontStyle: "italic"}}>Created By Jibran Abdul Jabbar...!</Text>
     </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
