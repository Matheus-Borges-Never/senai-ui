import React, { useState } from "react";
import styled from "styled-components";

interface ToggleProps {
  isActive: boolean;
  size: "md" | "lg";
  disabled?: boolean;
}

const ToggleContainer = styled.div<ToggleProps>`
  width: ${(props) => (props.size === "lg" ? "50px" : "38px")};
  height: ${(props) => (props.size === "lg" ? "24px" : "16px")};
  padding: 2px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#164194" : "#7C8E94")};
  position: relative;
  box-shadow: ${(props) =>
    props.isActive
      ? "0px 4px 10px 0px #A7B5B933 20%"
      : "none"};

  // Efeito hover com sombra
  &:hover {
    box-shadow: inset 1px 1px 6px 0px #ffffff66 40%;
  }

  // Estilo quando estiver desativado
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ToggleCircle = styled.div<ToggleProps>`
  width: ${(props) => (props.size === "lg" ? "24px" : "16px")};
  height: ${(props) => (props.size === "lg" ? "24px" : "16px")};
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.isActive ? "translateX(100%)" : "translateX(0)"};
  position: absolute;
  left: 2px;
`;

export const Toggle: React.FC<{ size?: "md" | "lg"; disabled?: boolean }> = ({
  size = "md",
  disabled = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsActive(!isActive);
    }
  };

  return (
    <ToggleContainer
      isActive={isActive}
      onClick={handleToggle}
      size={size}
      disabled={disabled}
    >
      <ToggleCircle isActive={isActive} size={size} />
    </ToggleContainer>
  );
};
