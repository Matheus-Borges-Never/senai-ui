import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  border?: string;
  hoverColor?: string;
  disabled?: boolean;
  iconPosition?: 'left' | 'right' | 'off';
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => 
    props.size === 'large' ? '112px' : 
    props.size === 'medium' ? '103px' : 
    props.size === 'small' ? '94px' : '103px'};
  height: ${props => 
    props.size === 'large' ? '40px' : 
    props.size === 'medium' ? '36px' :
    props.size === 'small' ? '28px' : '36px'};
  padding: 0px;
  gap: 8px;
  padding: 0 24px 0 24px;
  border-radius: 25px;
  border-width: 1.2px;
  border-style: solid;
  border-color: ${props => props.border || 'none'};
  background-color: ${props => props.disabled ? '#e0e0e0' : props.backgroundColor || '#007bff'};
  color: ${props => props.disabled ? '#a0a0a0' : props.color || '#ffffff'};
  transition: background-color 0.3s;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${props => !props.disabled && (props.hoverColor || '#0F59E6')};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  hoverColor,
  border,
  disabled = false,
  size = 'large',
  children,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      hoverColor={hoverColor} 
      border={border}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
};
