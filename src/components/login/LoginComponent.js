import React,{Component} from 'react'
import {StyleSheet,View,TouchableOpacity,AsyncStorage} from 'react-native'
import {Container, Content, Text, Toast} from 'native-base'
import {Actions} from 'react-native-router-flux';
import CarouselLogin from "./CarouselLogin";
import {FormLogin} from "./FormLogin";
import {login} from '../../services/userService'


export default class LoginComponent extends Component{
    state={
        userLog:{
            email:"",
            password:""
        },
        buttonD:true
    }
    componentWillMount(){

        this._retrieveData()
    }
    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            if(token){
                console.log("hay usuario",token)
                Actions.main();
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    login=()=>{
        // Actions.main()
        let {userLog,buttonD} = this.state;
        if(userLog.email.length == 0){
            Toast.show({
                text: "Llena los campos!",
                position: "top",
                type: "danger"
            })
            console.log("no se puede",userLog)
        }else{
            login(userLog)
                .then(r => {
                    Actions.main()
                    Toast.show({
                        text: "Bienvenido!",
                        position: "top",
                        type: "success"
                    })
                    console.log("si se pudo")
                })
                .catch(error => {
                    Toast.show({
                        text: "Error!",
                        position: "top",
                        type: "danger"
                    })
                    console.log(error);
                })
        }



        // console.log("Datos",this.state.login)
    }
    handleChange = (field, value) => {
        let {userLog} = this.state;
        userLog[field] = value;
        this.setState({userLog});

    };

    render(){

        return(
            <Container>
                <Content>
                <CarouselLogin
                />
                <FormLogin login={this.login} onChange={this.handleChange}/>
                <View style={styles.textos}>
                    <TouchableOpacity onPress={()=>Actions.recover()} >
                        <Text style={styles.textito}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.textito}>Registrate</Text>
                    </TouchableOpacity>
                </View>
                </Content>
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