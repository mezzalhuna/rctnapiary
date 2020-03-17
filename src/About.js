import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <View style={{width:'100%',marginTop:'50%',height:300}}>
         <TouchableOpacity style = {{borderWidth:1,height:30,alignSelf:'center',width:300,backgroundColor:'#ccc',borderRadius:5 }} onPress = {goToHome}>
            <Text style={{alignSelf:'center',marginTop:5}}>Kembali ke Home</Text>
         </TouchableOpacity>
         <Text style={{alignSelf:'center',marginTop:20,fontWeight:'bold'}}>
            Aplikasi ini Dibuat oleh : Ade Ekawadi
         </Text>
      </View>
     
   )
}
export default About