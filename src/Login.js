import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Thumbnail, Left, Body, Right, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux'

class Login extends Component {
    state = {
        user: '',
        password: ''
    }
    login_user(){        
        if(this.state.user=='admin' && this.state.password=='1234'){
            Actions.home()
        }else{
            alert("user ID dan PAssword salah...!")
        }
    }
    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#ccc'}}>
                    <View style={{width:'100%',backgroundColor:'#fff',marginTop:40}}>
                        <Text style={{fontSize:30,alignSelf:'center'}}>
                            Tugas Ade
                        </Text>
                    </View>
                   
                    <View style={{ width: '100%', marginTop: '30%',backgroundColor:'#fff',height:150,marginRight:5 }}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input onChangeText={(x)=>this.setState({user:x})} />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input onChangeText={(x)=>this.setState({password:x})} secureTextEntry={true}/>
                            </Item>
                        </Form>
                    </View>
                    <View style={{width:'100%',height:80,backgroundColor:'#fff'}}>
                        <Button style={{margin:10,borderRadius:5}} onPress={()=>this.login_user()}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',width:'100%',textAlign:'center'}}>
                                Login
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}
export default Login
