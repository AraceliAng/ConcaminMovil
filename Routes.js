import React from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Recovery from "./src/components/login/Recovery";
import LoginComponent from "./src/components/login/LoginComponent";
import Main from "./src/components/main/MainPage";
import DetailPost from "./src/components/news/DetailPost";
import MainEvent from "./src/components/events/MainEvent";


const Routes = () => {
    return (
        <Root>
            <Router>

                <Scene key="root">

                    <Scene key="login" header={null} component={LoginComponent} inital />

                    <Scene key="main" header={null} component={Main} />
                    <Scene key="detail" header={null} component={DetailPost}/>


                    <Scene key="event" header={null} component={MainEvent}  />

                    <Scene key="recover" header={null} component={Recovery}/>

                </Scene>
            </Router>
        </Root>
    );
}
export default Routes;