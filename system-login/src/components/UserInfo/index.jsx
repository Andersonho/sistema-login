import React from 'react'

import { Container,NameText, Progress} from './styles';

const UserInfo = () => {
  return (
    <Container>
        <UserInfo>
            <div>
                <NameText>{}</NameText>
                <Progress/>
            </div>
        </UserInfo>
    </Container>
  )
}

export {UserInfo}