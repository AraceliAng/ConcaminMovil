import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container,Content} from 'native-base'
import Carousel from 'react-native-smart-carousel';
import img1 from '../../assets/images/image10.jpg'
import img2 from '../../assets/images/image11.jpg'
import img3 from '../../assets/images/image3.jpg'



export default class CarouselLogin extends Component{
    state = {
        data:[
            {
                "id": 1,
                "title": "Bienvenidos a CONCAMIN-RED",
                "subtitle":"DONDE LA COMUNICACIÓN EMERGE",
                "imagePath": img1, // URL
            },
            {
                "id": 2,
                "title": "Experiencia",
                "subtitle":"CONCAMIN ofrece a empresas de todos los tamaños la oportunidad de replantear la forma en la que trabajan.",
                "imagePath": img2, // URL
            },
            {
                "id": 3,
                "title": "Un espacio que funciona para ti",
                "imagePath": img3 // imported
            },

        ]
    };

    render(){
        let {data}= this.state;
        return(

                <Carousel
                    autoPlay={true}
                    titleColor={'#fff'}
                    height={400}
                    data={data}
                    navigationType={"bars"}
                    navigationColor={'#ffffff'}
                    navigation={true}
                />

        )
    }
}