import React from 'react'
import logo from '../../assets/logo.png';
import {Button} from '../Button';

import {
    // BuscarInputConatiner,
    Container,
    Input,
    Menu,
    // MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
   <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da PH"/> 
                {/* <BuscarInputConatiner> */}
                    <Input placeholder='Buscar...'/>
                {/* </BuscarInputConatiner> */}
                <Menu>Live Code</Menu>
                <Menu>Global</Menu> 
            </Row>
            <Row>
            {/* <MenuRight href="#">Home</MenuRight>  */}
                <Button title= "Entrar"/>
                <Button title= "Cadastrar"/>
            </Row>
        </Container>
   </Wrapper>
  )
}
export {Header}
