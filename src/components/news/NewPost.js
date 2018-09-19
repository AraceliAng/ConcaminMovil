import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Card,Textarea,Image} from 'native-base'
import ImagePicker from 'react-native-image-picker';



const options={
    title:'Nuevo Post',
    takePhotoButtonTitle:'Tomar una foto',
    chooseFromLibraryButtonTitle:'Elige una foto desde la galeria',
}




export default class NewPost extends Component {
    state={
        avatarSource:null
    }
    myfun=()=>{
       // alert('click')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    clearImage=()=>{
        this.setState({avatarSource:null})
    }


    render() {
        let {avatarSource}=this.state
        console.log("que hay ", avatarSource)
        return (

            <Modal
                animationType="slide"
                visible={this.props.open}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={this.props.close} >
                            <Icon name='close' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right>
                        <Text style={{color:'white'}}>Enviar</Text>
                    </Right>
                </Header>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Textarea rowSpan={9}  placeholder="¿Qué quieres compartirnos?" />
                {avatarSource ?
                    <View style={styles.imgencita}>
                        <View style={styles.iconcito}>
                            <TouchableOpacity  onPress={this.clearImage}>
                                <Icon name="ios-close-circle" style={{color:'black'}}/>
                            </TouchableOpacity>
                        </View>
                        <Thumbnail square large source={avatarSource} />
                    </View>
                    :
                    null
                }


                <List>
                    <ListItem itemDivider icon onPress={this.myfun}>
                        <Left>
                            <Icon active name="ios-image" />
                        </Left>
                        <Body>
                        <Text >Agregar imagen</Text>
                        </Body>
                        <Right/>

                    </ListItem>
                </List>

            </Modal>
        );
    }
}


const styles = StyleSheet.create({

    imgencita:{
        marginRight:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        position:'relative'
    },
    iconcito:{
        zIndex:90,
        top:-22,
        right:55,
        position:'absolute'
    }
});

/*



 */