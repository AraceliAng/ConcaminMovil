import React,{Component} from 'react'
import {StyleSheet,View,TouchableOpacity} from 'react-native'
import {Container,Content,Text} from 'native-base'
import {Actions} from 'react-native-router-flux';
import CarouselLogin from "./CarouselLogin";
import {FormLogin} from "./FormLogin";


export default class LoginComponent extends Component{
    login=()=>{
        Actions.main()
    }
    render(){

        return(
            <Container>
                <CarouselLogin
                />
                <FormLogin login={this.login}/>
                <View style={styles.textos}>
                    <TouchableOpacity onPress={()=>Actions.recover()} >
                        <Text style={styles.textito}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.textito}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({

    textito:{
        color:'black',
        fontSize:16,

    },
    textos:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    }

})