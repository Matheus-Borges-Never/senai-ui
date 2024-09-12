import React from 'react';
import styled from 'styled-components';
import { SenaiMedium } from '../Logo';

interface HeaderProps {
    children: React.ReactNode;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  height: 32px
`;

const LeftContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const RightContainer = styled.div`
  flex: 1;
  text-align: right;
`;

export const Header: React.FC<HeaderProps> = ({
    children,
}) => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <SenaiMedium />
            </LeftContainer>
            <RightContainer>
                {children}
            </RightContainer>
        </HeaderContainer>
    );
};

