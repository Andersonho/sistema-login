import React from 'react'
// import {FiThumbsUp} from 'react-icons'

import { 
    CardContainer,
    ImageBackground,
    Content,
    HasInfo,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground/>
        <Content>
            <UserInfo>
                <UserPicture />
                <div>
                    <h4>Anderson</h4>
                    <p>Há 6 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4> Projeto de JavaScript com React</h4>
                <p> Projeto desenvolvido no projeto PrivHealth <strong> Saiba mais!!</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #REACT #JAVASCRIPT </h4>
                <p>
                    {/* <FiThumbsUp/> 10 */}
                </p>
            </HasInfo>
        </Content>
            
    </CardContainer>
  )
}
export {Card}

