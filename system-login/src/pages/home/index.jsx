import {useNavigate} from 'react-router-dom';
import{Button} from "../../components/Button";
import {Header} from "../../components/Header";

import bannerImage from '../../assets/banner.png';

import {
    Container,
    TextContent, 
    Title,
    TitleHightlight
    } from './styles';

const Home =() => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHightlight>
                    Realize o seu cadastro
                    <br/>
                    </TitleHightlight>
                    O seu acesso depende disso!!
                </Title>
                <TextContent>
                sloga para a utilização da plataforma como um meio utilitario para a pratica medica.
                </TextContent>
                <Button title="Começar agora" variant="secodary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src = {bannerImage} alt ="Imagem principal"/>
            </div>
        </Container>
    </> )
}
export {Home}