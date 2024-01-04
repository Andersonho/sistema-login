// import {Link} from 'react-router-dom';
// import{Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";
// import bannerImage from '../../assets/banner.png';

import {
    Container,
    Column, 
    Title,
    TitleHightlight
    } from './styles';

const Feed =() => {
    return (<>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>    
            <Column flex={1}>
                <TitleHightlight>#RANKING DA SEMANA</TitleHightlight>
            </Column>    
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
        </Container>
    </> )
}
export {Feed}