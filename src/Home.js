import React,{Component} from 'react'
import { TouchableOpacity, Text,FlatList,View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Label, Button, Thumbnail, Left, Body, Right, Badge } from 'native-base';
class Login extends Component {
   state = {
     data:''
  }
   getdata(){
      fetch('https://newsapi.org/v2/sources?apiKey=7e7cba19a40d48e583b7a8195bbd4ee6', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({data:responseJson.sources});
                    
                })
                .catch((error) => {
                    console.error(error);
                });
   }
   componentDidMount(){
      this.getdata();
   }
   goto_about(){
      Actions.about();
   }
   render() {
       return (
           <Container>
               <Content>
               <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => 
                  <View style={{width:'90%',borderWidth:1,alignSelf:'center',marginTop:5,borderRadius:5,marginBottom:10,borderColor:'#ccc'}}>
                     <Text style={{margin:10,fontSize:15,fontWeight:'bold'}}>
                        {item.name}
                     </Text>
                     <Text style={{margin:10}}>
                        {item.description}
                     </Text>
                  </View>
                  
                  }                  
                  />
                  <View style={{width:'100%',height:50,borderWidth:1}}>
                     <TouchableOpacity onPress={()=>this.goto_about()}>
                        <Text style={{width:'100%',textAlign:'center',marginTop:'4%',fontSize:15,fontWeight:'bold'}}>
                           Tentang Pembuat
                        </Text>
                     </TouchableOpacity>
                  </View>
               </Content>
           </Container>
       )
   }
}
export default Login