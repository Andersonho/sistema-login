import {useNavigate} from 'react-router-dom';
import{Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

import {Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper} from './styles';

const Login =() => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    
                sloga para a utilização da plataforma como um meio utilitario para a pratica medica.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form>
                        <Input placeholder="Email"/> 
                        <Input placeholder="Senha" type="password"/>  
                        <Button title="Entrar" variant ="secondary" onClick={handleClickSignIn} type = "button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha  senha </EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
               
            </Column>
        </Container>
    </> )
}
export {Login}