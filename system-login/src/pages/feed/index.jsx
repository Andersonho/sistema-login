// import {Link} from 'react-router-dom';
// import{Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";
// import bannerImage from '../../assets/banner.png';

import {
    Container,
    // TextContent, 
    // Title,
    // TitleHightlight
    } from './styles';

const Feed =() => {
    return (<>
        <Header/>
        <Container>
            <Card/>
            <UserInfo percentual={35} nome= "Anderson" image=""/>
        </Container>
    </> )
}
export {Feed}