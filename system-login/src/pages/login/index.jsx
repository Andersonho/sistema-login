import {useNavigate} from 'react-router-dom';
import{Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import {Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  }).required();

const Login =() => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors,isValid, } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(isValid, errors);
       
    const onSubmit = data => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name= "email" errorMessagem={errors?.email?.message} control = {control} placeholder="Email" /> 
                        <Input name= "password" control ={control} errorMessagem={errors?.password?.message} placeholder="Senha" type="password"/>  
                        <Button title="Entrar" variant ="secondary" onClick={ handleClickSignIn} type = "submit"/>
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