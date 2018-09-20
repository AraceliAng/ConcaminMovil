import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Item,Textarea,Form,Input,CardItem,Image} from 'native-base'
import ImagePicker from 'react-native-image-picker';



const options={
    title:'Nuevo Post',
    takePhotoButtonTitle:'Tomar una foto',
    chooseFromLibraryButtonTitle:'Elige una foto desde la galeria',
}




export default class NewPost extends Component {
    state={
        photo:false,
        activeLink:false,
        avatarSource:null,
        newPost:{
            links:[],
            body:"",
            image:"",
            file:""
        },
    }
    myfun=()=>{
        this.setState({photo:true,link:false})
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
                let {newPost} = this.state

                newPost["image"]=source
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    newPost
                });
            }
        });
    }

    clearImage=()=>{
        this.setState({avatarSource:null})
    }
    //add Link
    onChange=(field,value)=>{
        let {newPost}=this.state
        newPost[field] = value;
        this.setState({newPost})
    }
    newLink=(field,value)=>{
        let {newPost} = this.state;
        newPost['links'].push(newPost.link)
        newPost.link =""
        this.setState({newPost})
    }
    addLink=()=> {
        this.setState({activeLink: true})
    }

    onSubmit=()=>{

        //this.setState({loading:true})
        const {newPost} = this.state;
        /*if(this.props.tipo === "GROUP" ){
            newPost.tipo = "GROUP";
            newPost.group = this.props.groupId;
        }
        addPost(newPost)
            .then(post=>{
                let {posts} = this.state;
                posts.unshift(post)
                newPost.body=""
                newPost.links=[]
                this.clearFile()
                this.setState({posts, newPost, loading:false, addLink:false})
                toastr.success('Se ha publicado tu post')
            }).catch(e=>{
            toastr.error('No se pudo publicar, posiblemente tu archivo es muy pesado' + e)
            console.log(e)
        })*/

        console.log(newPost)
        this.props.close()

    }


    render() {
        let {avatarSource,activeLink,newPost}=this.state;

        console.log("que hay ", avatarSource)
        return (

            <Modal
                animationType="slide"
                visible={this.props.open}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}
                style={{flex:1}}
            >
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
                        <TouchableOpacity onPress={this.onSubmit}>
                            <Text style={{color:'white'}}>Enviar</Text>
                        </TouchableOpacity>

                    </Right>
                </Header>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{flex:1    }}
                >

                    <Form style={{flex:2}}>
                        <Textarea rowSpan={8}  placeholder="¿Qué quieres compartirnos?" onChangeText={value=>this.onChange("body",value)} />
                        {activeLink ?
                            <ListItem icon noBorder>
                                <Left>

                                        <Icon  name="ios-link" />

                                </Left>
                                <Body>
                                <Input placeholder="Escribe tu link" onChangeText={value=>this.onChange("link",value)}/>
                                </Body>
                                <Right>
                                    <Button transparent onPress={this.newLink}>
                                        <Icon  name="ios-add-circle"/>
                                    </Button>
                                </Right>
                            </ListItem>
                            :
                            null

                        }
                        {avatarSource ?
                            <View style={styles.imgencita}>
                                <View style={styles.iconcito}>
                                    <TouchableOpacity  onPress={this.clearImage}>
                                        <Icon name="ios-close-circle" style={{color:'black'}}/>
                                    </TouchableOpacity>
                                </View>
                                <Thumbnail large source={avatarSource}  style={{height: 300, width: 300}}/>
                            </View>
                            :
                            null
                        }
                        {newPost.links ? newPost.links.map((link, i)=>
                            <CardItem key={i}>
                                <Icon active name="ios-link" style={{fontSize:16}} />
                                <Text note style={styles.textito}>{link}</Text>
                                <Right/>
                            </CardItem>
                        ) : null

                        }

                    </Form>
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
                        <ListItem itemDivider icon onPress={this.addLink}>
                            <Left>
                                <Icon active name="ios-link" />
                            </Left>
                            <Body>
                            <Text >Links</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                    </List>


                </KeyboardAvoidingView>

            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    frm:{
        height:5
    },
    imgencita:{
        flex:2,
        marginRight:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        position:'relative'
    },
    iconcito:{
        zIndex:90,
        top:-10,
        right:0,
        position:'absolute'
    }
});