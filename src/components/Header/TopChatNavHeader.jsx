import React from 'react';
import styled from 'styled-components';

import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const TopChatNavHeader = ({ text }) => {
  return (
    <HeaderContainer>
      <BackAndUserText>
        <BackButton />
        <User>{text}</User>
      </BackAndUserText>
      <button>
        <GlovalSprite id={'s-icon-more-vertical'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopChatNavHeader;

const BackAndUserText = styled.div`
  display: flex;
  padding: 13px;
`;

const User = styled.span`
  text-align: center;
  font-size: 14px;
  margin: 5px 0 0px 10px;
  font-weight: 500;
`;
