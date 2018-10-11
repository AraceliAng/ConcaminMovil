import React, { Component } from 'react';
import { Image,AsyncStorage,StyleSheet,View } from 'react-native';
import { ListItem,List, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Toast } from 'native-base';
import {Actions} from "react-native-router-flux";
import {NewsFeedComponet} from './NewsFeedComponet'
import CreatePost from "../main/CreatePost";
import {getOwnPosts, getPosts, addPost, deletePost, likePost} from '../../services/postService'

import {NewPost} from './NewPost'
import ImagePicker from "react-native-image-picker";
import PropTypes from 'prop-types'
import {getPostComments} from "../../services/commentService";
export default class NewsFeed extends Component {
    state={
        user:{},
        skip : 0,
        ask:()=>{},
        posts:[],
        loading:false,
        photo:false,
        activeLink:false,
        avatarSource:null,
        newPost:{
            links:[],
            body:"",
            image:"",
            file:""
        },
        image:"https://res.cloudinary.com/fixter/image/upload/v1537307315/concamin/girl.jpeg.jpg",
        creatPost:false,
    }
    componentWillMount(){
        this._retrieveData()
        if(this.props.own){
            this.getOwn();
            this.setState({ask:this.getOwn})
            return;
        }
        else if(this.props.tipo === "PERSONAL"){
            this.getAll();
            this.setState({ask:this.getAll})
            return;
        }
        else if(this.props.tipo === "GROUP"){
            this.getGroupPosts();
            this.setState({ask:this.getGroupPosts});
            return;

        }
    }
    _retrieveData = async () => {
        try {
            const userLocal = await AsyncStorage.getItem('user');

            console.log("el token nuevo", token)
            let user = JSON.parse(userLocal)
            if(user){
                console.log("hay usuario!!",user._id)

                this.setState({user:user})
            }else{
                console.log("no hay nada")
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    //read
    getGroupPosts = (skip=0) => {
        const groupId = this.props.groupId;
        getPosts(skip, "GROUP", groupId)
            .then(posts=>{
                if(posts.length < 1) {
                    console.log('ya no hay post')
                    //this.refs.mas.innerHTML="¡Ya no hay mas posts!";
                    //this.refs.mas.disabled=true;
                }
                const newArray = [...this.state.posts, ...posts];
                this.setState({posts:newArray, skip})
            })
            .catch(err=>{

                Toast.show({
                    text: 'No se pudieron cargar tus posts',
                    buttonText: 'Ok'
                })
            })
    }

    getAll = (skip=0) => {
        getPosts(skip)
            .then(posts=>{

                if(posts.length < 1) {
                    console.log('ya no hay post')
                }
                const newArray = [...this.state.posts, ...posts];
                this.setState({posts:newArray, skip})
            })
            .catch(err=>{

                Toast.show({
                    text: 'No se pudieron cargar tus posts',
                    buttonText: 'Ok'
                })
            })
    };

    getOwn = (skip=0)=>{
        getOwnPosts(skip)
            .then(posts=>{
                if(posts.length < 1) {
                    console.log('ya no hay post')
                    //this.refs.mas.innerHTML="¡Ya no hay mas posts!";
                    //this.refs.mas.disabled=true;
                }
                const newArray = [...this.state.posts, ...posts];
                this.setState({posts:newArray, skip})
            })
            .catch(err=>{
                Toast.show({
                    text: 'No se pudieron cargar tus posts',
                    buttonText: 'Ok'
                })

            })
    }



    askForMore = () => {
        let {skip} = this.state;
        skip += 10;
        this.state.ask(skip)
    }

    //like posts
    likePosts=(postId)=>{
        let obj = {
            _id:postId,
            user:JSON.parse(AsyncStorage.getItem('user'))._id
        }

        likePost(obj)
            .then(r=>{

                let {posts} = this.state
                posts = posts.map(p=>{
                    if(p._id===r._id) p.likes=[...r.likes]
                    return p
                })

                this.setState({posts})
            }).catch(e=>{

        })
    }
    openNewPost=()=>{
        let {creatPost}=this.state;
        creatPost =! creatPost
        this.setState({creatPost})
    }

    //Para los post


    onImage=()=>{
        let {newPost}=this.state
        newPost.links=[]
        this.setState({photo:true,activeLink:false,newPost})
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
        let {newPost}=this.state
        newPost.image = ''
        this.setState({activeLink: true,newPost})
        this.clearImage()
    }


    onSubmit=()=>{

        this.setState({loading:true})
        let {newPost} = this.state;
        console.log("esto",newPost)
        /*if(this.props.tipo === "GROUP" ){
            newPost.tipo = "GROUP";
            newPost.group = this.props.groupId;
        }*/
        addPost(newPost)
            .then(post=>{
                console.log(post)
               let {posts} = this.state;
                posts.unshift(post)
                newPost.body=""
                newPost.links=[]
                this.clearImage()
                this.setState({ newPost, loading:false, activeLink:false})
                this.props.close()
                Toast.show({
                    text: "Se ha publicado tu post!",
                    position: "top",
                    type: "success"
                })
            }).catch(e=>{
            Toast.show({
                text: "Algo salio mal!",
                position: "top",
                type: "danger"
            })
            console.log(e)
        })


    }///hasta aqui termina el de post

    goDetail=(post)=>{


            getPostComments(post._id, 0)
                .then(r=>{
                    Actions.detail({p:post,c:r})
                    console.log(r)

                }).catch(e=>{
                console.log(e)
            })

    }
    render() {
        const options={
            title:'Nuevo Post',
            takePhotoButtonTitle:'Tomar una foto',
            chooseFromLibraryButtonTitle:'Elige una foto desde la galeria',
        }
            let {posts,activeLink,avatarSource,newPost,image}=this.state;
        return (
                <Content>
                    <View>
                        <View style={styles.caja}>
                            <List >
                                <ListItem avatar onPress={this.openNewPost}>
                                    <Left>
                                        <Thumbnail small source={{ uri: 'https://www.mobafire.com/images/avatars/kayn-classic.png' }} />
                                    </Left>
                                    <Body>
                                    <Text note>¿Qué nos quieres compartir?</Text>
                                    </Body>
                                    <Right/>
                                </ListItem>
                            </List>
                        </View>
                        <NewPost open={this.state.creatPost}
                                 close={this.openNewPost}
                                 onImage={this.onImage}
                                 clearImage={this.clearImage}
                                 imagePost={avatarSource}
                                 newPost={newPost}
                                 activeLink={activeLink}
                                 onSubmit={this.onSubmit}
                                 onChange={this.onChange}

                        />
                    </View>
                    {/*<CreatePost/>*/}
                    {posts ?posts.map((post, i)=>
                    <NewsFeedComponet
                        {...post}
                        p={post}
                        newImage={image}
                        key={i}
                        goDetail={this.goDetail}
                    />

                    )
                    :
                    <View><Text>Hola</Text></View>
                    }
                </Content>
        );
    }
}

const styles = StyleSheet.create({

    caja:{
        padding:10,

        borderRadius: 4,
        borderBottomWidth: 4,
        borderColor: '#d6d7da',
    }

})

NewsFeed.propTypes = {
    own: PropTypes.bool.isRequired,
    tipo: PropTypes.string.isRequired,
    groupId: PropTypes.string,
    eventId: PropTypes.string,
}

NewsFeed.defaultProps = {
    own: false,
    tipo: "PERSONAL"
}
