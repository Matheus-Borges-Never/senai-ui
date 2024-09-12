import React from "react";
import styled, { css } from "styled-components";

interface TooltipProps {
  size: "lg" | "small";
  title?: string;
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
  children: React.ReactNode;
}

const TooltipContainer = styled.div<{ size: "lg" | "small" }>`
  background: rgba(34, 39, 42, 0.7); /* #22272AB2 70% */
  padding: 0px 0px 8px 0px;
  border-radius: 16px;
  border: 1px solid;
  border-image-source: linear-gradient(92.27deg, rgba(84, 178, 255, 0.1) -5.44%, #383E41 73.36%);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ size }) =>
    size === "lg"
      ? css`
          width: 312px;
          height: 128px;
        `
      : css`
          width: 198px;
          height: 124px;
        `}
`;

const TooltipHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding: 16px 16px 8px 16px;
`;

const TooltipBody = styled.div`
  font-size: 14px;
  color: #c0c4c6;
  padding: 0px 16px 8px 16px;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha os botões à direita */
  padding: 0 16px 4px 16px;
`;

const TooltipButtons = styled.div`
  display: flex;
  gap: 32px; /* Espaço de 32px entre os botões */
`;

const Button = styled.button`
  font-size: 14px;
  color: #5492ff;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({
  size,
  title,
  leftButtons,
  rightButtons,
  children,
}) => {
  return (
    <TooltipContainer size={size}>
      <TooltipHeader>{title}</TooltipHeader>
      <TooltipBody>{children}</TooltipBody>
      {(leftButtons || rightButtons) && (
        <TooltipFooter>
          <TooltipButtons>
            <Button>{leftButtons}</Button>
            <Button>{rightButtons}</Button>
          </TooltipButtons>
        </TooltipFooter>
      )}
    </TooltipContainer>
  );
};
