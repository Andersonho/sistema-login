// import {Link} from 'react-router-dom';
// import{Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";

import {
    Container,
    Column, 
    Title,
    TitleHightlight
    } from './styles';

const Feed =() => {
    return (<>
        <Header autenticado={true}/>
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
                <UserInfo percentual={80} nome= "Anderson" image="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/56786460_577507906095643_137794082842869760_n.jpg?ccb=11-4&oh=01_AdTLBUAGNbuOF_CDGSGBqQhpw5ozxFv7aPaErP_VODjThQ&oe=65A3FE8F&_nc_sid=e6ed6c&_nc_cat=108"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/56786460_577507906095643_137794082842869760_n.jpg?ccb=11-4&oh=01_AdTLBUAGNbuOF_CDGSGBqQhpw5ozxFv7aPaErP_VODjThQ&oe=65A3FE8F&_nc_sid=e6ed6c&_nc_cat=108"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            <UserInfo percentual={80} nome= "Anderson" image="https://www.google.com.br/imghp?hl=pt-BR&ogbl"/>
            </Column>      
        </Container>
    </> )
}
export {Feed}